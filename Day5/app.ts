import express, {type Express,type NextFunction, type Request,type Response } from "express";
import { listalltickets,
    viewOneticket,
    createOneticket,
    deleteOneTicket,
    updateOneTicketAssigne,
    updateOneTicketStatus
 } from "./controller";
 
import { styleText } from "node:util";
export const app : Express=express()


let id=0
const logRequest= async function (req:Request,res:Response,next:NextFunction) {
    console.log(styleText(["bgMagenta", "bold"],`Request id      : ${id}`))
    console.log(styleText(["bgMagenta", "bold"],`Request path    : ${req.path}`))
    console.log(styleText(["bgMagenta", "bold"],`Request method  : ${req.method}`))
    id++
    return next()
}
const RouteNotFound= async function (req:Request,res:Response,next:NextFunction) {
    console.log(styleText(["bgRed","bold"],`INVALID ROUTE`));
    throw Error("Invalid Route Entered")
}
app.use(logRequest)
app.use(express.json())
app.get("/test",(req:Request,res:Response)=>{
    res.send("Test success")
})

app.get("/list",listalltickets)
app.get("/view/:id",viewOneticket)
app.post("/",createOneticket)
app.patch("/status",updateOneTicketStatus)
app.patch("/assign",updateOneTicketAssigne)
app.delete("/",deleteOneTicket)


app.use(RouteNotFound)
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(400).send(err.message);
});


