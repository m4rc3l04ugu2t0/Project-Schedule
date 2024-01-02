require("dotenv").config();
const CONNECTIONSTRING = process.env.CONNECTIONSTRING;

const WebSocket = require("ws");
const express = require("express");
const http = require("http");

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });
const moogose = require("mongoose");
const flash = require("connect-flash");
const session = require("express-session");
// const cookieParse = require("cookie-parser");
// const bodyParser = require("body-parser");
const path = require("path");

const csurf = require("@dr.pogodin/csurf");

const { middlewareGlobal } = require("./src/middlewares/middlewares");
console.log(middlewareGlobal);

const routes = require("./router");
const { json } = require("body-parser");

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
app.set("trust proxy", 1);

// app.use(cookieParse());
// app.use(csurf);
// app.use(csurfMiddleware);
app.use(routes);
app.use(
  session({
    secret: "suaChaveSecreta", // Uma chave secreta para assinar a sessão
    resave: false, // Evitar regravação da sessão se nada mudou
    saveUninitialized: false, // Evitar salvar sessões não inicializadas
  })
);
app.use(middlewareGlobal);
app.use(json);
app.use(flash());

// const sessionOptions = session({
//   secret: "akasdfj0út23453456+54qt23qv  qwf qwer qwer qewr asdasdasda a6()",
//   store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
//   resave: false,
//   saveUninitialized: false,
//   cookie: {
//     path: "/",
//     httpOnly: true,
//     secure: false,
//     maxAge: 1000 * 60 * 60 * 24 * 7,
//   },
// });

moogose
  .connect(CONNECTIONSTRING)
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
