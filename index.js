const Promise = require('bluebird'),
  _ = require('lodash'),
  fs = Promise.promisifyAll(require('fs')),
  puppeteer = require('puppeteer'),
  path = require('path'),
  chalk = require('chalk'),
  debug = require('debug')('gmd:scraper'),
  execSh = require('exec-sh'),
  TurndownService = require('turndown'),
  convertToMD = require(path.resolve(`${__dirname}/lib/html2md.js`)),
  getMainPage = require(path.resolve(`${__dirname}/lib/get_main_page.js`)),
  parseSubPage = require(path.resolve(`${__dirname}/lib/parse_subpage.js`)),
  turndownService = new TurndownService(),
  execShPromise = require('exec-sh').promise;

/*var exec = require('child_process').exec;
function execute(command, callback){
    exec(command, function(error, stdout, stderr){ callback(stdout); });
};*/
async function commit(sentence) {
  let out;
  debug(`performing ${chalk.cyan(sentence)}`);
  try {
    out = await execShPromise(sentence, true);
  } catch (e) {
    debug('Error: ', e);
    debug('Stderr: ', e.stderr);
    debug('Stdout: ', e.stdout);
    return (
      e.stdout.indexOf('nothing to commit') !== -1 ||
      e.stderr.indexOf('nothing to commit') !== -1
    );
  }

  return out.stdout.indexOf('nothing to commit') !== -1;
}

let baseUrl = `https://huasofoundries.github.io/google-maps-documentation`,
  version_history = require('./version_history.json'),
  last_update_entry = require('./version_last_update.json'),
  lastversion;

async function writeDocsAndDumps(tableOfContents, linksObj, docLinks) {
  let readmeBuffer = await fs.readFileAsync(
      path.resolve(`${__dirname}/README.md`)
    ),
    readmeString = readmeBuffer
      .toString('UTF8')
      .split('### Last Update')[0]
      .trim();

  readmeString += tableOfContents;

  let docsReadme = readmeString.replace(/docs\//g, '');

  let indexMd = docsReadme.replace(/\.md\)/g, '.html)');

  return [
    {filePath: path.resolve(`${__dirname}/README.md`), content: readmeString},
    {
      filePath: path.resolve(`${__dirname}/docs/README.md`),
      content: docsReadme
    },
    {filePath: path.resolve(`${__dirname}/docs/index.md`), content: indexMd},
    {
      filePath: path.resolve(`${__dirname}/links.json`),
      content: JSON.stringify(linksObj, null, 4)
    },
    {
      filePath: path.resolve(`${__dirname}/docLinks.json`),
      content: JSON.stringify(docLinks, null, 4)
    }
  ].map(pair => {
    return fs.writeFileAsync(pair.filePath, pair.content, 'utf-8');
  });
}
async function startParsing() {
  console.log(`Starting scraper at ${new Date().toISOString()}`);
  let docLinks = {};

  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  let {
      last_update_text,
      last_version,
      links,
      linksObj,
      page
    } = await getMainPage(browser),
    last_update = last_update_text.replace('Last updated', '').trim(),
    last_date = new Date(last_update).toISOString().split('T')[0],
    current_data = {
      version: last_version,
      last_update,
      last_date
    };

  debug(`parsing ${chalk.green(links.length)} links`, {
    waitingfor: 'parse subpages',
    current_data,
    last_update_entry
  });
  await page.waitFor(4000);
  await page.close();

  if (
    !process.env.DRY_RUN &&
    (current_data.version > last_update_entry.version ||
      current_data.last_date > last_update_entry.last_date)
  ) {
    debug(`${chalk.red('Detected updates')}, will push to version history`);
    version_history.push(current_data);
    await fs.writeFileAsync(
      'version_history.json',
      JSON.stringify(version_history, null, 4),
      'utf-8'
    );
    await fs.writeFileAsync(
      'version_last_update.json',
      JSON.stringify(current_data, null, 4),
      'utf-8'
    );
  }
  if (
    !process.env.DRY_RUN &&
    current_data.version > last_update_entry.version
  ) {
    await commit(`git tag v${last_update_entry.version}`);
  }
  let commitMsg = `Version ${current_data.version}, last updated on ${current_data.last_update}`;

  let tableOfContents = `

### Last Update

${commitMsg}.

### Table of Contents
`;
  await Promise.map(
    links,
    link => {
      tableOfContents += `
#### ${link.title}
`;
      tableOfContents += (link.children || []).map(child => {
        return `
  - [${child.title}](docs/${child.title}.md)`;
      });

      return parseSubPage({link, browser, linksObj, docLinks})
        .then(() => {
          let parsed = _.omit(link, ['children']);
          parsed.children = link.children.length;
          debug(
            `parsed subpage ${chalk.bold.blue(
              link.title
            )} with ${chalk.bold.white(parsed.children)} sections`
          );
          return;
        })
        .catch(err => {
          debug('error parsing subpage', link, err);
          return;
        });
    },
    {concurrency: 4}
  ).catch(err => {
    debug('error parsing subpages', err);
    return;
  });

  await writeDocsAndDumps(tableOfContents, linksObj, docLinks);
  if (!process.env.DRY_RUN) {
    await commit(`git push --tags`);
    await commit(`git add --all`);

    let nothing_to_commit = process.env.DRY_RUN || (await commit(`git status`));
    if (!nothing_to_commit) {
      console.log('There are changes to commit');
      await commit(`git commit -am "${commitMsg}"`);
      await commit(`git push`);
    } else {
      console.log('Nothing to commit');
    }
  }

  await browser.close();

  return;
}

if (require.main === module) {
  let t_ini = Date.now();

  startParsing()
    .then(() => {
      let total_time = parseInt((Date.now() - t_ini) / 100, 10) / 10;
      console.log(`process finished in ${chalk.yellow(total_time)} seconds`);
      return process.exit();
    })
    .catch(err => {
      console.log(`${chalk.red('error')}`, err.message);
      return process.exit();
    });
}
