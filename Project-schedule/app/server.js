require("dotenv").config();
const port = process.env.PORT;

const WebSocket = require("ws");
const express = require("express");
const http = require("http");

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });
const moogose = require("mongoose");
const path = require("path");

const { middlewareGlobal } = require("./src/middlewares/middleware");

const routes = require("./router");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  "/public",
  express.static(path.resolve(__dirname, "public"), {
    "Content-Type": "application/javascript",
  })
);
app.set("views", path.resolve(__dirname, "src", "views", "page"));
app.set("view engine", "ejs");

app.use(routes);
app.use(middlewareGlobal);

moogose
  .connect(port)
  .then(() => {
    console.log("veremos");
    app.emit("on");
  })
  .catch((e) => {
    console.log(e);
  });

app.on("on", () => {
  app.listen(3000, () => {
    console.log("rodando");
  });
});
