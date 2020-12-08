const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const booksSchema = new Schema(
  {
    author: {
      type: String,
      validate: {
        validator: (v) => {
          return /[A-Z]/.test(v);
        },
      },
    },
    title: {
      type: String,
      validate: {
        validator: (v) => {
          return /^[A-Z]/.test(v);
        },
      },
    },
    published_year: Date,
    racks_id: {
      type: mongoose.Types.ObjectId,
      ref: "Racks",
    },
  }
  // {
  //   timestamps: true,
  // }
);

const Books = mongoose.model("Books", booksSchema);

module.exports = Books;
