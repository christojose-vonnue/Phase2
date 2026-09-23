// import { express } from "express";
// import type { Express  } from "express";
import express from 'express';
import { log } from 'node:console';
import { styleText } from "node:util";
import { patchTaskController, getAllTasks, getOneTask, writeTaskController, deleteTaskController, healthCheck } from './controllers/controller.js';
export const app = express();
let id = 0;
//eg middleware
//Request Logging
const logRequest = async function (req, res, next) {
    log(styleText(["bgMagenta", "bold"], `Request id      : ${id}`));
    log(styleText(["bgMagenta", "bold"], `Request path    : ${req.path}`));
    log(styleText(["bgMagenta", "bold"], `Request method  : ${req.method}`));
    id++;
    return next();
};
const RouteNotFound = async function (req, res, next) {
    log("--------------------");
    console.log(styleText(["bgRed", "bold"], `INVALID ROUTE`));
    throw Error("Invalid Route Entered");
};
app.use(logRequest);
app.use(express.json());
app.get('/', getAllTasks);
app.get('/tasks', getAllTasks);
app.get('/health', healthCheck);
app.get('/tasks/:id', getOneTask);
app.post('/', writeTaskController);
app.patch('/', patchTaskController);
app.use(express.text());
app.delete("/", deleteTaskController);
app.use(RouteNotFound);
app.use((err, req, res, next) => {
    res.status(400).send(err.message);
});
