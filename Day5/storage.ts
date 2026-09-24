// We read and write in this file
import { log } from "node:console"
import { readFile, writeFile } from "node:fs/promises"
import { ticket } from "./types"

const filename="data.json"

export async function readData(){
    try{
        let rawdata: string=await readFile(filename,"utf-8")
        let tickets : ticket[]=JSON.parse(rawdata)
        // log(tickets)
        return tickets
    }
    catch(err){
        throw Error("readData : storage.ts : Failed")
    }
}
// readData()

export async function writeData(data:ticket) {
    let tickets : ticket[]=await readData()
    tickets.push(data)
    await writeFile(filename,JSON.stringify(tickets,null,2))
}

// writeData({
//     title: 'Fan Complaint',
//     description: 'High noise',
//     status: 'closed',
//     priority: 'high',
//     assigne: 'Jude'
//   })

export async function updateData(data:ticket) {
    let tickets : ticket[]=await readData()
    let index=0
    for(let ticket of tickets){
        if(ticket.title==data.title){
            tickets[index]={...ticket,...data}
        }
        index++
    }
    await writeFile(filename,JSON.stringify(tickets,null,2))
}

// updateData({
//     title: 'Fan Complaint',
//     description: 'High noise',
//     status: 'closed',
//     priority: 'high',
//     assigne: 'Jude'
//   })

export async function deleteData(validTitle:string) {
    let tickets : ticket[]=await readData()
    let index=0
    for(let ticket of tickets){
        if(ticket.title==validTitle){
            break
        }
        index++
    }
    tickets.splice(index)
    await writeFile(filename,JSON.stringify(tickets,null,2))
}

// deleteData('Fan Complaint')
