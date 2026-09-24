"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const controller_1 = require("./controller");
const node_util_1 = require("node:util");
exports.app = (0, express_1.default)();
let id = 0;
const logRequest = async function (req, res, next) {
    console.log((0, node_util_1.styleText)(["bgMagenta", "bold"], `Request id      : ${id}`));
    console.log((0, node_util_1.styleText)(["bgMagenta", "bold"], `Request path    : ${req.path}`));
    console.log((0, node_util_1.styleText)(["bgMagenta", "bold"], `Request method  : ${req.method}`));
    id++;
    return next();
};
const RouteNotFound = async function (req, res, next) {
    console.log((0, node_util_1.styleText)(["bgRed", "bold"], `INVALID ROUTE`));
    throw Error("Invalid Route Entered");
};
exports.app.use(logRequest);
exports.app.use(express_1.default.json());
exports.app.get("/test", (req, res) => {
    res.send("Test success");
});
exports.app.get("/list", controller_1.listalltickets);
exports.app.get("/view/:id", controller_1.viewOneticket);
exports.app.post("/", controller_1.createOneticket);
exports.app.patch("/status", controller_1.updateOneTicketStatus);
exports.app.patch("/assign", controller_1.updateOneTicketAssigne);
exports.app.delete("/", controller_1.deleteOneTicket);
exports.app.use(RouteNotFound);
exports.app.use((err, req, res, next) => {
    res.status(400).send(err.message);
});
