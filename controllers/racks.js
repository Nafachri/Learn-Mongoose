const Racks = require("../models/racks");

class racksController {
  static createRacksData = (req, res) => {
    Racks.create(
      // CREATE
      {
        section: req.body.section,
        number: req.body.number,
        floor: req.body.floor,
      },
      (err, racks) => {
        if (err) {
          console.log(err);
          res.status(500).json({
            message: "Unable Create Racks Data",
            error: err,
          });
        } else {
          res.status(200).json({
            message: "Success Create Racks Data",
            racks,
          });
        }
      }
    );
  };
  static getRacksData = (req, res) => {
    // READ
    Racks.find({}, (err, racks) => {
      if (err) {
        console.log(err);
        res.status(500).json({
          message: "Unable To Get Racks Data",
          error: err,
        });
      } else {
        res.status(200).json({
          message: "Success To Get Racks Data",
          racks,
        });
      }
    });
  };
  // static getRacksDataBySection = (req, res) => {
  //   // READ
  //   Racks.find({ section: req.params.id }, (err, racks) => {
  //     if (err) {
  //       console.log(err);
  //       res.status(500).json({
  //         message: "Unable To Get Racks Data By Section",
  //         error: err,
  //       });
  //     } else {
  //       res.status(200).json({
  //         message: "Success To Get Racks Data By Section",
  //         racks,
  //       });
  //     }
  //   });
  // };

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
  static updateRacksDataById = (req, res) => {
    // UPDATE
    Racks.updateOne(
      {
        id: req.params.id,
        section: req.body.section,
        number: req.body.number,
        floor: req.body.floor,
      },
      (err, racks) => {
        if (err) {
          console.log(err);
          res.status(500).json({
            message: "Unable To Update Racks Data",
            error: err,
          });
        } else {
          res.status(200).json({
            message: "Success To Update Racks Data",
            racks,
          });
        }
      }
    );
  };

  static deleteRacksDataBySection = (req, res) => {
    Racks.deleteOne({ section: req.params.section }, (err, racks) => {
      if (err) {
        console.log(err);
        res.status(500).json({
          message: "Unable To Delete Racks Data",
          error: err,
        });
      } else {
        res.status(200).json({
          message: "Success To Delete Racks Data",
          racks,
        });
      }
    });
  };
}

module.exports = racksController;
