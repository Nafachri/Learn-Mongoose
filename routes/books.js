const express = require("express");
const Router = express.Router();
const controller = require("../controllers/books");

Router.post("/", controller.addBooksData);

Router.get("/", controller.getBooksData);
Router.get("/:title", controller.getBooksDataByTitle);

Router.patch("/:id", controller.updateBooksDataById);
// Router.put("/:id", controller.updateBooksDataById)

Router.delete("/:id", controller.deleteBooksDataById);
Router.delete("/:title", controller.deleteBooksDataByTitle);

module.exports = Router;
