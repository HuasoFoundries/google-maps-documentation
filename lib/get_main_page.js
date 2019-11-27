const debug = require('debug')('gmd:getMainPage'),
  _ = require('lodash'),
  rootLink = 'https://developers.google.com/maps/documentation',
  fnConsole = async msg => {
    let location = msg.location(),
      message = msg.text(),
      type = msg.type(),
      values = [];

    for (let jsHandle of msg.args()) {
      values.push(await jsHandle.jsonValue());
    }
    (console[type] || console.warn)(...values);
  },
  onPageError = err => {
    debug({err});
    console.error(err);
  };

async function getMainPage(browser) {
  const page = await browser.newPage();

  await page.goto(`${rootLink}/javascript/reference/`);

  page.on('console', fnConsole);
  page.on('error', onPageError);
  page.on('pageerror', onPageError);
  await page.waitForSelector('.devsite-article-body');
  await page.waitFor(1500);

  let last_update_text = await page.evaluate(() => {
    return document
      .querySelector('.devsite-article-body')
      .querySelector('p')
      .textContent.trim();
  });
  debug({last_update_text});

  let last_version = await page.evaluate(() => {
    let textContent = document
      .querySelector('.devsite-article-body')
      .querySelector('p').nextElementSibling.textContent;
    let version = /(\d{1}\.\d{2}) \(weekly channel\)/.exec(textContent)[1];
    return version;
  });

  let links = await page.evaluate(baseUrl => {
      var h3s = [],
        innerlinks = [];
      try {
        h3s = Array.from(
          document
            .querySelector('.devsite-article-body')
            .querySelectorAll('devsite-heading > h3')
        );
      } catch (err) {
        console.info('error after array from', err);
        return innerlinks;
      }
      console.log('found ' + h3s.length + ' links');
      try {
        innerlinks = h3s.reduce((accum, h3) => {
          let element = (h3 || {}).parentElement;
          if (!h3 || !element) {
            return accum;
          }
          let title = element.querySelector('a').innerText,
            linkId = element.id || element.text || h3.id,
            href = element.querySelector('a').href,
            link = {title, linkId, href},
            shortlink = href.replace(baseUrl, '');

          console.log('found link:', {title, linkId, shortlink});
          let next = element.nextElementSibling;
          while (next && next.tagName !== 'DL') {
            console.log('next.tagName', next.tagName);
            next = next.nextElementSibling;
          }

          let sublinks = Array.from(next.querySelectorAll('dt')).map(
            child_element => {
              return {
                href: child_element.querySelector('a').href,
                linkId: child_element.id,
                title: child_element.id
              };
            }
          );
          accum.push({children: sublinks, ...link});
          return accum;
        }, []);
      } catch (err) {
        console.log('Error getting inner links', err.message);
        console.warn(err);
      }
      return innerlinks;
    }, rootLink),
    linksObj = {
      links,
      inner_links: _.reduce(
        links,
        (accum, link) => {
          accum = accum.concat(_.map(link.children, 'href'));
          return accum;
        },
        []
      ),
      inner_refs: _.reduce(
        links,
        (accum, link) => {
          accum = accum.concat(
            _.map(link.children, child => {
              return child.href.split('#')[1];
            })
          );
          return accum;
        },
        []
      )
    };
  return {
    last_update_text,
    last_version,
    links,
    linksObj,
    page
  };
}

module.exports = getMainPage;
