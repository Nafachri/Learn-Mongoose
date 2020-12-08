const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const borrowBookSchema = new Schema(
  {
    borrower_name: { type: String, required: true },
    books_id: {
      type: mongoose.Types.ObjectId,
      ref: "books",
    },
    is_returned: Boolean,
    borrowed_date: Date,
    returned_date: Date,
  },
  {
    timestamps: true,
  }
);

const BorrowBooks = mongoose.model("BorrowBooks", borrowBookSchema);

module.exports = BorrowBooks;
