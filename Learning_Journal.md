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

# Day4 & Day5

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

# Day6

We have sudo access to install postgreSQL

## Basics

* **APT**   :   **Advanced Package Tool**, is a free software interface that is used to install and remove *softwares* from Linux Environments
* **`apt`** :   The apt command provides a CLI for APT package management system.<br>Refer : https://www.geeksforgeeks.org/linux-unix/apt-command-in-linux-with-examples/

```javascript
Syntax
apt [...COMMANDS] [...PACKAGES]
Where,

COMMANDS represent the actions you wish to perform, such as install, update, or remove
PACKAGES refer to the specific software you want to manage by name
```

## `sudo` Access

sudo (Superuser Do) is a Linux command that temporarily grants a regular user administrative or root privileges to execute restricted tasks. It acts as the system's master key, required only for critical actions like installing software, modifying system configuration files, or managing user accounts.

WE REQUIRE SUDO FOR TWO REASONS
1. Downloading and Installing (sudo apt)
2. Initializing the Database & First User

## How to install PostgreSQL

0. `apt --version`      <br>   To get the apt version
1. `sudo apt upgrade`   <br>   To update the package databse to its latest version to access all versions
2. `sudo apt install postgresql postgresql-contrib` 
 <br> To install the postgre package along with companion utilities package (`postgresql-contrib`) 
 <br> Packages that are additionally installed can be referenced here `https://www.postgresql.org/docs/current/contrib.html` 
 <br> For example the datatype hstore

3. `sudo -i -u postgres` <br> To switch to the user account of postgressql

4. **postgres@hostname:~$** 
<br> A new terminal is opened up, This is the admin page in linux terminal
<br> This terminal is required to do extra packages via apt or manage system files. <br> **It cannot edit data inside a DB**

5. `createdb --interactive --pwprompt`
<br> You have a interactive prompt to create a new DB
<br> you make yourself a sudo user and exit

6. This db can now be accessed from sql without the linux admin which requires sudo, type **`psql`** 

>If you match both user linux username and postgress sql, you can directly use psql comamnd to jump to the DB <br>
>Or else you  would need psql -d <database_name> -U <user_name><br> 

7. **christo.jose=#** <br>
We are in the postgreSQL Engine, Here we can create and modify TABLES,DB and USER. The default is the same as christo.jose

## Inside postgreSQL Engine

### \q

 This comment can be used to exit from the postgreSQL

### \conninfo

Gives information of current User, current DB and socket

### \l

Lists out the databases along with their owners,Encoding and with more information

### \dt

List out all the tables in the current database

### \d customer

Describes the tables,datatypes and constraints of the table customer

### DROP TABLE customer;
**On success**  : DROP TABLE<br>
**On failure** : Error will be thrown

### ALTER TABLE ticket RENAME COLUMN user_id TO user_table_id;
**On success** : ALTER TABLE <br>
**On failure** : ERROR:  column "user_id" does not exist

### CREATE DATABASE support_ticket;

The **;** Semi-colon is extremely important<br>
**On success**  : CREATE DATABASE<br>
**On failure** : Error will be thrown

### \c support_ticket

**On success** : conninfo will be logged in the terminal (except socket)<br>
**On failure** :  database "fail_db" does not exist
Previous connection kept

### CHECK ( CONDITIONS );

**conditions** : Must be included in parenthesis

### IN BETWEEN is wrong format