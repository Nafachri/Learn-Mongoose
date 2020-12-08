const express = require("express");
const Router = express.Router();
const controller = require("../controllers/borrowBooks");

Router.post("/", controller.addData);
Router.get("/", controller.getAllData);
Router.patch("/:id", controller.updateDataById);
// Router.put("/", controller);
Router.delete("/:name", controller.deleteDataByName);

module.exports = Router;
