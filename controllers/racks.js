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
  static getRacksDataBySection = (req, res) => {
    // READ
    Racks.find({ section: req.params.id }, (err, racks) => {
      if (err) {
        console.log(err);
        res.status(500).json({
          message: "Unable To Get Racks Data By Section",
          error: err,
        });
      } else {
        res.status(200).json({
          message: "Success To Get Racks Data By Section",
          racks,
        });
      }
    });
  };
  static getRacksDataByFloor = (req, res) => {
    // READ
    Racks.find({ floor: req.params.id }, (err, racks) => {
      if (err) {
        console.log(err);
        res.status(500).json({
          message: "Unable To Get Racks Data By Floor",
          error: err,
        });
      } else {
        res.status(200).json({
          message: "Success To Get Racks Data By Floor",
          racks,
        });
      }
    });
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