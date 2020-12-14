const express = require("express");
const Router = express.Router();
const controller = require("../controllers/users");

const authentication = require("../middlewares/authentication");
const authorization = require("../middlewares/authorization");

Router.get("/", authentication, authorization, controller.getAll);
Router.post("/register", controller.register);
Router.post("/login", controller.login);

module.exports = Router;
