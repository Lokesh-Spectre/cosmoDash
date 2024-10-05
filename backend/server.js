import express from "express";
import {server} from "./constants.js";
import controller from "./controllers.js";
import { CheckData } from "./utils.js";
import { watchServices } from "./jobs/servicesWatch.js";
const app = express();
CheckData();

controller.config(app);
controller.start(app);

app.get("/", async (req, res) => {
    return res.status(200).send({ status: "success", message: "This is backend for cosmoDash. My dashboard from my home server" })
});
watchServices()
app.listen(server.PORT, (err) => {
    if (err) {
        console.log(`***${err}`)
    } else {
        console.log(`Server started at ${server.PORT}`)
    }
})

