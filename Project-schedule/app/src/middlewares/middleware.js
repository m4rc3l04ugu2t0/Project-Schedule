exports.middlewareGlobal = (req, res, next) => {
  res.locals.errorLogin = req.flash("errorLogin");
  res.locals.success = req.flash("success");
  res.locals.errors = req.flash("errors");
  next();
};
