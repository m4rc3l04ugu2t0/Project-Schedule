exports.middlewareGlobal = (req, res, next) => {
  console.log("middle");
  next();
};
