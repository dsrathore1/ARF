import express from "express";
const Router = express.Router();
import { getData, postData, showData, getById } from "../Controller/controller.js";
import { locationData } from "../Controller/locationController.js";

//! General Routers
Router.get("/data", showData);
Router.get("/getById/:id", getById);
Router.get("/getData", getData);
Router.post("/postData", postData);
// Router.post("/postData", postData);

//! Location Post router
Router.post("/postLocationData", locationData);

export default Router;