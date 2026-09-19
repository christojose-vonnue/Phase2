#! /usr/bin/env node
import { availableMemory, memoryUsage } from 'node:process';
import { styleText } from 'node:util';
// console.log("SHEBANG : #!usr/bin/env_node");
console.log(styleText(["yellow", "bold"], "-----------------"));
const args = process.argv;
if (args.length >= 3) {
    const first_arg = args[2];
    switch (first_arg) {
        case "--version":
            console.log(styleText(["magenta", "italic"], `Node version : ${process.version}`));
            break;
        case "--memory":
            console.log("Memory Usage object");
            console.log(memoryUsage());
            console.log("Memory Available (bytes) " + availableMemory());
            break;
        case "--dir":
            console.log(styleText(["magenta", "italic"], `pwd : ${process.cwd()}`));
            break;
        case "--OS":
            console.log(styleText(["magenta", "italic"], `platform : ${process.platform}`));
            break;
        case "--environment":
            const isProduction = process.env.NODE_ENV === 'production';
            if (isProduction) {
                console.log("Running in production mode. Secure settings enabled.");
            }
            else {
                console.log("Running in development mode.");
            }
            break;
            break;
        default:
            console.error(styleText(["red", "bold"], "Invalid argument"));
            console.log(`
        Try \n
        * --version \t: To get node version of CLI\n
        * --memory \t: To get details of memory Usage\n
        * --OS \t\t: To get Operarting System\n
        * --environment : To get current mode\n
        * --dir \t: To get pwd of the CLI
        `);
            break;
    }
}
