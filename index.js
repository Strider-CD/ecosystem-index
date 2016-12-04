'use strict';

// - tests if the repository is available / online
// - optional: check the current version vs. the github version
//   to activate the check set versionCheck in line 14 to true
//

const yaml = require('js-yaml');
const fs = require('fs');
const request = require('request');
const log = require('console-emoji');

const fileName = 'plugins.yml';
const selector = 'repo';
const versionCheck = true;
const vselector = 'tag';
const gitRaw = 'https://raw.githubusercontent.com';
const branch = 'master';

let error = 0;

const doc = yaml.safeLoad(fs.readFileSync(fileName, 'utf8'));
const modules = Object.getOwnPropertyNames(doc);
for (let x = 0, len = modules.length; x < len; x++) {
  let link = doc[modules[x]][selector];
  let semver = doc[modules[x]][vselector];

  // in case you want to check if the other keys
  // have values here would be the place to be :)

  if (link !== 'undefined') {
    request(link, {method: 'HEAD'}, (err, res) => {
      if (err) {
        throw new Error(err);
      }
      if (res.statusCode === 200) {
        // log(modules[x], 'ok');

          // check for version changes (optional)
        let search = 'github.com/';
        let tmp = link.substring(link.indexOf(search) + search.length);

        // check for github only
        let isGitUrl = link.includes(search);

        if (versionCheck && isGitUrl) {
          if (tmp.lastIndexOf('.git')) {
            let part = tmp.substring(0, tmp.length - 4);
            let cut = part.indexOf('/');

              // Username / Repository maybe useful for later tests ...
            let user = part.substr(0, cut);
            let repo = part.substr(cut + 1);
            let pkgUrl = `${gitRaw}/${user}/${repo}/${branch}/package.json`;

            request(pkgUrl, {method: 'GET'}, (err, res, body) => {
              if (err) {
                throw new Error(err);
              }
              if (res.statusCode === 200) {
                const pkg = JSON.parse(body);
                if (semver !== pkg.version) {
                  log(`Version changed for ${  modules[x]  } ${  semver  } => ${  pkg.version}`, 'warn');
                }
              }
            });
          }
        }

      } else {
        log(modules[x], 'err');
        error = 1;
      }
    }
    );
  }
}

return error;
