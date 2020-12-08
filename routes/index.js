const express = require("express");
const Router = express.Router();
const racksRouter = require("./racks");
const booksRouter = require("./books");
const borrowBooksRouter = require("./borrowBooks");

Router.use("/racks", racksRouter);
Router.use("/books", booksRouter);
Router.use("/borrow-books", borrowBooksRouter);

module.exports = Router;
