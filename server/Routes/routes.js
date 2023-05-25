import express from "express";
const Router = express.Router();
import { addData, postData, showData, getById, getData } from "../Controller/controller.js";
import { locationData } from "../Controller/locationController.js";

//! General Routers
Router.get("/data", showData);
Router.get("/getData", getData);
Router.get("/addData", addData);
Router.get("/getById/:id", getById);
Router.post("/postData", postData);
// Router.post("/postData", postData);

//! Location Post router
Router.post("/postLocationData", locationData);

export default Router;