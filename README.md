This repository contains an index strider plugins for consumption by Strider via [strider-ecosystem-client](https://github.com/Strider-CD/ecosystem-client)

Each plugin is represented as a YAML file with attributes provided in the same style as the Github API.

This repository is queried by the strider plugin manager (currently in development)

If you've created a new plugin for Strider, please add the YAML file in `plugins` and, if stable, make a corresponding entry in `stable.yml`

## Tagging

The version numbers indicated must map to tags on the plugin's repository. e.g. A plugin at version 1.0.0 implies that fetching that plugin's repository at tag '1.0.0' will yield the desired source code.

## Example

Let's add a new plugin called my-strider-plugin, uploaded to github at https://github.com/Strider-CD/my-strider-plugin and tagged with a version number '1.0.0'

Create a file `plugins/my-strider-plugin` with content:

```yaml
description: Plugin for Strider-CD to deploy with SSH
html_url: "https://github.com/Strider-CD/my-strider-plugin"
git_url: "git://github.com/Strider-CD/my-strider-plugin.git"
```

Make sure to provide these fields at minimum. They're used by strider to perform plugin management.

Finally, we edit `stable.yml` and add `my-strider-plugin: 1.0.0` to it to signify that the plugin is stable at version 1.0.0
