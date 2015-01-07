# ecosystem-index

This repository contains an index strider plugins for consumption by Strider via [strider-ecosystem-client](https://github.com/Strider-CD/ecosystem-client)

Plugins added here are made available via the admin interface in Strider 1.6.0 and newer.

Each plugin is represented as an entry in `plugins.yml`

## Tagging

**IMPORTANT!!!**

The version numbers indicated must map to tags on the plugin's repository. e.g. A plugin at version 1.0.0 implies that fetching that plugin's repository at tag '1.0.0' will yield the desired source code. **THIS MEANS A TAG NAME v1.0.0 WILL NOT MATCH AGAINST A TAG INDICATED AT '1.0.0' IN THE INDEX** 

## Anatomy of plugin entry

Take this example:

```yaml
artifact-repository:
  description: Save and exposes artifacts built by strider CI
  tag: 1.0.0
  repo: https://github.com/tbouron/strider-artifact-repository
  module_name: strider-artifact-repository
  name: Artifact Repository
  type: job
```

The top-level key, `artifact-repository`, must match the `id` of the plugin, as defined in the `strider` section of the plugin's `package.json` file.

`description` is self-explanatory.

`tag` must correspond to a plain (no v or V or version) numeric semantic version (e.g. 2.34.5) tag upon the git repository. If you don't tag your repository at a version, there is no way to deliver consistent, semantic versions.

`repo` must correspond to an HTTPS path that we can checkout with git. Github URLs, for example, work.

`module_name` must correspond to the `name` field of the plugin's `package.json` -- it is what is `require()`'d by Strider when loading your plugin.

`name` is a pretty name for display on the plugin page, it's optional and falls back to the top-level key

`type` must correspond to the `type` of the plugin, as defined in the `strider` section of the plugin's `package.json` file.
