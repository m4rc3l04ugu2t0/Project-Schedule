const HomeModel = require("../models/homeModel");

exports.pageHome = (req, res, next) => {
  res.render("pageHome");
};
exports.HomePost = (req, res, next) => {
  const { name, email, password } = req.body;
  HomeModel.create({
    userName: name,
    userEmail: email,
    userPassword: password,
  }).then((response) => {
    console.log(response);
  });

  next();
};
