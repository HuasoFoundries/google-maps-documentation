const Promise = require('bluebird'),
  _ = require('lodash'),
  fs = Promise.promisifyAll(require('fs')),
  path = require('path'),
  chalk = require('chalk'),
  find = require('find'),
  debug = require('debug')('gmd:transform_to_markdown'),
  TurndownService = require('turndown'),
  docLinks = require(`${__dirname}/../docLinks.json`),
  beautify_html = require('js-beautify').html,
  jsdom = require('jsdom'),
  {JSDOM} = jsdom,
  showdown = require('showdown'),
  converter = new showdown.Converter(),
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

  let file = path.resolve(`${__dirname}/../html/${referenceObject.title}.md`),
    withoutCodeTag = content
      .trim()
      .replace(/<code/g, '<var')
      .replace(/<\/code/g, '</var')
      .split(/<script/)[0],
    markdown = turndownService.turndown(withoutCodeTag),
    baseUrl = `https://huasofoundries.github.io/google-maps-documentation`,
    linkBefore = `[See html formatted version](${baseUrl}/${referenceObjectProps.title}.html)

`,
    scriptAfter = `<script src="replace_links.js"></script>`,
    markdownFinal = linkBefore + markdown;
  //await fs.writeFileAsync(file, content + scriptAfter, 'utf-8');
  return fs.writeFileAsync(
    path.resolve(`${__dirname}/../docs/${referenceObjectProps.title}.md`),
    markdownFinal,
    'utf-8'
  );
}

if (require.main === module) {
  let t_ini = Date.now();
  (async () => {
    let index_md = `${__dirname}/../docs/index.md`,
      indexfile = `${__dirname}/../html/index.html`;

    await fs.copyFileAsync(index_md, indexfile);
    find.file(/\.md/, path.resolve(`${__dirname}/../html`), async files => {
      for (let file of files) {
        debug(`loading ${chalk.green(path.basename(file))}`);

        await Promise.try(async () => {
          let dom = await JSDOM.fromFile(path.resolve(file)),
            document = dom.window.document,
            bodyEl = document.body;
          [...bodyEl.querySelectorAll('script')].forEach(node => {
            node.remove();
          });
          let content = bodyEl.innerHTML;
          debug(`         converting to MarkDown`);
          await convertToMD({
            content,

            title: path.basename(file, path.extname(file))
          });
          [...bodyEl.querySelectorAll('a')].forEach(node => {
            console.log({href: node.href});
            let href = node.href;
            if (!href.startsWith('http') && !href.startsWith('#')) {
              href = href.replace(/^(\W+)/g, '/$1');
            }
            node.href = href.replace('.md', '.html');
          });
          debug(`         beautifying`);
          await fs.writeFileAsync(
            file.replace('.md', '.html'),
            beautify_html(bodyEl.innerHTML, {
              indent_size: 2,
              space_in_empty_paren: true
            }),
            'utf-8'
          );
          console.log(chalk.green('Success'));
          console.log();
          return;
        }).catch(err => {
          console.error(err);
        });
      }
    });
  })();
}
module.exports = convertToMD;
