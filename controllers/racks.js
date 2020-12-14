const Racks = require("../models/racks");

class racksController {
  static createRacksData = async (req, res) => {
    try {
      const createRacksData = await Racks.create({
        section: req.body.section,
        number: req.body.number,
        floor: req.body.floor,
      });
      res.status(200).json({
        message: "Success to create data",
        data: createRacksData,
      });
    } catch (error) {
      next(error);
      // console.log(error);
      // res.status(500).json({
      //   message: "Unable to create data",
      //   error: error,
      // });
    }
  };
  static getRacksData = async (req, res, next) => {
    try {
      const getRacksData = await Racks.find();
      res.status(200).json({
        message: "Success to get data",
        data: getRacksData,
      });
    } catch (error) {
      next(new Error("cannot get racks data")); // => send error to error handling
    }
  };

  //Pake data dari Middleware
  static getRacksDataByMw = async (req, res, next) => {
    try {
      res.status(200).json({
        firstName: req.person.firstName,
        lastName: req.person.lastName,
      });
    } catch (error) {
      next(new Error("cannot get racks data")); // => send error to error handling
    }
  };

  static getRacksDataBySection = async (req, res) => {
    // READ
    try {
      const racksSection = await Racks.findOne({ section: req.params.id });
      res.status(200).json({
        message: "Success Get Data By Section",
        data: racksSection,
      });
    } catch (error) {
      console.log(err);
    }
  };

  static getRacksDataByFloor = async (req, res) => {
    // READ
    try {
      const racksByFloor = await Racks.find({ floor: req.params.id });
      res.status(200).json({
        message: "Success To Get Racks Data By Floor",
        data: racksByFloor,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Unable To Get Racks Data By Floor",
        error: error,
      });
    }
  };
  static updateRacksDataById = async (req, res) => {
    try {
      const updateRacksDataById = await Racks.updateOne({
        id: req.params.id,
        section: req.body.section,
        number: req.body.number,
        floor: req.body.floor,
      });
      res.status(200).json({
        message: "Success to update data",
        data: updateRacksDataById,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Unable to update data",
        error: error,
      });
    }
  };

  static deleteRacksDataBySection = async (req, res) => {
    try {
      const deleteRacksDataBySection = await Racks.deleteOne({
        section: req.params.section,
      });
      res.status(200).json({
        message: "Success to delete racks data",
        data: deleteRacksDataBySection,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Unable to delete racks data",
        error: error,
      });
    }
  };
}

module.exports = racksController;
