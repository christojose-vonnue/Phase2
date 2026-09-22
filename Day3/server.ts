import { log } from "node:console";
import { readFile, writeFile } from "node:fs/promises";
import http from "node:http";
import { styleText } from "node:util";
type data = {
    name:string,
    status:status
}
type status = "Not-started"|"In-progress"|"Completed"
const PORT_NO=8000
//Validate all input before saving.
function isInValidData(obj: data): boolean{
    log("validate function applied")
    const validStatuses = ["Not-started", "In-progress", "Completed"];
    const validKeys = ["name","status"]
    const currkeys=Object.keys(obj)
    if(validKeys.length!=currkeys.length){
        return true
    }
    for(let key of currkeys){
        if(!(validKeys.includes(key))){
            return true
        }
    }
    log("--1. VERIFIED KEYS")
    if(validStatuses.includes(obj.status)){
        log("--2. VERIFIED STATUS")
        return false
    }
    return true
}
async function read(){
      try{
          let content=await readFile(filepath,"utf-8")
          console.log(content);
          console.log("end event fired");
          console.log(styleText(["bgGreen","bold"],`SUCCESSFULLY APPLIED GET`));
          return content
      }
      catch(err){
        console.log(styleText(["bgGreen","bold"],`FAILED GET METHOD`));
        return("FAILED GET METHOD")
      }
}

async function readtask(url:string) {

        try{
        //call list
        let taskid=url.slice(7)
        let content=await readFile(filepath,"utf-8")
        // console.log(content);
        let contentJSON :data[] = JSON.parse(content)
        for(let task of contentJSON){
            if(task.name==taskid){
                console.log(task);
                console.log(styleText(["bgGreen","bold"],`SUCCESSFULLY APPLIED GET`));
                return content
            }
        }
        throw Error
        }
        catch(err){
            console.log(styleText(["bgRed","bold"],`FAILED GET METHOD`));
            return "FAILED GET METHOD"
        }

}


const filepath='sample.json'

const server=http.createServer(async (req,res)=>{

    console.log(styleText(["bgMagenta","bold"],`Request Method ${req.method}`));
    console.log(styleText(["bgMagenta","bold"],`Requst Path : ${req.url}`));
    
    let url=req.url
    if(req.method=="GET"){
        if(req.url=="/tasks" || req.url=="/"){
            const result =await read()
            res.end(result)
        }

        else if(!url) {
            console.log(styleText(["bgGreen","bold"],`FAILED GET METHOD`));
            res.end("FAILED GET METHOD")
        }
        
        else if(url.startsWith("/tasks/")){
            const result = await readtask(url)
            res.end(result)
        }
        else{
            res.end("FAILED GET METHOD")
        }
    }

    if(req.method=="POST"){
        let payload=""
        
        req.on("data",async chunk=>{
            payload+=chunk.toString()
            try{
                // console.log(payload);

                let payloadjson : data = JSON.parse(payload)
                if (isInValidData(payloadjson)){
                    throw Error("Runtime type validation falied")
                }
                const taskName=payloadjson.name
                let content=await readFile(filepath,"utf-8")
                let contentJSON :data[] = JSON.parse(content)
                for(let task of contentJSON){
                    if(task.name==taskName){
                        throw Error("Existing id or Task name")
                    }
                }
                contentJSON.push(payloadjson)
                await writeFile(filepath,JSON.stringify(contentJSON,null,2))
                console.log(styleText(["bgGreen","bold"],`SUCCESSFULLY APPLIED POST`));
            }
            catch(err){
              
              console.log("Invalid format or Invalid data ");
              if(err instanceof Error){
                  console.log(err.message);
              }
    
            console.log(styleText(["bgRed","bold"],`FAILED POST`));   
            }
        })

       
        req.on("end",()=>{
            res.end(payload)
        })
       
    }

    if(req.method=="PATCH"){
        let payload=""
        req.on("data",async chunk=>{
            payload+=chunk.toString()
            try{
                // console.log(payload);

                let payloadjson : data = JSON.parse(payload)
                if (isInValidData(payloadjson)){
                    throw Error("Runtime type validation falied")
                }
                const taskName=payloadjson.name
                let content=await readFile(filepath,"utf-8")
                let contentJSON :data[] = JSON.parse(content)
                let index=0
                for(let task of contentJSON){
                    if(task.name==taskName){
                        contentJSON[index]={...task,...payloadjson}
                        index=-99
                        await writeFile(filepath,JSON.stringify(contentJSON,null,2))
                        console.log(styleText(["bgGreen","bold"],`SUCCESSFULLY APPLIED PATCH`));
                        break
                    }
                    index+=1
                }
                if(index==contentJSON.length){
                    throw Error("Data not found")
                }
                req.on("end",()=>{
                  res.end(payload)
                })
         
            }
            catch(err){
                console.log("Invalid format or Invalid data ");
                if(err instanceof Error){
                    console.log(err.message);
                }
    
            console.log(styleText(["bgRed","bold"],`FAILED PATCH`));   
            }
            
        })
        req.on("end",()=>{
          res.end(payload)
        }) 
        
    }

    if(req.method=="DELETE"){
        let payload=""
        
        req.on("data",async chunk=>{
            payload+=chunk.toString()
            try{
                const taskName=payload
                let content=await readFile(filepath,"utf-8")
                let contentJSON :data[] = JSON.parse(content)
                let index=0
                for(let task of contentJSON){
                  // log(task.name)
                    if(task.name==taskName){
                        contentJSON.splice(index,1)
                        await writeFile(filepath,JSON.stringify(contentJSON,null,2))
                        index=-99
                        break
                    }
                    index+=1
                }
                if(index==contentJSON.length){
                    throw Error("Data not found to be deleted")
                }
                console.log(styleText(["bgGreen","bold"],`SUCCESSFULLY APPLIED DELETE`));
            }
            catch(err){
                
                console.log("Invalid format or Invalid data ");
                if(err instanceof Error){
                    console.log(err.message);
                }
    
            console.log(styleText(["bgRed","bold"],`FAILED DELETE`));   
            }
        })

        req.on("end",()=>{
            res.end(payload)
        })
    }
})


server.listen(PORT_NO,()=>{
    console.log("Server is listening");
})