const debug = require('debug')('gmd:getMainPage'),
  _ = require('lodash'),
  rootLink = 'https://developers.google.com/maps/documentation',
  Promise = require('bluebird'),
  fs = Promise.promisifyAll(require('fs')),
  path = require('path'),
  chalk = require('chalk'),
  fetch = require('node-fetch'),
  cheerio = require('cheerio'),
  beautify_html = require('js-beautify').html,
  jsdom = require('jsdom'),
  {JSDOM} = jsdom,
  fetchHtml = async (url) => {
    debug(`Opening: ${chalk.green(url)}`);
    return fetch(url)
      .then((res) => res.text())
      .then((body) => {
        let $ = cheerio.load(body),
          contentElement = $('.devsite-article-body').parent();

        contentElement
          .find('style,devsite-feedback,.devsite-banner,.devsite-article-meta')
          .each((index, element) => {
            $(element).remove();
          });
        const contentHTML = beautify_html(contentElement.html(), {
          indent_size: 2,
          space_in_empty_paren: true,
        });
        return fs
          .writeFileAsync(
            path.resolve(`${__dirname}/../source_html/index.html`),
            contentHTML,
            'utf-8'
          )
          .then(() => {
            return contentHTML;
          });
      });
  },
  fnConsole = async (msg) => {
    let location = msg.location(),
      message = msg.text(),
      type = msg.type(),
      values = [];

    for (let jsHandle of msg.args()) {
      values.push(await jsHandle.jsonValue());
    }
    (console[type] || console.warn)(...values);
  },
  onPageError = (err) => {
    debug({err});
    console.error(err);
  };

async function getMainPage(version = '') {
  const body = await fetchHtml(
      [`${rootLink}/javascript/reference`, version].join('/')
    ),
    $ = cheerio.load(body),
    dom = new JSDOM(body, {
      url: rootLink,
    }),
    document = dom.window.document,
    bodyEl = document.body;
  let last_update_text = $('p').first().text().trim();
  let last_version_text = $('p').first().next().text();
  debug({last_update_text, last_version_text});
  let last_version =
    version || /(\d{1}\.\d{2}) \(weekly channel\)/.exec(last_version_text)[1];

  let links = ((baseUrl) => {
      var h3s = [],
        innerlinks = [];
      try {
        h3s = Array.from(
          document.querySelectorAll('.devsite-article-body > h3')
        );
      } catch (err) {
        console.info('error after array from', err);
        return innerlinks;
      }
      console.log('found ' + h3s.length + ' links');

      try {
        innerlinks = h3s.reduce((accum, h3) => {
          let element = h3; //(h3 || {}).parentElement;
          if (!h3 || !element) {
            return accum;
          }
          let aElement = element.querySelector('a'),
            title = aElement.innerText || element.text || aElement.innerHTML,
            linkId = element.id || element.text || h3.id,
            shortlink = aElement.href.replace(baseUrl, ''),
            href = aElement.href,
            link = {title, linkId, href};

          console.log(`found link:, ${title}, ${linkId}, ${shortlink}`);
          let next = element.nextElementSibling;
          while (next && next.tagName !== 'DL') {
            console.log('next.tagName', next.tagName);
            next = next.nextElementSibling;
          }

          let sublinks = Array.from(next.querySelectorAll('dt')).map(
            (child_element) => {
              let subsublinks = [...next.querySelectorAll('dd a')].reduce(
                (accumChild, grandchild) => {
                  accumChild[grandchild.href.split('/').pop()] =
                    grandchild.href;
                  return accumChild;
                },
                {}
              );

              return {
                href: child_element.querySelector('a').href,
                linkId: child_element.id,
                title: child_element.id,
                children: subsublinks,
              };
            }
          );
          link.children = sublinks;
          accum.push(link);

          return accum;
        }, []);
      } catch (err) {
        console.log('Error getting inner links', err.message);
        console.warn(err);
      }
      return innerlinks;
    })(rootLink),
    linksObj = {
      links,
    };
  await fs.writeFileAsync(
    path.resolve(`${__dirname}/../links.json`),
    JSON.stringify(linksObj, null, 4),
    'utf-8'
  );
  let sample;
  linksObj = {
    ...linksObj,
    inner_links: _.reduce(
      links,
      (accum, link) => {
        accum = accum.concat(_.map(link.children, 'href'));

        //accum = accum.concat(
        let granChildren = link.children.reduce((childAccum, child) => {
          childAccum = childAccum.concat(Object.values(child.children));
          return childAccum;
        }, []);
        accum = accum.concat(granChildren);
        //);
        return _.uniq(accum);
      },
      []
    ),
    inner_refs: links.reduce((accum, link) => {
      let granChildren = _.reduce(
        link.children,
        (childAccum, child) => {
          childAccum = childAccum.concat(
            Object.values(child.children).map((grandChild) => {
              return grandChild /*.href*/
                .split('#')[1];
            })
          );
          return childAccum;
        },
        []
      );
      accum = accum.concat(_.uniq(granChildren));

      return accum;
    }, []),
  };
  //linksObj.links = linksObj.links.map(link=>{return _.,)
  linksObj.inner_refs = _.groupBy(linksObj.inner_refs, (ref) => {
    return ref.split('.')[0];
  });

  await fs.writeFileAsync(
    path.resolve(`${__dirname}/../links.json`),
    JSON.stringify(linksObj, null, 4),
    'utf-8'
  );
  return {
    last_update_text,
    last_version,
    links,
    linksObj,
  };
}

module.exports = getMainPage;
