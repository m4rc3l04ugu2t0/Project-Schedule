exports.middlewareGlobal = (req, res, next) => {
  // console.log("midle", req.flash("errors"));

  res.locals.errors = req.flash("errors");
  next();
};
