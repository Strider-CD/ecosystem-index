**warning** this is just an idea right now

---

This repository contains an index strider plugins.

Each plugin is represented as a YAML file with attributes provided in the same style as the Github API.

This repository is queried by the strider plugin manager (currently in development)

If you've created a new plugin for Strider, please add the file in `plugins`. See example below:

## Example

### full path: plugins/strider-ssh-deploy

### filename: strider-ssh-deploy

### content:

```yaml
description: Plugin for Strider-CD to deploy with SSH
html_url: "https://github.com/Strider-CD/my-strider-plugin"
git_url: "git://github.com/Strider-CD/strider-ssh-deploy.git"
```

Please make sure to provide these fields at minimum. They're used by strider to perform plugin management.
