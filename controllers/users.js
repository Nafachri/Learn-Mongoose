const Users = require("../models/users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

class users {
  static register = async (req, res, next) => {
    try {
      const { username, password } = req.body;

      const register = await Users.create({
        username: username,
        password: bcrypt.hashSync(password), // => menyimpan password dalam bentuk encrypt
      });
      res.status(200).json({
        message: "Register Success",
        data: register,
      });
    } catch (error) {
      next(new Error("Unable to register"));
    }
  };
  static login = async (req, res, next) => {
    try {
      const { username, password } = req.body;
      const users = await Users.findOne({
        username: username,
      });
      if (!users) {
        throw new Error("Invalid Username / Password");
      }

      if (!bcrypt.compareSync(password, users.password)) {
        throw new Error("Invalid Username / Password");
      }

      const tokenPayload = {
        // => ini payload
        userId: users._id, // => yang dijadikan payload jangan sesuatu yang sensitif
      };

      const jwtToken = jwt.sign( // => buat bikin token
        tokenPayload,
        "s3cret" /* { expiresIn: "15s" }*/
      ); // => ini jwt token

      // ini ibarat orang baru dapet id masuknya, blm bisa di check
      res.status(200).json({
        // => ini belum masuk ke proses authentication and authorization
        message: "Logged",
        // data: users, // => yang kita balikin bukan lagi users melakinkan token
        accessToken: jwtToken, // => ketika login kita balikin token
      });
    } catch (error) {
      next(error);
    }
  };
  static getAll = async (req, res, next) => {
    try {
      const getAll = await Users.find();

      res.status(200).json({
        users: getAll,
      });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = users;
