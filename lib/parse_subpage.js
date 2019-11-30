const Promise = require('bluebird'),
  _ = require('lodash'),
  fs = Promise.promisifyAll(require('fs')),
  path = require('path'),
  chalk = require('chalk'),
  debug = require('debug')('gmd:parseSubPage'),
  TurndownService = require('turndown'),
  convertToMD = require(path.resolve(`${__dirname}/html2md.js`)),
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
  },
  baseUrl = `https://huasofoundries.github.io/google-maps-documentation`;

async function parseSubPage({link, browser, linksObj = {}, docLinks = {}}) {
  const page = await browser.newPage();
  debug(
    `NEXT: will parse ${chalk.bold.green(link.title)} at ${chalk.cyan(
      link.href.replace(rootLink, '')
    )}`
  );
  await page.goto(link.href);
  page.on('console', fnConsole);
  page.on('error', onPageError);
  page.on('pageerror', onPageError);
  await page.waitForSelector(
    'div[itemtype="http://developers.google.com/ReferenceObject"]'
  );

  let sp_sections = await page.evaluate(objLinks => {
    let subpage_sections = Array.from(
      document.querySelectorAll(
        'div[itemtype="http://developers.google.com/ReferenceObject"]'
      )
    ).map(referenceObject => {
      try {
        referenceObject.querySelector(
          'h2'
        ).innerHTML = referenceObject.querySelector('h2').innerText;
        Array.from(referenceObject.querySelectorAll('a.secret-link')).forEach(
          secretlink => {
            secretlink.innerHTML = `<span>${secretlink.innerText}</span>`;
          }
        );

        Array.from(referenceObject.querySelectorAll('a')).forEach(aElement => {
          // If this link points somewhere outside the scope of these docs, leave it as is
          if (aElement.href.indexOf('#') === -1) {
            return;
          }
          if (/^\/maps\/documentation\//.test(aElement.href)) {
            aElement.href = `https://developers.google.com${aElement.href}`;
          }

          // If this links begins with # then point it to this repo docs
          if (
            /^#/.test(aElement.href) &&
            (objLinks.inner_refs || []).indexOf(aElement.href)
          ) {
            aElement.href = `${aElement.href.replace(/^#/, '')}.md`;
          } else if (objLinks.inner_links.indexOf(aElement.href) !== -1) {
            // If this link points to other known section of the docs, then replace it
            // with a link to this repo docs
            aElement.href = `${aElement.href
              .split('#')[1]
              .replace(/^#/, '')}.md`;
          }
        });
        var heading = referenceObject.querySelector('devsite-heading'),
          h2 = heading.querySelector('h2');
        return {
          title: h2.id,
          path: heading.nextElementSibling.querySelector(
            'span[itemprop="path"]'
          ).innerText,
          name: heading.nextElementSibling.querySelector(
            'span[itemprop="name"]'
          ).innerText,
          content: referenceObject.innerHTML
        };
      } catch (err) {
        console.error(err);
      }
    });
    return subpage_sections;
  }, linksObj);
  let saveHTMLPromises = [],
    saveMarkdownPromises = [];

  await page.close();
  sp_sections.forEach(referenceObject => {
    /*debug(
      `docLinks[${referenceObject.path}.${referenceObject.name}] = ${referenceObject.title}.html`
    );*/

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
