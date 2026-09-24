"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runtimeValidation = runtimeValidation;
exports.createTicket = createTicket;
exports.listTickets = listTickets;
exports.viewTicket = viewTicket;
exports.updateTicketStatus = updateTicketStatus;
exports.updateAssigneStatus = updateAssigneStatus;
exports.deleteTicket = deleteTicket;
const node_console_1 = require("node:console");
const storage_1 = require("./storage");
const node_util_1 = require("node:util");
// Returns true if validated
async function runtimeValidation(data, write_updateflag = 0) {
    // validate fields
    let datakeys = Object.keys(data);
    if (datakeys.length != 5) {
        (0, node_console_1.log)("--0. Expected fields Runtime Validation Failed");
        return false;
    }
    // validate fields , All must exist and not ""
    if (!(data.assigne || data.description || data.priority || data.status || data.title)) {
        (0, node_console_1.log)("--00. Expected fields are undefined or empty Runtime Validation Failed");
        return false;
    }
    let currentdata = await (0, storage_1.readData)();
    // validate unique titles
    if (write_updateflag == 1) {
        for (let ticket of currentdata) {
            if (ticket.title === data.title) {
                (0, node_console_1.log)("--1. Title Runtime Validation Failed");
                return false;
            }
        }
    }
    // validate min characters
    if (data.description.length < 10) {
        (0, node_console_1.log)("--2. Desc Runtime Validation Failed");
        return false;
    }
    if (!["high", "medium", "low"].includes(data.priority)) {
        (0, node_console_1.log)("--3. Priority Runtime Validation Failed");
        return false;
    }
    if (!["open", "working", "closed"].includes(data.status)) {
        (0, node_console_1.log)("--4. Status Runtime Validation Failed");
        return false;
    }
    let assinge = data.assigne;
    if (!["Jacob", "Jude", "N/A"].includes(assinge)) {
        (0, node_console_1.log)("--5. Assigne Runtime Failed");
        return false;
    }
    return true;
}
// Create Ticket
async function createTicket(data) {
    let check = await runtimeValidation(data, 1);
    if (check) {
        (0, storage_1.writeData)(data);
        (0, node_console_1.log)((0, node_util_1.styleText)(["bgGreen", "bold"], "Ticket Created Succesfully "));
        return { "status": "New Ticket" };
    }
    (0, node_console_1.log)((0, node_util_1.styleText)(["bgRed", "bold"], "Create Ticket Failed "));
    throw new Error("Ticket Creation Failed");
}
// List Tickets
async function listTickets() {
    const tickets = await (0, storage_1.readData)();
    let titles = [];
    for (let ticket of tickets) {
        (0, node_console_1.log)(ticket.title);
        titles.push(ticket.title);
    }
    (0, node_console_1.log)((0, node_util_1.styleText)(["bgGreen", "bold"], "Tickets Listed Succesfully "));
    return titles;
}
// View Ticket
async function viewTicket(ticketTitle) {
    const tickets = await (0, storage_1.readData)();
    for (let ticket of tickets) {
        if (ticket.title === ticketTitle) {
            (0, node_console_1.log)(ticket);
            (0, node_console_1.log)((0, node_util_1.styleText)(["bgGreen", "bold"], "Tickets Viewed Successfully "));
            return ticket;
        }
    }
    (0, node_console_1.log)((0, node_util_1.styleText)(["bgRed", "bold"], "Ticket View Failed"));
    throw new Error("Ticket does not exist");
}
// Updatestatus : params : { ticketTitile : "----" , newStatus : "-----" }      : Pass full object to validate  : updateData(data:ticket,delete=0)
async function updateTicketStatus(payload) {
    if (payload.title && payload.status && Object.keys(payload).length == 2) {
        const tickets = await (0, storage_1.readData)();
        for (let ticket of tickets) {
            if (ticket.title === payload.title) {
                let data = { ...ticket, ...payload };
                let check = await runtimeValidation(data);
                if (check) {
                    (0, storage_1.updateData)(data);
                    (0, node_console_1.log)((0, node_util_1.styleText)(["bgGreen", "bold"], "Status Updated Successfully "));
                    return { "status": "New Status" };
                }
            }
        }
        (0, node_console_1.log)((0, node_util_1.styleText)(["bgRed", "bold"], "Status Update Failed "));
        throw new Error("Status Update Failed");
    }
    else {
        (0, node_console_1.log)((0, node_util_1.styleText)(["bgRed", "bold"], "Status Update Failed "));
        throw new Error("Invalid Syntax of header");
    }
}
// Assign Ticket : params : { ticketTitile : "----" , newAssigne : "-----" }    : Pass full object to validate  : updateData(data:ticket,del)
async function updateAssigneStatus(payload) {
    if (payload.title && payload.assigne && Object.keys(payload).length == 2) {
        const tickets = await (0, storage_1.readData)();
        for (let ticket of tickets) {
            if (ticket.title === payload.title) {
                let data = { ...ticket, ...payload };
                let check = await runtimeValidation(data);
                if (check) {
                    (0, storage_1.updateData)(data);
                    (0, node_console_1.log)((0, node_util_1.styleText)(["bgGreen", "bold"], "Assigned Successfully "));
                    return { "status": "New Assigne" };
                }
            }
        }
        (0, node_console_1.log)((0, node_util_1.styleText)(["bgRed", "bold"], "Assigne Update Failed "));
        throw new Error("Assignment failed");
    }
    else {
        (0, node_console_1.log)((0, node_util_1.styleText)(["bgRed", "bold"], "Assigne Update Failed "));
        throw new Error("Invalid Syntax of header");
    }
}
// Delete Ticket : params : { ticketTitile : "----" }                           : Check if valid titile         : removeData(validtitle: title_name)
async function deleteTicket(payload) {
    const tickets = await (0, storage_1.readData)();
    for (let ticket of tickets) {
        if (ticket.title === payload.title) {
            (0, storage_1.deleteData)(payload.title);
            (0, node_console_1.log)((0, node_util_1.styleText)(["bgGreen", "bold"], "Deleted Successfully "));
            return { "status": "Succesfull deletion" };
        }
    }
    (0, node_console_1.log)((0, node_util_1.styleText)(["bgRed", "bold"], "Deleted Failed "));
    throw new Error("Deletion Failed");
}
