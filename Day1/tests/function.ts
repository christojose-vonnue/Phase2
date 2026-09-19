import { availableMemory, memoryUsage } from 'node:process';
import { styleText } from 'node:util';

export function parameterLogic(first_arg : string){
    switch (first_arg) {
        case "--version":
            console.log(styleText(["magenta","italic"],`Node version : ${process.version}`));
            return process.version
        case "--memory":
            console.log("Memory Usage object");
            console.log(memoryUsage());
            console.log("Memory Available (bytes) "+availableMemory());
            return availableMemory()
        case "--dir":
            console.log(styleText(["magenta","italic"],`pwd : ${process.cwd()}`));
            return process.cwd()
        case "--OS":
            console.log(styleText(["magenta","italic"],`platform : ${process.platform}`));
            return process.platform
        case "--environment":
            const isProduction = process.env.NODE_ENV === 'production';
            if (isProduction) {
                console.log("Running in production mode. Secure settings enabled.");
                return "Production mode"
            } else {
            console.log("Running in development mode.");
            return "Development mode"
            }
        default:
            console.error(styleText(["red","bold"],"Invalid argument"));
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
