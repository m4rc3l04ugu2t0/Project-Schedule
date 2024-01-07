const csurf = require("@dr.pogodin/csurf");
const csrfProtection = csurf({ cookie: true });

function csrfMiddleware(req, res, next) {
  // Adiciona a proteção CSRF a todas as rotas
  csrfProtection(req, res, (err) => {
    if (err && err.code === "EBADCSRFTOKEN") {
      // Token CSRF inválido
      return res.status(403).send("Invalid CSRF token");
    }

    res.locals.csrfToken = req.csrfToken();
    // Continua para o próximo middleware
    next();
  });
}

module.exports = csrfMiddleware;
