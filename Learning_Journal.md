# Day 1

* `rm ${which <cli_name>}` : To remove the CLI

* `npm init` : To prompt creation of package.json

* `#! /usr/bin/env node`  : First command to create a CLI , CLI is a js file
* `type:module` : In package.json helps to import/export files
```javascript
    |___ import { styleText } from node:util
    |___  console.log(styleText([...options], "output"))
```

* `npm link` : You should only use `npm install -g or npm install` for packages , Not for something in your laptop. If you want to run it as a npm package you need `npm link`

* `chmod +x <path>` : This command is used to give permission for executable files in the bin folder




