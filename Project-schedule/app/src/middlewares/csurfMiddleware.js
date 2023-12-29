exports.csurfMiddleware = (err, res, req, next) => {
  if (err) {
    console.log(err);
  }

  next();
};
