const express = require("express");
const app = express();
const db = require("./config/connection");
const routes = require("./routes/index");
app.use(express.json());

app.use(routes);

db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => console.log("we're connect"));

app.listen(3000, () => {
  console.log("Server Ready on Port 3000");
});
