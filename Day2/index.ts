#! /usr/bin/env node
// const fs = require("fs")
import { input,select } from "@inquirer/prompts";
import { readFile,writeFile } from "node:fs/promises";
import { styleText } from 'node:util';

const filepath : string = "./task_log.json"
export type data = {
    name:string,
    status:"Not-started"|"In-progress"|"Completed"
} 
export async function updatejson(newTask : data) {

    try{
        const rawData = await readFile(filepath,"utf-8")
        const data_arr: Array<data>=JSON.parse(rawData)
        // data_arr.push(newTask)
        let index=0
         for(let data of data_arr){
            if(data.name==newTask.name){
                data_arr[index] = {...data_arr[index],...newTask} 
                console.log(styleText(["bgGreen"],"updated"));
                console.log(data_arr); 
            }
            index++;
        }
        await writeFile(filepath, JSON.stringify(data_arr,null,2), "utf8")
    }
    catch(err){
        console.log(err);
    }
}
export async function writetask(newTask : data) {

    try{
        const rawData = await readFile(filepath,"utf-8")
        // console.log(rawData);
        const data_arr: Array<data>=JSON.parse(rawData)
        data_arr.push(newTask)
        await writeFile(filepath, JSON.stringify(data_arr,null,2), "utf8")
    }
    catch(err){
        console.log(err);
    }
}

export async function readjson(pathtest = filepath) : Promise<data[] | undefined>{
    try{
        const rawData=await readFile(pathtest,"utf-8")
        const data_arr=JSON.parse(rawData)
        return data_arr
    }
    catch(err){
         console.log(styleText(["bgBlue","bold"],"File initialized.. Try adding some tasks.."));
         if(pathtest==filepath){
             await fileinit(filepath)
         }
    }
}

const args=process.argv
const command=args[2]
switch(command){
    case "add":
        add()
        break;
    case "list":
        list()
        break;
    case "complete":
        complete()
        break;
    case "delete":
         deletetask()
         break;
    case "filter":
        filter()
        break;
    default:
        console.log(styleText(["bgRed","bold"],"Invalid Syntax"));
                    console.log(`
        Try \n
        * add \t\t: To add a new Task\n
        * delete \t: To delete a new Task\n
        * complete \t: To set status as complete\n
        * filter \t: To filter tasks by status\n
        * list \t\t: To list out status
        `);
}
// updatejson()
// Requirement : Handle malformed or missing data safely.
async function add() {
    const names=await list()
    console.log(styleText(["bgWhite","bold","black"],"Please Enter a unique Task_Name"));
    const task_name=await input({
        message:"\nEnter Task Name :",
    })
    //Handle malformed or missing data safely.
    if(task_name.trim()===""){
        console.log(styleText(["bgBlue","bold"],"Enter a valid Name"));
        console.log(styleText(["bgBlue"],"\nTry again\n\n"));
        
        await add()
        return
    }
    else{
        if(!names) return
        for(let name of names){
            if(task_name==name){
                console.log(styleText(["bgBlue","bold"],"Task name is not unique"));
                console.log(styleText(["bgBlue"],"\nTry again\n\n"));
                await add()
                return
            }
        }
    }
    const task_status=await select({
        message : "Enter Status",
        choices:["Not-started","In-progress","Completed"]
    })
    
    const newTask : data={
        "name":task_name,
        "status":task_status
    }
    writetask(newTask)
}

export async function list() {
    try {
        const data_arr=await readjson()
        if(!data_arr) return 
        let names : string[] = []
        for(let data of data_arr){
            names.push(data.name)
            console.log(data.name + "\n");
        }
        return names
    } catch (error) {
       console.log(error);
    }
}

async function complete() {
    const data_arr=await readjson()
    if(!data_arr) return
    const choice=[]
    for(let data of data_arr){
        if(data.status!="Completed"){
            choice.push(data.name)
        }
    }
    if(choice.length===0) return
    const completedTaskName = await select({
        message : "Set a task as completed",
        choices:choice
    }) 
    const completeTask : data = {
        name : completedTaskName,
        status : "Completed"
    }
    updatejson(completeTask)
}

async function deletetask() {
    const data_arr=await readjson()
    if(!data_arr) return
    const choice=[]
    for(let data of data_arr){
        choice.push(data.name)
    }
    if(choice.length===0) return
    const deleteTaskName = await select({
        message : "Choode a task to delete",
        choices:choice
    }) 
    const new_data_arr=data_arr.filter((data)=>{
        if(data.name!=deleteTaskName){
            return data
        }
    })
    await writeFile(filepath,JSON.stringify(new_data_arr,null,2),"utf-8")
} 

async function filter() {
    const data_arr=await readjson()
    if(!data_arr) return
    const choice=["Not-started","In-progress","Completed"]
    const choosenTask = await select({
        message:"Select a Category",
        choices:choice
    })

    for(let data of data_arr){
        if(data.status===choosenTask){
           console.log(data);
        }
    }
}
// Requirement : Recover gracefully when the file does not yet exist.
async function fileinit(path = filepath) {
    await writeFile(path, JSON.stringify([]), { flag: 'wx' });
}