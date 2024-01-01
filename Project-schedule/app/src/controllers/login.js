const Login = require("../models/LoginModel");

exports.pageSingIn = (req, res) => {
  res.render("pageSingIn");
};

exports.postSingIn = (req, res) => {
  res.send(req.body);
};

exports.pageRegistre = (req, res) => {
  res.render("pageRegistre");
};

// exports.pageRegistered = (req, res) => {
//   res.send("dd");
// };
console.log("oxiii", Login);

exports.postRegistered = (req, res) => {
  const login = new Login(req.body);
  login.resgisterUser();

  res.send(login.error);
};
