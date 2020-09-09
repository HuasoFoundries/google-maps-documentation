const Promise = require('bluebird'),
  _ = require('lodash'),
  fs = Promise.promisifyAll(require('fs')),
  path = require('path'),
  chalk = require('chalk'),
  debug = require('debug')('gmd:parseSubPage'),
  TurndownService = require('turndown'),
  convertToMD = require(path.resolve(`${__dirname}/html2md.js`)),
  rootLink = 'https://developers.google.com/maps/documentation',
  beautify_html = require('js-beautify').html,
  jsdom = require('jsdom'),
  {JSDOM} = jsdom,
  fetch = require('node-fetch'),
  cheerio = require('cheerio'),
  fetchHtml = async (url) => {
    return fetch(url)
      .then((res) => res.text())
      .then((body) => {
        let $ = cheerio.load(body),
          contentElement = $('.devsite-article-body').parent();

        contentElement
          .find(
            'style,devsite-feedback,devsite-iframe,.devsite-banner,.devsite-article-meta'
          )
          .each((index, element) => {
            $(element).remove();
          });
        const contentHTML = beautify_html(contentElement.html(), {
            indent_size: 2,
            space_in_empty_paren: true,
          }),
          section = url.split('/').pop();
        return fs
          .writeFileAsync(
            path.resolve(`${__dirname}/../source_html/${section}.html`),
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
  },
  baseUrl = `https://huasofoundries.github.io/google-maps-documentation`;

async function parseSubPage({link, browser, linksObj = {}, docLinks = {}}) {
  debug(
    `NEXT: will parse ${chalk.bold.green(link.title)} at ${chalk.cyan(
      link.href.replace(rootLink, '')
    )}`
  );
  const body = await fetchHtml(link.href),
    dom = new JSDOM(body, {
      url: rootLink,
    }),
    document = dom.window.document,
    bodyEl = document.body;

  let sp_sections = ((theArg) => {
    let objLinks = theArg.linksObj,
      dbg = theArg.debug;
    let subpage_sections = Array.from(
      document.querySelectorAll(
        'div[itemtype="http://developers.google.com/ReferenceObject"]'
      )
    ).map((referenceObject) => {
      try {
        referenceObject.querySelector(
          'h2'
        ).innerHTML = referenceObject.querySelector('h2').innerText;
        Array.from(referenceObject.querySelectorAll('a.secret-link')).forEach(
          (secretlink) => {
            secretlink.innerHTML = `<span>${secretlink.innerText}</span>`;
          }
        );

        var refLinks = [...referenceObject.querySelectorAll('a')].forEach(
          (aElement) => {
            // If this link points somewhere outside the scope of these docs, leave it as is
            if (aElement.href.indexOf('#') === -1) {
              return aElement;
            }

            if (/^\/maps\/documentation\//.test(aElement.href)) {
              console.log('matched internal link ' + aElement.href);
              aElement.href = `https://developers.google.com${aElement.href}`;
            }
            // If this links begins with # then point it to this repo docs
            if (/^#/.test(aElement.href)) {
              console.log(aElement.href);

              if ((objLinks.inner_refs || {})[aElement.href.split('#')[0]]) {
                aElement.href = `${aElement.href.replace(/^#/, '')}.md`;
              }
            } else if (objLinks.inner_links.indexOf(aElement.href) !== -1) {
              // If this link points to other known section of the docs, then replace it
              // with a link to this repo docs
              let [beforeHash, afterHash] = aElement.href.split('#');
              if (afterHash.indexOf('.')) {
                let candidateParts = afterHash.split('.');
                candidateParts.pop();
                afterHash = candidateParts.join('.');
              }
              let candidateLink = [beforeHash, afterHash].join('#');
              if (afterHash) {
                console.log('afterHash: ' + afterHash);
                aElement.href = `${afterHash}.md`;
              }
            }
            return aElement.href;
          }
        );

        var heading = referenceObject.querySelector('h2'),
          h2 = heading,
          result = {
            title: h2.id,
            refLinks, //: [...new Set(refLinks)]
          };
        debug({...result});
        try {
          result = {
            ...result,
            path: heading.nextElementSibling.querySelector(
              'span[itemprop="path"]'
            ).innerText,
            name: heading.nextElementSibling.querySelector(
              'span[itemprop="name"]'
            ).innerText,
            content: referenceObject.innerHTML,
          };
          return result;
        } catch (errRef) {
          console.log({errRef});
          return result;
        }
      } catch (err) {
        console.log(err);
        return {};
      }
    });
    return subpage_sections.filter((section) => {
      return section.name;
    });
  })({linksObj, debug});

  let saveHTMLPromises = [],
    saveMarkdownPromises = [];

  sp_sections.forEach((referenceObject) => {
    let {refLinks, path: refPath, name, title} = referenceObject;
    //  debug(refLinks, `docLinks[${refPath}.${name}] = ${title}.html`);

    docLinks[
      `${referenceObject.path}.${referenceObject.name}`
    ] = `${baseUrl}/${referenceObject.title}.html`; // eslint-disable-line max-len

    saveHTMLPromises.push(
      fs.writeFileAsync(
        path.resolve(`${__dirname}/../html/${referenceObject.title}.md`),
        referenceObject.content,
        'utf-8'
      )
    );
    saveMarkdownPromises.push(convertToMD(referenceObject, linksObj));
  });
  await Promise.all(saveHTMLPromises);

  await Promise.all(saveMarkdownPromises);
  return link;
}

module.exports = parseSubPage;
