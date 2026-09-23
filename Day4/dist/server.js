import { app } from "./app.js";
const portNo = 7000;
app.listen(portNo, () => {
    console.log("We are listening at 7000");
});
