import { log } from "node:console";
import { readFile, writeFile } from "node:fs/promises";
import { styleText } from "node:util";
const filepath = 'sample.json';
export function isInValidData(obj) {
    log("validate function applied");
    const validStatuses = ["Not-started", "In-progress", "Completed"];
    const validKeys = ["name", "status"];
    const currkeys = Object.keys(obj);
    if (validKeys.length != currkeys.length) {
        return true;
    }
    for (let key of currkeys) {
        if (!(validKeys.includes(key))) {
            return true;
        }
    }
    log("--1. VERIFIED KEYS");
    if (validStatuses.includes(obj.status)) {
        log("--2. VERIFIED STATUS");
        return false;
    }
    return true;
}
export async function read() {
    try {
        let content = await readFile(filepath, "utf-8");
        console.log(content);
        console.log("end event fired");
        console.log(styleText(["bgGreen", "bold"], `SUCCESSFULLY APPLIED GET`));
        return content;
    }
    catch (err) {
        console.log(styleText(["bgGreen", "bold"], `FAILED GET METHOD`));
        return ("FAILED GET METHOD");
    }
}
export async function readtask(url) {
    try {
        //call list
        let taskid = url.slice(7);
        let content = await readFile(filepath, "utf-8");
        // console.log(content);
        let contentJSON = JSON.parse(content);
        for (let task of contentJSON) {
            if (task.name == taskid) {
                console.log(task);
                console.log(styleText(["bgGreen", "bold"], `SUCCESSFULLY APPLIED GET`));
                return JSON.stringify(task, null, 2);
            }
        }
        throw Error;
    }
    catch (err) {
        console.log(styleText(["bgRed", "bold"], `FAILED GET METHOD`));
        return "FAILED GET METHOD";
    }
}
export async function writeTask(payload) {
    try {
        console.log("In writetask function ");
        console.log(payload);
        let payloadjson = JSON.parse(payload);
        if (isInValidData(payloadjson)) {
            throw Error("Runtime type validation falied");
        }
        const taskName = payloadjson.name;
        let content = await readFile(filepath, "utf-8");
        let contentJSON = JSON.parse(content);
        for (let task of contentJSON) {
            if (task.name == taskName) {
                throw Error("Existing id or Task name");
            }
        }
        contentJSON.push(payloadjson);
        await writeFile(filepath, JSON.stringify(contentJSON, null, 2));
        console.log(styleText(["bgGreen", "bold"], `SUCCESSFULLY APPLIED POST`));
        return JSON.stringify(payloadjson, null, 2);
    }
    catch (err) {
        console.log("Invalid format or Invalid data ");
        if (err instanceof Error) {
            console.log(err.message);
        }
        console.log(styleText(["bgRed", "bold"], `FAILED POST`));
        return "FAILED POST";
    }
}
export async function patchTask(payload) {
    try {
        // console.log(payload);
        let payloadjson = JSON.parse(payload);
        if (isInValidData(payloadjson)) {
            throw Error("Runtime type validation falied");
        }
        const taskName = payloadjson.name;
        let content = await readFile(filepath, "utf-8");
        let contentJSON = JSON.parse(content);
        let index = 0;
        for (let task of contentJSON) {
            if (task.name == taskName) {
                contentJSON[index] = { ...task, ...payloadjson };
                index = -99;
                await writeFile(filepath, JSON.stringify(contentJSON, null, 2));
                console.log(styleText(["bgGreen", "bold"], `SUCCESSFULLY APPLIED PATCH`));
                break;
            }
            index += 1;
        }
        if (index == contentJSON.length) {
            throw Error("Data not found");
        }
        return JSON.stringify(payloadjson, null, 2);
    }
    catch (err) {
        console.log("Invalid format or Invalid data ");
        if (err instanceof Error) {
            console.log(err.message);
        }
        console.log(styleText(["bgRed", "bold"], `FAILED PATCH`));
        return "Failed Patch";
    }
}
export async function deleteTask(payload) {
    try {
        const taskName = payload;
        let content = await readFile(filepath, "utf-8");
        let contentJSON = JSON.parse(content);
        let index = 0;
        for (let task of contentJSON) {
            // log(task.name)
            if (task.name == taskName) {
                contentJSON.splice(index, 1);
                await writeFile(filepath, JSON.stringify(contentJSON, null, 2));
                index = -99;
                break;
            }
            index += 1;
        }
        if (index == contentJSON.length) {
            throw Error("Data not found to be deleted");
        }
        console.log(styleText(["bgGreen", "bold"], `SUCCESSFULLY APPLIED DELETE`));
        return `Task ${taskName} found and deleted`;
    }
    catch (err) {
        console.log("Invalid format or Invalid data ");
        if (err instanceof Error) {
            console.log(err.message);
        }
        console.log(styleText(["bgRed", "bold"], `FAILED DELETE`));
        return `FAILED DELETE`;
    }
}
