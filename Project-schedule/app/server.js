const express = require("express");
const http = require("http");
const WebSocket = require("ws");
const mongoose = require("mongoose");
const flash = require("connect-flash");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const path = require("path");
// const helmet = require("helmet");
const dotenv = require("dotenv");

dotenv.config();

const CONNECTIONSTRING = process.env.CONNECTIONSTRING;

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

const { middlewareGlobal } = require("./src/middlewares/middleware");
const csrfMiddleware = require("./src/middlewares/csurfMiddleware");
const routes = require("./router");

// app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  "/public",
  express.static(path.resolve(__dirname, "public"), {
    "Content-Type": "application/javascript",
  })
);

app.use(
  session({
    secret: "suaChaveSecreta",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(flash());

app.set("views", path.resolve(__dirname, "src", "views", "page"));
app.set("view engine", "ejs");
app.disable("x-powered-by");
app.use(cookieParser());
app.use(middlewareGlobal);
app.use(csrfMiddleware);
app.use(routes);

mongoose
  .connect(CONNECTIONSTRING)
  .then(() => {
    console.log("Conectado ao banco de dados");
    app.listen(3000, () => {
      console.log("Servidor rodando na porta 3000");
    });
  })
  .catch((err) => {
    console.error("Erro ao conectar ao banco de dados:", err);
  });
