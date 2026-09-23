import { log } from 'node:console';
import { testHealth, readtask, read, writeTask, patchTask, deleteTask } from "../TaskFunctions.js";
export async function getAllTasks(req, res) {
    const result = await read();
    res.setHeader('Status', 200);
    res.setHeader("Content-Type", "application/json");
    res.send(result);
}
export async function healthCheck(req, res) {
    const result = JSON.parse(await testHealth());
    res.setHeader('Status', 200);
    res.setHeader("Content-Type", "application/json");
    res.send(result);
}
export async function getOneTask(req, res) {
    const result = await readtask(req.params.id);
    res.setHeader('Status', 200);
    res.setHeader("Content-Type", "application/json");
    res.send(result);
}
export async function writeTaskController(req, res) {
    let payload = req.body;
    res.setHeader("Content-Type", "application/json");
    const result = await writeTask(payload);
    res.send(result);
}
export async function patchTaskController(req, res) {
    let payload = req.body;
    log(payload);
    res.setHeader("Content-Type", "application/json");
    const result = await patchTask(payload);
    res.send(result);
}
export async function deleteTaskController(req, res) {
    let payload = req.body;
    log(payload);
    res.setHeader("Content-Type", "application/json");
    const result = await deleteTask(payload);
    res.send(result);
}
