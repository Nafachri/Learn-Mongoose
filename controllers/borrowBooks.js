const BorrowBooks = require("../models/borrow_books");

class borrowBooksController {
  static addData = async (req, res) => {
    try {
      const addData = await BorrowBooks.create(req.body);
      res.status(200).json({
        message: "Success to add data",
        data: addData,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Unable to add data",
        error: error,
      });
    }
  };
  static getAllData = async (req, res, next) => {
    try {
      const getAllData = await BorrowBooks.find();
      res.status(200).json({
        message: "Success to get data",
        data: getAllData,
      });
    } catch (error) {
      next(new Error("Unable to get all data"));
    }
  };
  static updateDataById = async (req, res, next) => {
    try {
      const updateDataById = await BorrowBooks.updateOne({
        borrower_name: req.body.borrower_name,
        books_id: req.body.books_id,
        is_returned: req.body.is_returned,
        borrowed_date: req.body.borrowed_date,
        returned_date: req.body.returned_date,
      });
      res.status(200).json({
        message: "Success to update data",
        data: updateDataById,
      });
    } catch (error) {
      next(new Error("Unable to update data"));
    }
  };
  static deleteDataByName = async (req, res, next) => {
    try {
      const deleteDataByName = await BorrowBooks.deleteOne({
        borrower_name: req.params.name,
      });
      res.status(200).json({
        message: "Success to delete data",
        data: deleteDataByName,
      });
    } catch (error) {
      next(new Error("Unable to delete data"));
    }
  };
}

module.exports = borrowBooksController;
