const express = require("express");
const Router = express.Router();
const controller = require("../controllers/racks");

Router.post("/", controller.createRacksData);
Router.get("/", controller.getRacksData);
Router.get("/section/:id", controller.getRacksDataBySection);
Router.get("/floor/:id", controller.getRacksDataByFloor);
Router.patch("/:id", controller.updateRacksDataById);
// Router.put("/:id", controller.updateRacksData)
Router.delete("/:section", controller.deleteRacksDataBySection);

module.exports = Router;
