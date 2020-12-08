const BorrowBooks = require("../models/borrow_books");

class borrowBooksController {
  static addData = (req, res) => {
    BorrowBooks.create(
      {
        borrower_name: req.body.borrower_name,
        books_id: req.body.books_id,
        is_returned: req.body.is_returned,
        borrowed_date: req.body.borrowed_date,
        returned_date: req.body.returned_date,
      },
      (err, borrowBooks) => {
        if (err) {
          console.log(err);
          res.status(404).json({
            message: "Unable To Add Data",
            error: err,
          });
        } else {
          res.status(200).json({
            message: "Success To Add Data",
            borrowBooks,
          });
        }
      }
    );
  };
  static getAllData = (req, res) => {
    BorrowBooks.find({}, (err, borrowBooks) => {
      if (err) {
        console.log(err);
        res.status(500).json({
          message: "Unable To Get Data",
          error: err,
        });
      } else {
        res.status(200).json({
          message: "Success Get Data",
          borrowBooks,
        });
      }
    });
  };
  static updateDataById = (req, res) => {
    BorrowBooks.updateOne(
      {
        borrower_name: req.body.borrower_name,
        books_id: req.params.id,
        is_returned: req.body.is_returned,
        borrowed_date: req.body.borrowed_date,
        returned_date: req.body.returned_date,
      },
      (err, borrowBooks) => {
        if (err) {
          console.log(err);
          res.status(500).json({
            message: "Unable To Update Data",
            error: err,
          });
        } else {
          res.status(200).json({
            message: "Success To Update Data",
            borrowBooks,
          });
        }
      }
    );
  };
  static deleteDataByName = (req, res) => {
    BorrowBooks.deleteOne({ borrower_name: req.params.name }, (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).json({
          message: "Unable To Delete Data",
          error: err,
        });
      } else {
        res.status(200).json({
          message: "Success To Delete Data",
          result,
        });
      }
    });
  };
}

module.exports = borrowBooksController;
