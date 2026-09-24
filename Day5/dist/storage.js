"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readData = readData;
exports.writeData = writeData;
exports.updateData = updateData;
exports.deleteData = deleteData;
const promises_1 = require("node:fs/promises");
const filename = "data.json";
async function readData() {
    try {
        let rawdata = await (0, promises_1.readFile)(filename, "utf-8");
        let tickets = JSON.parse(rawdata);
        // log(tickets)
        return tickets;
    }
    catch (err) {
        throw Error("readData : storage.ts : Failed");
    }
}
// readData()
async function writeData(data) {
    let tickets = await readData();
    tickets.push(data);
    await (0, promises_1.writeFile)(filename, JSON.stringify(tickets, null, 2));
}
// writeData({
//     title: 'Fan Complaint',
//     description: 'High noise',
//     status: 'closed',
//     priority: 'high',
//     assigne: 'Jude'
//   })
async function updateData(data) {
    let tickets = await readData();
    let index = 0;
    for (let ticket of tickets) {
        if (ticket.title == data.title) {
            tickets[index] = { ...ticket, ...data };
        }
        index++;
    }
    await (0, promises_1.writeFile)(filename, JSON.stringify(tickets, null, 2));
}
// updateData({
//     title: 'Fan Complaint',
//     description: 'High noise',
//     status: 'closed',
//     priority: 'high',
//     assigne: 'Jude'
//   })
async function deleteData(validTitle) {
    let tickets = await readData();
    let index = 0;
    for (let ticket of tickets) {
        if (ticket.title == validTitle) {
            break;
        }
        index++;
    }
    tickets.splice(index);
    await (0, promises_1.writeFile)(filename, JSON.stringify(tickets, null, 2));
}
// deleteData('Fan Complaint')
