exports.middlewareGlobal = (req, res, next) => {
  console.log(req.errors);
  res.locals.errors = req.flash("errors");
  next();
};
