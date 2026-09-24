"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listalltickets = listalltickets;
exports.viewOneticket = viewOneticket;
exports.createOneticket = createOneticket;
exports.updateOneTicketStatus = updateOneTicketStatus;
exports.updateOneTicketAssigne = updateOneTicketAssigne;
exports.deleteOneTicket = deleteOneTicket;
const console_1 = require("console");
const service_1 = require("./service");
async function listalltickets(req, res) {
    const result = await (0, service_1.listTickets)();
    res.setHeader('Status', 200);
    res.setHeader("Content-Type", "application/json");
    res.send(result);
}
async function viewOneticket(req, res) {
    const result = await (0, service_1.viewTicket)(req.params.id);
    res.setHeader('Status', 200);
    res.setHeader("Content-Type", "application/json");
    res.send(result);
}
async function createOneticket(req, res) {
    console.log(req.body);
    (0, console_1.log)(typeof req.body);
    const result = await (0, service_1.createTicket)(req.body);
    res.status(201);
    res.send(result);
}
async function updateOneTicketStatus(req, res) {
    const result = await (0, service_1.updateTicketStatus)(req.body);
    res.setHeader('Status', 200);
    res.setHeader("Content-Type", "application/json");
    res.send(result);
}
async function updateOneTicketAssigne(req, res) {
    const result = await (0, service_1.updateAssigneStatus)(req.body);
    res.setHeader('Status', 200);
    res.setHeader("Content-Type", "application/json");
    res.send(result);
}
async function deleteOneTicket(req, res) {
    const result = await (0, service_1.deleteTicket)(req.body);
    res.setHeader('Status', 200);
    res.setHeader("Content-Type", "application/json");
    res.send(result);
}
