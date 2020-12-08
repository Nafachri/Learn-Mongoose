const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const racksSchema = new Schema(
  {
    section: {
      type: String,
      required: true,
      validate: {
        validator: (v) => {
          return /[A-Z]/.test(v);
        },
      },
    },
    number: {
      type: Number,
      min: 1,
      max: 10,
      validate: {
        validator: (v) => {
          return /\d/.test(v);
        },
      },
      required: true,
    },
    floor: {
      type: Number,
      min: 1,
      max: 10,
      validate: {
        validator: (v) => {
          return /\d/.test(v);
        },
      },
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Racks = mongoose.model("Racks", racksSchema);

module.exports = Racks;
