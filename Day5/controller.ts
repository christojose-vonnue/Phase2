import { log } from "console";
import { createTicket,
    updateAssigneStatus,
    updateTicketStatus
    ,deleteTicket,
    listTickets,
    viewTicket } from "./service";
import { type Request, type Response} from 'express';

export async function listalltickets(req:Request,res:Response) {
    const result=await listTickets()
    res.setHeader('Status',200)
    res.setHeader("Content-Type","application/json")
    res.send(result)
}

export async function viewOneticket(req:Request<{id:string}>,res:Response) {
    const result=await viewTicket(req.params.id)
    res.setHeader('Status',200)
    res.setHeader("Content-Type","application/json")
    res.send(result)
}

export async function createOneticket(req:Request,res:Response) {
        console.log(req.body);
        log(typeof req.body) 
        const result=await createTicket(req.body)
        res.status(201)
        res.send(result)
}

export async function updateOneTicketStatus(req:Request,res:Response) {
        const result=await updateTicketStatus(req.body)
        res.setHeader('Status',200)
        res.setHeader("Content-Type","application/json")
        res.send(result)
}

export async function updateOneTicketAssigne(req:Request,res:Response) {
        const result=await updateAssigneStatus(req.body)
        res.setHeader('Status',200)
        res.setHeader("Content-Type","application/json")
        res.send(result)
}


export async function deleteOneTicket(req:Request,res:Response) {
        const result=await deleteTicket(req.body)
        res.setHeader('Status',200)
        res.setHeader("Content-Type","application/json")
        res.send(result)
}