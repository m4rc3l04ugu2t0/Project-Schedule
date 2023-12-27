const express = require("express");
const route = express.Router();

const manageHome = require("./src/controllers/home");

route.get("/", manageHome.pageHome);
route.post("/", manageHome.HomePost);

module.exports = route;
