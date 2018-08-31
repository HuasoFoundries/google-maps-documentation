const Promise = require('bluebird'),
    _ = require('lodash'),
    fs = Promise.promisifyAll(require("fs")),
    puppeteer = require('puppeteer'),
    path = require('path'),
    chalk = require('chalk'),
    debug = require('debug')('google-maps-documentation');


let version_history = require('./version_history.json'),
    last_update_entry = require('./version_last_update.json'),
    lastversion,
    linksObj;



async function getMainPage(link, browser) {
    const page = await browser.newPage();

    await page.goto(link);

    await page.waitForSelector('div[itemprop=articleBody]');

    let last_update_text = await page.evaluate(() => {
        return document.querySelector('div[itemprop=articleBody]')
            .querySelector('p')
            .querySelector('i').textContent.trim();
    });
    let links = await page.evaluate(() => {
        var links = [];


        Array.from(document.querySelector('div[itemprop=articleBody]').querySelectorAll('h3'))
            .forEach((element) => {
                let link = {
                    title: element.querySelector('a').innerText,
                    linkId: element.id,
                    href: element.querySelector('a').href,
                };
                let sublinks = Array.from(element.nextElementSibling.querySelectorAll('dt'))
                    .map((child_element) => {
                        return {
                            href: child_element.querySelector('a').href,
                            linkId: child_element.id,
                            title: child_element.id
                        }
                    });
                link.children = sublinks;

                links.push(link);
            });
        return links;
    });

    return { last_update_text, links };
}
async function getLastVersion(browser) {
    const page = await browser.newPage();

    await page.goto('https://developers.google.com/maps/documentation/javascript/reference/');

    await page.waitForSelector('.devsite-section-nav a.devsite-nav-title');

    let lastversionlink = await page.evaluate(() => {
        return Array.from(document.querySelectorAll('a.devsite-nav-title'))
            .filter((element) => { return /\d{1}\.\d{2}$/.test(element.href); })[0].href;
    });
    return lastversionlink;
}

async function parseSubPage(link, browser) {
    const page = await browser.newPage();

    await page.goto(link);

    await page.waitForSelector('div[itemtype="http://developers.google.com/ReferenceObject"]');

    let subpage_sections = await page.evaluate((objLinks) => {
        let subpage_sections = Array.from(document.querySelectorAll('div[itemtype="http://developers.google.com/ReferenceObject"]'))
            .map((referenceObject) => {
                referenceObject.querySelector('h2').innerHTML = referenceObject.querySelector('h2').innerText;
                Array.from(referenceObject.querySelectorAll('a.secret-link')).forEach((secretlink) => {
                    secretlink.innerHTML = `<span>${secretlink.innerText}</span>`;
                });

                Array.from(referenceObject.querySelectorAll('a')).forEach((aElement) => {
                    if (aElement.href.indexOf('#') === -1) {
                        return;
                    }
                    if (/^#/.test(aElement.href) && objLinks.inner_refs.indexOf(aElement.href)) {
                        aElement.href = `${aElement.href.replace('/^#/','')}.md`
                    } else if (objLinks.inner_links.indexOf(aElement.href) !== -1) {
                        aElement.href = `${aElement.href.split('#')[1].replace('/^#/','')}.md`
                    }
                });

                return {
                    title: referenceObject.querySelector('h2').id,
                    content: referenceObject.innerHTML
                };
            });
        return subpage_sections;
    }, linksObj);
    let promises = [];
    subpage_sections.forEach((referenceObject) => {
        promises.push(fs.writeFileAsync(path.resolve(`${__dirname}/docs/${referenceObject.title}.md`), referenceObject.content, 'utf-8'));
    });

    return await Promise.all(promises);
}

