"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const portNo = 7000;
app_1.app.listen(portNo, () => {
    console.log("We are listening at 7000");
});
