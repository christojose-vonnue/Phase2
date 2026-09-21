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

# Day 2

* `install @inquirer/prompts` : TO add the dependecies inquirer which helps to make the cli interactive
* **SAMPLE USAGE**
```ts
import { input, select } from "@inquirer/prompts";
const task_status=await select({
    message : "Enter Status",
    choices:["Not-started","In-progress","Completed"]
})
const task_name=await input({
    message:"\nEnter Task Name :",
})
```
* More options are available : checkout https://www.npmjs.com/package/@inquirer/prompts

* `rm -rf .git` :  Removes the hidden git repo

* `JSON.stringify(data_arr, null, 2)` : The parameters `null` and `2` Makes the json object 

* `cannot execute: required file not found` : This error occured when my `shebang` path was wrong. It must be exactly `#! /usr/bin/env node`