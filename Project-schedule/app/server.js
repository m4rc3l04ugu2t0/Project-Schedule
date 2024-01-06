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
const cookieParse = require("cookie-parser");
const bodyParser = require("body-parser");
const path = require("path");
const helmet = require("helmet");

// const csurf = require("@dr.pogodin/csurf");
// const csrfProtection = csurf({ cookie: true });

const { middlewareGlobal } = require("./src/middlewares/middleware");
const csrfMiddleware = require("./src/middlewares/csurfMiddleware");

const routes = require("./router");

app.use(helmet());
// app.use(csrfProtection);
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
    secret: "suaChaveSecreta", // Uma chave secreta para assinar a sessão
    resave: false, // Evitar regravação da sessão se nada mudou
    saveUninitialized: false, // Evitar salvar sessões não inicializadas
  })
);
app.use(flash());

app.set("views", path.resolve(__dirname, "src", "views", "page"));
app.set("view engine", "ejs");
// app.set("trust proxy", 1);

app.disable("x-powered-by");
app.use(cookieParse());
// app.use(csurfMiddleware);

app.use(middlewareGlobal);
app.use(csrfMiddleware);

app.use(routes);

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
  .connect(CONNECTIONSTRING || 3000)
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
