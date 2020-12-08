const mongoose = require("mongoose");

//LOCAL BABY
mongoose.connect("mongodb://localhost:27017/library", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// ATLAS BABY
// mongoose.connect(
//   "mongodb+srv://root:November301198@cluster0.vxsi1.mongodb.net/library?retryWrites=true&w=majority",
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   }
// );

const db = mongoose.connection;

module.exports = db;
