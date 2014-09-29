**warning** this is just an idea right now

---

This repository contains an index strider plugins.

Each plugin is represented as a YAML file with attributes provided in the same style as the Github API.

This repository is queried by the strider plugin manager (currently in development)

If you've created a new plugin for Strider, please add the YAML file in `plugins` and, if stable, make a corresponding entry in `stable.yml`

## Tagging

The version numbers indicated must map to tags on the plugin's repository. e.g. A plugin at version 1.0.0 implies that fetching that plugin's repository at tag '1.0.0' will yield the desired source code.

## Example

Let's add a new plugin called strider-ssh-deploy, uploaded to github at https://github.com/Strider-CD/my-strider-plugin and tagged with a version number '1.0.0'

Create a file `plugins/strider-ssh-deploy` with content:

```yaml
description: Plugin for Strider-CD to deploy with SSH
html_url: "https://github.com/Strider-CD/my-strider-plugin"
git_url: "git://github.com/Strider-CD/strider-ssh-deploy.git"
```

Make sure to provide these fields at minimum. They're used by strider to perform plugin management.

Finally, we edit `stable.yml` and add `strider-ssh-deploy: 1.0.0` to it to signify that the plugin is stable at version 1.0.0

## TODO

Make it easier to add your own plugins by providing a script that takes as input the git remote, and modifies `index` as appropriate (by fetching and parsing the package.json to determine version) and adds the YAML metadata file.
