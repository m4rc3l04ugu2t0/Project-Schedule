const express = require("express");
const route = express.Router();

// routes home
const manageHome = require("./src/controllers/home");
route.get("/", manageHome.pageHome);

// routes login
const manageLogin = require("./src/controllers/login");
route.get("/login/sing-in", manageLogin.pageLogin);
route.get("/login/register", manageLogin.LoginPost);

module.exports = route;
