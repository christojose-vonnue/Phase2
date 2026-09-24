import { log } from "node:console";
import { statusUpdate,assignUpdate,deleteUpdate, ticket } from "./types";
import { readData,writeData,updateData,deleteData } from "./storage";
import { styleText } from "node:util";

// Returns true if validated
export async function runtimeValidation (data : ticket,write_updateflag : number=0){
    // validate fields
    let datakeys=Object.keys(data)
    if(datakeys.length!=5){
        log("--0. Expected fields Runtime Validation Failed")
        return false
    }
    // validate fields , All must exist and not ""
    if(!(data.assigne || data.description || data.priority || data.status || data.title)){
        log("--00. Expected fields are undefined or empty Runtime Validation Failed")
        return false
    }
    let currentdata:ticket[]=await readData()
    // validate unique titles
    if(write_updateflag==1){
        for(let ticket of currentdata){
            if(ticket.title===data.title){
                log("--1. Title Runtime Validation Failed")
                return false
            }
        }
    }
    // validate min characters
    if(data.description.length<10){
        log("--2. Desc Runtime Validation Failed")
        return false
    }
    if(!["high","medium","low"].includes(data.priority)){
        log("--3. Priority Runtime Validation Failed")
        return false
    }
    if(!["open","working","closed"].includes(data.status)){
        log("--4. Status Runtime Validation Failed")
        return false
    }
    let assinge=data.assigne
    if(!["Jacob","Jude","N/A"].includes(assinge)){
        log("--5. Assigne Runtime Failed")
        return false
    }
    return true
}

// Create Ticket
export async function createTicket(data:ticket){
    let check:boolean=await runtimeValidation(data,1)
    if(check){
        writeData(data)
        log(styleText(["bgGreen","bold"],"Ticket Created Succesfully "))
        return {"status":"New Ticket"}
    }
    log(styleText(["bgRed","bold"],"Create Ticket Failed "))
    throw new Error("Ticket Creation Failed")
}

// List Tickets
export async function listTickets() {
        const tickets : ticket[]=await readData()
        let titles : string[]=[]
        for(let ticket of tickets){
            log(ticket.title)
            titles.push(ticket.title)
        }
        log(styleText(["bgGreen","bold"],"Tickets Listed Succesfully "))
        return titles
}

// View Ticket
export async function viewTicket(ticketTitle:string) {
    const tickets : ticket[]=await readData()
    for(let ticket of tickets){
        if(ticket.title===ticketTitle){
            log(ticket)
            log(styleText(["bgGreen","bold"],"Tickets Viewed Successfully "))
            return ticket
        }
    }
    log(styleText(["bgRed","bold"],"Ticket View Failed"))
    throw new Error("Ticket does not exist")
}

// Updatestatus : params : { ticketTitile : "----" , newStatus : "-----" }      : Pass full object to validate  : updateData(data:ticket,delete=0)
export async function updateTicketStatus(payload:statusUpdate) {
    if(payload.title && payload.status && Object.keys(payload).length==2){
        const tickets : ticket[]=await readData()
        for(let ticket of tickets){
            if(ticket.title===payload.title){
                let data={...ticket,...payload}
                let check:boolean=await runtimeValidation(data)
                if(check){
                    updateData(data)
                    log(styleText(["bgGreen","bold"],"Status Updated Successfully "))
                    return {"status":"New Status"}
                }
            }
        }
        log(styleText(["bgRed","bold"],"Status Update Failed "))
        throw new  Error("Status Update Failed")
    }else{
        log(styleText(["bgRed","bold"],"Status Update Failed "))
        throw new Error("Invalid Syntax of header")
    }
}

// Assign Ticket : params : { ticketTitile : "----" , newAssigne : "-----" }    : Pass full object to validate  : updateData(data:ticket,del)
export async function updateAssigneStatus(payload:assignUpdate) {
     if(payload.title && payload.assigne && Object.keys(payload).length==2){
        const tickets : ticket[]=await readData()
        for(let ticket of tickets){
            if(ticket.title===payload.title){
                let data={...ticket,...payload}
                let check:boolean=await runtimeValidation(data)
                if(check){
                    updateData(data)
                    log(styleText(["bgGreen","bold"],"Assigned Successfully "))
                    return {"status":"New Assigne"}
                }
            }
        }
        log(styleText(["bgRed","bold"],"Assigne Update Failed "))
        throw new  Error("Assignment failed")
    }else{
        log(styleText(["bgRed","bold"],"Assigne Update Failed "))
        throw new Error("Invalid Syntax of header")
    }
}

// Delete Ticket : params : { ticketTitile : "----" }                           : Check if valid titile         : removeData(validtitle: title_name)
export async function deleteTicket(payload:deleteUpdate) {
    const tickets : ticket[]=await readData()
    for(let ticket of tickets){
        if(ticket.title===payload.title){
            deleteData(payload.title)
            log(styleText(["bgGreen","bold"],"Deleted Successfully "))
             return {"status":"Succesfull deletion"}
        }
    }
    log(styleText(["bgRed","bold"],"Deleted Failed "))
    throw new Error("Deletion Failed")
}