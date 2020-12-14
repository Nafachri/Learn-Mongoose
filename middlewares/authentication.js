//Mengetahui user yang akses

const jwt = require("jsonwebtoken"); // => untuk ngecheck token valid / tidak
const Users = require("../models/users"); // => butuh model karena akan check data ke database

const authentication = async (req, res, next) => {
  try {
    const { accesstoken } = req.headers;
    if (!accesstoken) {
      throw new Error("token required");
    }
    //validasi token
    const payload = jwt.verify(accesstoken, "s3cret");

    req.users = {
      userId: payload.userId,
    };
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = authentication;
