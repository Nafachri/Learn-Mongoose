const express = require("express");
const Router = express.Router();
const racksRouter = require("./racks");
const booksRouter = require("./books");
const borrowBooksRouter = require("./borrowBooks");
const usersRouter = require("./users");
// const middleware1 = require("../middlewares/middleware1");
const errorHandler = require("../middlewares/errorHandler");

// Router.use(middleware1);
Router.use("/racks", racksRouter);
Router.use("/books", booksRouter);
Router.use("/borrow-books", borrowBooksRouter);
Router.use("/users", usersRouter);
Router.use(errorHandler);

module.exports = Router;
