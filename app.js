const express = require("express");
const app = express();
const db = require("./config/connection");
// const errorHandler = require("./middlewares/errorHandler");
const routes = require("./routes/index");

app.use(express.urlencoded({ extended: true })); // Built-in Middleware
app.use(express.json()); //Built-in Middleware

app.use(routes);

db.on("error", console.error.bind(console, "connection error")); //Test db connection
db.once("open", () => console.log("we're connect")); //Test db connection

// app.use(errorHandler);

app.listen(3000, () => {
  console.log("Server Ready on Port 3000");
});
