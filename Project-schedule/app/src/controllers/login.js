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

exports.postRegistered = async (req, res) => {
  try {
    console.log(req.body);
    const login = new Login(req.body);
    await login.resgisterUser();

    if (login.error.length > 0) {
      req.flash("errors", login.error);
      req.session.save(() => {
        res.redirect("back");
      });
      return; // Adicione um return aqui para evitar a execução adicional
    }

    req.flash("success", "sucesso");
    req.session.save(() => {
      res.render("registered");
    });
  } catch (error) {
    console.log(error);
    res.render("pageError");
  }
};
