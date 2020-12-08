const Books = require("../models/books");

class booksController {
  static addBooksData = (req, res) => {
    Books.create(
      {
        author: req.body.author,
        title: req.body.title,
        published_year: req.body.published_year,
      },
      (err, books) => {
        if (err) {
          console.log(err);
          res.status(500).json({
            message: "Unable Add Books Data",
            error: err,
          });
        } else {
          res.status(200).json({
            message: "Success Adding Books Data",
            books,
          });
        }
      }
    );
  };
  static getBooksData = (req, res) => {
    Books.find({}, (err, books) => {
      if (err) {
        console.log(err);
        res.status(500).json({
          message: "Unable To Get Books Data",
          error: err,
        });
      } else {
        res.status(200).json({
          message: "Success Adding Books Data",
          books,
        });
      }
    });
  };
  static getBooksDataByTitle = (req, res) => {
    Books.find({ title: req.params.title }, (err, books) => {
      if (err) {
        console.log(err);
        res.status(500).json({
          message: "Unable To Get Books Data",
          error: err,
        });
      } else {
        res.status(200).json({
          message: "Success Adding Books Data",
          books,
        });
      }
    });
  };
  static updateBooksDataById = (req, res) => {
    Books.updateOne(
      {
        _id: req.params.id,
        author: req.body.author,
        title: req.body.title,
        published_year: req.body.published_year,
        racks_id: req.params.id,
      },
      (err, books) => {
        if (err) {
          console.log(err);
          res.status(500).json({
            message: "Unable To Update Books Data",
            error: err,
          });
        } else {
          res.status(200).json({
            message: "Success To Update Books Data",
            books,
          });
        }
      }
    );
  };
  static deleteBooksDataById = (req, res) => {
    Books.deleteOne(
      {
        _id: req.params.id,
      },
      (err, books) => {
        if (err) {
          console.log(err);
          res.status(500).json({
            message: "Unable To Delete Books Data",
            error: err,
          });
        } else {
          res.status(200).json({
            message: "Success Delete Books Data",
            books,
          });
        }
      }
    );
  };
  static deleteBooksDataByTitle = (req, res) => {
    Books.deleteOne(
      {
        title: req.params.title,
      },
      (err, books) => {
        if (err) {
          console.log(err);
          res.status(500).json({
            message: "Unable To Delete Books Data",
            error: err,
          });
        } else {
          res.status(200).json({
            message: "Success Delete Books Data",
            books,
          });
        }
      }
    );
  };
}

module.exports = booksController;
