exports.csurfMiddleware = (err, res, req, next) => {req.csrfToken()
  req.csrfToken();
  if (err) {
    console.log(err);
  }

  next();
};
