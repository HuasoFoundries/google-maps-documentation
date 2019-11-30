const Promise = require('bluebird'),
  _ = require('lodash'),
  fs = Promise.promisifyAll(require('fs')),
  path = require('path'),
  chalk = require('chalk'),
  find = require('find'),
  debug = require('debug')('gmd:transform_to_markdown'),
  TurndownService = require('turndown'),
  docLinks = require(`${__dirname}/../docLinks.json`),
  turndownService = new TurndownService();

// This script was meant to try the idea of keeping MD docs in develop folder, and html docs in github pages
async function convertToMD(referenceObject, linksObj) {
  linksObj = (
    (linksObj || require(`${__dirname}/../links.json`)).inner_links || {}
  ).reduce((accum, link) => {
    let namespacedObject = link.split('#').pop();
    accum[namespacedObject] = link;

    return accum;
  }, {});

  let {content, ...referenceObjectProps} = referenceObject;
  referenceObjectProps.originalLink = linksObj[referenceObjectProps.title];

  let file = path.resolve(`${__dirname}/../html/${referenceObject.title}.md`);

  let withoutCodeTag = content
    .trim()
    .replace(/<code/g, '<var')
    .replace(/<\/code/g, '</var');

  let markdown = turndownService.turndown(withoutCodeTag),
    baseUrl = `https://huasofoundries.github.io/google-maps-documentation`,
    linkBefore = `[See html formatted version](${baseUrl}/${referenceObjectProps.title}.html)


`,
    markdownFinal = linkBefore + markdown;

  return fs.writeFileAsync(
    path.resolve(`${__dirname}/../docs/${referenceObjectProps.title}.md`),
    markdownFinal,
    'utf-8'
  );
}

if (require.main === module) {
  let t_ini = Date.now();
  find.file(/\.md/, path.resolve(`${__dirname}/../html`), async files => {
    for (let file of files) {
      debug(`converting ${chalk.green(path.basename(file))} to MarkDown`);
      let content = fs
        .readFileSync(path.resolve(file))
        .toString('UTF8')
        .trim();
      await convertToMD({
        content,
        title: path.basename(file, path.extname(file))
      });
    }
  });
}

module.exports = convertToMD;
