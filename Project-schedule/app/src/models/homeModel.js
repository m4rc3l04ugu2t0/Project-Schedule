const mongoose = require("mongoose");

const HomeSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  userEmail: { type: String, required: true },
  userPassword: { type: String, required: true },
});

const HomeModel = mongoose.model("Home", HomeSchema);

module.exports = HomeModel;
