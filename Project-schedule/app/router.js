const express = require("express");
const route = express.Router();

const manageHome = require("./src/controllers/home");
const manageLogin = require("./src/controllers/login");

// routes home
route.get("/", manageHome.pageHome);

// routes login

// router to enter
route.get("/login/sing-in", manageLogin.pageSingIn);
route.post("/login/sing-in", manageLogin.postSingIn);

// router register
route.get("/login/register", manageLogin.pageRegistre);

// router registered
// route.get("/login/register/registered", manageLogin.pageRegistered);
route.post("/login/register/registered", manageLogin.postRegistered);

module.exports = route;
