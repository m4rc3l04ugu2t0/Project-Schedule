const HomeModel = require("../models/homeModel");

exports.pageLogin = (req, res) => {
  res.render("pageLogin");
};

exports.LoginPost = (req, res) => {
  const { name, email, password } = req.body;
  HomeModel.create({
    userName: name,
    userEmail: email,
    userPassword: password,
  }).then((response) => {
    console.log(response);
  });
};
