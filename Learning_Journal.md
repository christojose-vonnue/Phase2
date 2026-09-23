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

# Day3

* `curl` commands :  Refer README of Day3
* `POSTMAN` : Can also be used to verify the expected results
*  Basic Implementation : https://www.youtube.com/watch?v=iOWWA9Xvobk&t=314s  and https://www.youtube.com/watch?v=RCEQhJ1I_JQ
*  Refer : https://www.geeksforgeeks.org/node-js/node-js-web-server/

# Day4

* ` npm install express` : To install express
* Express is written in JavaScript and does not bundle its own type definitions. To use it with TypeScript, install TypeScript together with the community-maintained types for Express and Node.js (from DefinitelyTyped) as development dependencies:
* `npm install --save-dev typescript @types/express @types/node`
* `app.METHOD(PATH, HANDLER);` where HANDLER is the function executed when the route is matched.
*  `app.use(function_which_returns_middleware)` can be used to run middlewares

*  **Demo : Custom Middlewares , 3 Parameters, run next() or throw error**

```typescript
const logRequest= async function (req:Request,res:Response,next:NextFunction) {
    log(styleText(["bgMagenta", "bold"],`Request id      : ${id}`))
    log(styleText(["bgMagenta", "bold"],`Request path    : ${req.path}`))
    log(styleText(["bgMagenta", "bold"],`Request method  : ${req.method}`))
    id++
    return next()
}
app.use(logRequest)
app.use(express.json).. In built middlewares
```

* **Demo : Custom Error Handling Middlewares**

```typescript
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(400).send(err.message);
});
```