**warning** this is just an idea right now

---

This repository contains an index strider plugins.

Each plugin is represented as a YAML file with attributes provided in the same style as the Github API.

This repository is queried by the strider plugin manager (currently in development)

If you've created a new plugin for Strider, please add the YAML file in `plugins` and make a corresponding entry in `index`

## Example

Let's add a new plugin called strider-ssh-deploy, uploaded to github at https://github.com/Strider-CD/my-strider-plugin

Create a file `plugins/strider-ssh-deploy` with content:

```yaml
description: Plugin for Strider-CD to deploy with SSH
html_url: "https://github.com/Strider-CD/my-strider-plugin"
git_url: "git://github.com/Strider-CD/strider-ssh-deploy.git"
```

Make sure to provide these fields at minimum. They're used by strider to perform plugin management.

Finally, we edit `index` and add `strider-ssh-deploy` to it

## TODO

Make it easier to add your own plugins by providing a script that takes as input the git remote, and modifies `index` as appropriate (by fetching and parsing the package.json to determine version) and adds the YAML metadata file.