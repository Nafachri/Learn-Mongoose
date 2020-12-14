const Books = require("../models/books");

class booksController {
  static addBooksData = async (req, res, next) => {
    try {
      const addBooksData = await Books.create({
        author: req.body.author,
        title: req.body.title,
        published_year: req.body.published_year,
      });
      res.status(200).json({
        message: "Success to add data",
        data: addBooksData,
      });
    } catch (error) {
      next(new Error("Unable to add data"));
    }
  };
  static getBooksData = async (req, res, next) => {
    try {
      const getBooksData = await Books.find();
      res.status(200).json({
        message: "Success to get data",
        data: getBooksData,
      });
    } catch (error) {
      next(new Error("Unable to get data"));
    }
  };
  static getBooksDataByTitle = async (req, res, next) => {
    try {
      const getBooksDataByTitle = await Books.find({ title: req.params.title });
      res.status(200).json({
        message: "Success to get data by title",
        data: getBooksDataByTitle,
      });
    } catch (error) {
      next(new Error("Unable to get data by title"));
    }
  };
  static updateBooksDataById = async (req, res, next) => {
    try {
      const updateBooksDataById = await Books.updateOne({
        _id: req.params.id,
        author: req.body.author,
        title: req.body.title,
        published_year: req.body.published_year,
        racks_id: req.params.id,
      });
      res.status(200).json({
        message: "Success to update data by id",
        data: updateBooksDataById,
      });
    } catch (error) {
      next(new Error("Unable to update data by id"));
    }
  };
  static deleteBooksDataById = async (req, res, next) => {
    try {
      const deleteBooksDataById = await Books.deleteOne({
        _id: req.params.id,
      });
      res.status(200).json({
        message: "Success to delete data by id",
        data: deleteBooksDataById,
      });
    } catch (error) {
      next(new Error("Unable to delete data by id"));
    }
  };
  static deleteBooksDataByTitle = async (req, res) => {
    try {
      const deleteBooksDataByTitle = await Books.deleteOne({
        title: req.params.title,
      });
      res.status(200).json({
        message: "Success to delete data by title",
        data: deleteBooksDataByTitle,
      });
    } catch (error) {
      next(new Error("Unable to delete data by title"));
    }
  };
}

module.exports = booksController;
