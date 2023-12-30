const express = require("express");
const route = express.Router();

const manageHome = require("./src/controllers/home");
// const manageLogin = require("./src/controllers/login");

// routes home
route.get("/", manageHome.pageHome);

// routes login
// route.get("/login/sing-in", manageLogin.pageLogin);
// route.get("/login/register", manageLogin.LoginPost);

module.exports = route;
