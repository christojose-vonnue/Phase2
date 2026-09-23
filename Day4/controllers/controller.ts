import { type Request, type Response} from 'express';
import { log } from 'node:console';
import { testHealth,readtask,read,writeTask,patchTask,deleteTask,healthType } from "../TaskFunctions.js"

export async function  getAllTasks(req : Request,res : Response){
    const result =await read()
    res.setHeader('Status',200)
    res.setHeader("Content-Type","application/json")
    res.send(result)
}

export async function healthCheck(req : Request, res :Response){
    const result : healthType=JSON.parse(await testHealth())
    res.setHeader('Status',200)
    res.setHeader("Content-Type","application/json")
    res.send(result)   
}

export async function getOneTask (req : Request<{id:string}>, res :Response){
    const result =await readtask(req.params.id)
    res.setHeader('Status',200)
    res.setHeader("Content-Type","application/json")
    res.send(result)   
}

export async function writeTaskController(req : Request,res :Response){
    let payload=req.body
    res.setHeader("Content-Type","application/json")
    const result = await writeTask(payload);
    res.send(result);
}

export async function  patchTaskController(req:Request,res : Response) {
    let payload=req.body
    log(payload)
    res.setHeader("Content-Type","application/json")
    const result = await patchTask(payload);
    res.send(result);
}

export async function deleteTaskController(req :Request,res : Response){
    let payload =req.body
    log(payload)
    res.setHeader("Content-Type","application/json")
    const result = await deleteTask(payload);
    res.send(result);
}