async function startParsing() {

    let readmeBuffer = await fs.readFileAsync(path.resolve(`${__dirname}/README.md`)),
        readmeString = readmeBuffer.toString('UTF8').split('### Last Update')[0];
    const browser = await puppeteer.launch({
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    let lastversionlink = await getLastVersion(browser),
        lastversion = /\d{1}\.\d{2}$/.exec(lastversionlink)[0],
        { last_update_text, links, } = await getMainPage(lastversionlink, browser),
        last_update = last_update_text.replace('Last updated', '').trim(),
        last_date = new Date(last_update).toISOString().split('T')[0],
        current_data = {
            version: lastversion,
            last_update,
            last_date
        };

    debug({ current_data, last_update_entry, lastversionlink });
    if (current_data.version > last_update_entry.version || current_data.last_date > last_update_entry.last_date) {
        debug(`${chalk.red('Detected updates')}, will push to version history`);
        version_history.push(current_data);
        await fs.writeFileAsync('version_history.json', JSON.stringify(version_history, null, 4), 'utf-8');
        await fs.writeFileAsync('version_last_update.json', JSON.stringify(current_data, null, 4), 'utf-8');
    }

    readmeString = `
${readmeString}### Last Update

Version [${current_data.version}](${lastversionlink}), last updated on ${current_data.last_update}.

### Table of Contents
`;


    linksObj = {
        links,
        inner_links: _.reduce(links, (accum, link) => {
            accum = accum.concat(_.map(link.children, 'href'));
            return accum;
        }, []),
        inner_refs: _.reduce(links, (accum, link) => {
            accum = accum.concat(_.map(link.children, (child) => {
                return child.href.split('#')[1];
            }));
            return accum;
        }, []),
    };

    let promises = [];
    links.forEach(async(link) => {
        readmeString += `

#### ${link.title}
`;
        link.children.forEach((child) => {
            readmeString += `
  - [${child.title}](docs/${child.title}.md)`
        });
        promises.push(parseSubPage(link.href, browser).then(() => {
            let parsed = _.omit(link, ['children'])
            parsed.children = link.children.length;
            debug(`parsed subpage ${link.title} with ${parsed.children} sections`);
            return;
        }));
    });

    await fs.writeFileAsync(path.resolve(`${__dirname}/README.md`), readmeString);
    await fs.writeFileAsync('links.json', JSON.stringify(linksObj, null, 4), 'utf-8');

    await Promise.all(promises);


    await browser.close();



    return;

}

if (require.main === module) {
    let t_ini = Date.now();
    startParsing().then(() => {
        let total_time = parseInt((Date.now() - t_ini) / 100, 10) / 10;
        debug(`process finished in ${chalk.yellow(total_time)} seconds`);
    });
}




// ==UserScript==
// @name       Google Maps Documentation Parser
// @namespace  http://ffflabs.com/
// @version    6.1.0
// @description  enter something useful
// @match      https://developers.google.com/maps/documentation/javascript/reference/3.exp*
// @match      https://developers.google.com/maps/documentation/javascript/reference/*
// @match      https://developers.google.com/maps/documentation/javascript/reference/3.33/*
// @match      https://developers.google.com/maps/documentation/javascript/reference/3.34/*
// @match      https://developers.google.com/maps/documentation/javascript/reference/3.35/*
// @match      https://developers.google.com/maps/documentation/javascript/reference/3.36/*
// @require    https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js
// @require    https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.10.1/lodash.min.js
// @require    https://cdn.jsdelivr.net/gh/amenadiel/google-maps-documentation@0.1.0/github.js
// @require    https://cdn.jsdelivr.net/gh/mathiasbynens/he@1.1.1/he.js
/*
var Github=window.Github,
    _ = window._,
    jQuery=window.jQuery,
    $ = window.$,
    he = window.he;



// @copyright  2014 amenadiel@gmail.com

// ==/UserScript==

var thisParser = null,
    sectionlinks = [];

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}


var docParser = function(options) {
    var _this = this;
    _this.fechatext = options.fechatext;

    _this.github = new Github({
        token: options.token,
        auth: options.auth
    });

    _this.repo = _this.github.getRepo(options.user, options.reponame);


    var thisrepo = _this.repo;
    console.debug('thisrepo is', thisrepo);

    _this.parseError = function(err) {
        return {
            error: err.error,
            path: err.path,
            response: JSON.parse(err.request.responseText),
            status: err.request.status,
            statusText: err.request.statusText
        };

    };

    // We're in a subpage
    if (_this.fechatext.length === 0) {
        var stored_links = window.localStorage.getItem('links');

        sectionlinks = window.localStorage.getItem('sectionlinks');
        if (stored_links && sectionlinks) {
            var this_section = jQuery('h1[itemprop="name').text().trim();
            console.log('Parsing section ' + this_section);

            _this.links = JSON.parse(stored_links);
            sectionlinks = JSON.parse(sectionlinks);
            console.log('_this.sectionlinks', sectionlinks);

            docParser.iterateSections(function(sections) {
                console.log('Finished parsing contents');

                _this.processOneSection(sections, function() {
                    console.log('FINISHED SECTION');
                    _this.navigateToNextLink();
                });

            });


        } else {
            console.warn('No links or sectionlinks');
        }



    } else {
        // We are on the landing page
        window.localStorage.removeItem('sectionlinks');

        _this.repo.read('master', 'TOC.md', function(err, TOCContents) {
            var readmefile,lastupdate;
            if (TOCContents) {
                readmefile = TOCContents.split(/\n/);
                lastupdate = _.compact(_.last(readmefile, 3)).join('');
                console.log('TOC says last update was on', lastupdate);
            } else {
                lastupdate = _this.fechatext;
                console.log('Could not read TOC, defaulting to', lastupdate);
            }

            //console.log('readmefile is',readmefile);

            var first5lines = readmefile.slice(0, 5); // title

            console.log('This webpage was updated on', _this.fechatext);

            //console.log('First 5 lines',first5lines);





            //console.log('toctxt', toctxt);
            var force = getParameterByName('force'),
                dryrun = getParameterByName('dry_run');

            if ((location.href.split('?')[1] == 'force') || force !== null || lastupdate != _this.fechatext) {

                var newreadmefile = docParser.parseTOC(first5lines);




                newreadmefile.push(_this.fechatext);

                var toctxt = String(newreadmefile.join("\n"));

                try {
                    _this.repo.write('master', 'TOC.md', toctxt, String(_this.fechatext), function(err, result) {
                        console.log('write to TOC.md says', result);
                        if (err) {
                            console.log('Error committing TOC.md', _this.parseError(err));
                        } else {
                            _this.links = _this.getSubpageLinks();

                            _this.navigateToNextLink();

                        }
                    }, true);
                } catch (e) {
                    console.log('Exception commiting TOC.md', e);
                }

            } else {
                if (dryrun) {
                    _this.links = _this.getSubpageLinks();

                    docParser.parseTOC(first5lines);
                }
                console.log('No changes since last visit');
            }
        });

    }
};

docParser.findtextnode = function(refId) {



    var foundtextnode = sectionlinks.filter(function(section) {
        return section === refId;
    });
    if (foundtextnode.length) {
        console.log('Found', refId);
    } else if (refId.indexOf('.') !== -1) {
        return docParser.findtextnode(refId.split('.')[0]);
    } else {
        console.log('not found ', refId, 'in ', sectionlinks.length, 'sections');
    }

    return foundtextnode;
};


docParser.prototype.navigateToNextLink = function() {
    var _this = this;
    if (!_this.links || !_this.links.length) {
        console.log('No more links to parse');
        window.localStorage.removeItem('links');
        return;
    }

    var nextLink = _this.links.pop();
    window.localStorage.setItem('links', JSON.stringify(_this.links));
    console.log(_this.links.length + ' links left');
    console.log('Will navigate to section ', nextLink.linkId);
    return window.setTimeout(function() {
        location.href = nextLink.href;
    }, 2000);

};

docParser.prototype.getSubpageLinks = function() {
    var links = [];
    jQuery('div[itemprop="articleBody"]').find('h3').each(function() {
        var linkId = $(this).attr('id'),
            href = $(this).find('a').first().attr('href');
        links.push({
            linkId: linkId,
            href: href
        });
    });
    window.localStorage.setItem('the_links', JSON.stringify(links));
    return links;
};

docParser.sortAndPushLinks = function(links, readmefile) {
    var sortedLinks = _.sortBy(links, function(link) {
        return link.title;
    });

    _.each(sortedLinks, function(link) {
        readmefile.push(link.html);
    });
};

docParser.parseTOC = function(readmefile) {


    readmefile.push("\n### Table Of Contents \n");
    var subpage_links = [],
        sectionlinks = [];

    jQuery('div[itemprop="articleBody"]').find('h3').each(function() {
        var linkId = $(this).attr('id'),
            title = $(this).text().trim(),
            href = $(this).find('a').first().attr('href');
        subpage_links.push({
            linkId: linkId,
            href: href
        });
        readmefile.push("\n#### " + title + " \n");

        var subpage_section = jQuery(this).nextUntil('h3').andSelf();

        var links = [];

        subpage_section.find('dt > a').each(function() {
            var parsedelement = docParser.parselink(jQuery(this), true);


            if (parsedelement && parsedelement.title != 'Experimental Version') {
                var line = ['* [', parsedelement.title, '](' + parsedelement.href + ')'].join('');
                links.push({
                    title: parsedelement.title,
                    html: line,
                    href: parsedelement.href
                });
                sectionlinks.push(parsedelement.title);
            } else {
                console.log(jQuery(this));
            }
        });
        docParser.sortAndPushLinks(links, readmefile);

    });


    console.log(sectionlinks);
    window.localStorage.setItem('sectionlinks', JSON.stringify(sectionlinks));
    window.localStorage.setItem('sectionlinks2', JSON.stringify(sectionlinks));
    window.localStorage.setItem('subpage_links', JSON.stringify(subpage_links));

    readmefile.push("\n");
    readmefile.push("\n");

    return readmefile;

};


docParser.prototype.writeFile = function(thefilename, contents, title, callback) {

    console.log('Will write to', thefilename, {
        contents: contents
    });
    this.repo.write('master', thefilename, contents, title, function(err) {
        var result;
        if (err) {
            console.warn('Error writing file ' + thefilename, err);
            result = false;
        } else {
            result = true;
        }
        callback(result);

    }, true);
};

docParser.prototype.processOneSection = function(sections, callback) {
    var _this = this;

    if (sections.length) {
        var section = sections.pop();
        var thefilename = 'docs/' + section.filename;
        var contents = docParser.sanitizeText(String(section.contents)).replace(/Â°/g, '°');
        var title = String(section.title);


        _this.repo.read('master', thefilename, function(err, filecontents) {
            if (err) {
                console.warn('Error reading file ' + thefilename, '"', err, '"');
                if (err == 'not found') {
                    _this.writeFile(thefilename, contents, title, function() {
                        console.info('Created ', section.filename, sections.length, ' items left', _this.links.length, 'links left');
                        _this.processOneSection(sections, callback);
                    });
                }

            } else {
                if (filecontents == contents) {
                    //console.log(thefilename, 'Not changed', sections.length, ' items left');
                    _this.processOneSection(sections, callback);
                } else {
                    console.info('Writing ', section.filename, sections.length, ' items left', _this.links.length, 'links left');
                    //console.info('Old contents:',filecontents);
                    //console.info('New contents:',contents);
                    _this.writeFile(thefilename, contents, title, function() {
                        _this.processOneSection(sections, callback);
                    });


                }
            }
        });
    } else {
        callback();
    }
};



docParser.sanitizeText = function(textToSanitize) {
    var sanitized = textToSanitize.replace(/\—/g, '-').replace(/\u2009/g, ' ').replace(/Â°/g, '°');
    return he.encode(sanitized, {
        allowUnsafeSymbols: true
    });
};

docParser.iterateSections = function(callback) {

    var sections = [];

    var Qelement = 0;

    jQuery('div[itemtype="http://developers.google.com/ReferenceObject"]').find('h2').each(function() {
        Qelement++;

        var container = jQuery('<div></div>');
        var thekey = _.compact($(this).text().split(/\s|\n|\r/));

        //console.log('theKey is',thekey);

        var sectionName = thekey[0];


        console.debug(Qelement, 'Preparing to parse', sectionName);


        var innercontent = $(this).nextUntil('h2').andSelf();

        innercontent.each(function() {
            container.append(jQuery(this).clone());
        });
        //window.localStorage.setItem(sectionName, container.html());

        jQuery('a', container).each(function() {
            var thislink = jQuery(this);
            if (thislink.attr('href').indexOf('#top_of_page') !== -1) {
                thislink.detach();
            } else if (thislink.hasClass('secret-link')) {
                var thisText = thislink.text();
                thislink.replaceWith(jQuery('<span>' + thisText + '</span>'));
            } else {
                var parsedElement = docParser.parselink(thislink, false, container, sectionName);
                if (parsedElement) {
                    jQuery(this).attr('href', parsedElement.href);
                    //jQuery(this).attr('title',parsedElement.title);
                }
            }
        });

        jQuery('td', container).each(function() {
            jQuery(this).removeAttr('itemprop');
        });

        jQuery('h2', container).each(function() {
            jQuery(this).html(jQuery(this).text().replace(/\n/ig, " "));
        });

        var sectionObject = {
            title: sectionName,
            filename: sectionName + '.md',
            contents: container.html()
        };

        sections.push(sectionObject);






    });
    var sortedSections = _.sortBy(sections, function(item) {
        return item.title;
    });

    callback(sortedSections);

};




docParser.parselink = function(linkelement, isTOC, sectionContainer, sectionName) {
    var refId = linkelement.attr('href');
    var parsedelement, refObject, refText;


    if (/^#/.test(refId)) {
        refText = refId.split('#')[1];
        console.log('refId is', refId);
        if (linkelement.hasClass('secret-link')) {
            console.log('omit secret link', refId);
            parsedelement = {
                href: refId,
                title: linkelement.text()
            };
        } else if (sectionContainer && sectionContainer.find(refId).length) {
            console.log('sectionContainer constains element', refId);
            parsedelement = {
                href: 'https://github.com/amenadiel/google-maps-documentation/blob/master/docs/' + sectionName + '.md#user-content-' + refId.split('#')[1],
                title: linkelement.text()
            };
        } else {
            refObject = docParser.findtextnode(refId.split('#')[1]);
            if (refObject[0]) {
                console.log('refObject is', refObject);
                parsedelement = {
                    href: 'https://github.com/amenadiel/google-maps-documentation/blob/master/docs/' + refObject[0] + '.md',
                    title: refObject[0]
                };

            } else {
                parsedelement = {
                    href: 'https://github.com/amenadiel/google-maps-documentation/blob/master/docs/' + refId.split('#')[1] + '.md',
                    title: linkelement.text().replace(/\n/ig, " ").split(" ")[0]
                };
                console.log('parsedelement', parsedelement);
            }
        }
    } else if (refId.indexOf('https://developers.google.com/maps/documentation/javascript/reference') === -1) {
        parsedelement = {
            href: refId,
            title: linkelement.text()
        };


    } else if (refId.indexOf('#') !== -1) {
        console.log('refId is', refId);
        refText = refId.split('#')[1];
        refObject = docParser.findtextnode(refText);
        if (sectionContainer && sectionContainer.find('#' + refText).length) {
            console.log('sectionContainer ' + sectionName + ' constains element #' + refText);
            parsedelement = {
                href: 'https://github.com/amenadiel/google-maps-documentation/blob/master/docs/' + sectionName + '.md#user-content-' + refText,
                title: linkelement.text()
            };
        } else if (isTOC) {
            parsedelement = {
                href: 'https://github.com/amenadiel/google-maps-documentation/blob/master/docs/' + refText + '.md',
                title: linkelement.text().replace(/\n/ig, " ").split(" ")[0]
            };
            console.log('parsedelement', parsedelement);
        } else if (refObject[0]) {
            console.log('refObject is', refObject);
            parsedelement = {
                href: 'https://github.com/amenadiel/google-maps-documentation/blob/master/docs/' + refObject[0] + '.md',
                title: refObject[0]
            };
        }
    }

    return parsedelement;
};




window.docParser = docParser;

jQuery(document).ready(function() {
    var fechatext = jQuery('div[itemprop="articleBody"]').find('p').first().find('i').first().text().trim();

    console.log('document is ready, fechatext is', fechatext);


    thisParser = new docParser({
        token: "ecad7b341319d55bbfdfa2152ca88194d016d031",
        auth: "oauth",
        fechatext: fechatext,
        user: 'amenadiel',
        reponame: 'google-maps-documentation'
    });





});
*/