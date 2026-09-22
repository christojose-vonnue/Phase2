import http from "node:http";
import { styleText } from "node:util";
import { readtask,read,writeTask,patchTask,deleteTask } from "./TaskFunctions.js";

const PORT_NO=8000

const server=http.createServer(async (req,res)=>{

    console.log(styleText(["bgMagenta","bold"],`Request Method ${req.method}`));
    console.log(styleText(["bgMagenta","bold"],`Requst Path : ${req.url}`));
    
    let url=req.url
    if(req.method=="GET"){
        if(!url) {
            console.log(styleText(["bgGreen","bold"],`FAILED GET METHOD`));
            res.end("FAILED GET METHOD")
        }
        else if(url=="/tasks" || url=="/"){
            const result =await read()
            res.writeHead(200,{ "Content-Type": "application/json" })
            res.end(result)
        }        
        else if(url.startsWith("/tasks/")){
            res.writeHead(200,{ "Content-Type": "application/json" })
            const result = await readtask(url)
            res.end(result)
        }
        else{
            res.writeHead(400,{ "Content-Type": "application/json" })
            res.end("FAILED GET METHOD")
        }
    }

    else if(req.method=="POST"){
        let payload=""

        req.on("data",(chunk)=>{
            // console.log(chunk.toString());
            payload+=chunk.toString() 
        })
        req.on("end", async () => {
            res.writeHead(200,{ "Content-Type": "application/json" })
            const result = await writeTask(payload);
            res.end(result);
        });
    }

    else if(req.method=="PATCH"){
        let payload=""
        req.on("data",chunk=>{
            payload+=chunk.toString()
        })
        req.on("end", async () => {
            res.writeHead(200,{ "Content-Type": "application/json" })
            const result = await patchTask(payload);
            res.end(result);
        });
    }

    else if(req.method=="DELETE"){
        let payload=""
        req.on("data",chunk=>{
            payload+=chunk.toString() 
        })
        req.on("end", async () => {
            res.writeHead(200,{ "Content-Type": "application/json" })
            const result = await deleteTask(payload);
            res.end(result);
        });
    }
})


server.listen(PORT_NO,()=>{
    console.log("Server is listening");
})