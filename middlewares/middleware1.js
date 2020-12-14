const middleware1 = (req, res, next) => {
  console.log("Middleware Succeed");

  //data dari middleware
  req.person = {
    firstName: "Naufal",
    lastName: "Al-Fachri",
  };
  next();
  //   req.params.name = "Sekut";
  // next();
  //   res.status(200).json({
  //     section: "Impact Byte",
  //     number: "1",
  //     floor: 10,
  //   });
};

module.exports = middleware1;
