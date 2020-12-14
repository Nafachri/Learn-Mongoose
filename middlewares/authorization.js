const Users = require("../models/users");

const authorization = async (req, res, next) => {
  try {
    const { userId } = req.users;

    Users.findOne({
      userId: userId,
    });
    if (!userId) {
      throw new Error("not authorize user");
    }
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = authorization;
