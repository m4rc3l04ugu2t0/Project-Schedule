const express = require("express");
const route = express.Router();

const manageHome = require("./src/controllers/home");
const manageLogin = require("./src/controllers/login");

route.get("/", manageHome.pageHome);
route.post("/", manageHome.HomePost);

route.get("/login", manageLogin.pageLogin);

module.exports = route;
