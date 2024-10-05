import servicesRoute from "./controllers/serviceController.js"
import morgan from "morgan";
import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import { homeDir } from "./constants.js";
const controller = {}
controller.config = (app)=>{

    app.use(express.static(`${homeDir}/assets`))
    app.use(bodyParser.json());
    app.use(express.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(morgan("short"));
    app.use(cors())
}
controller.start = (app)=>{

    app.use("/services",servicesRoute)

}
export default controller;