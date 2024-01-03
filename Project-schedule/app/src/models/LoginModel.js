const mongoose = require("mongoose");
const validator = require("validator");

const LoginSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const LoginModel = mongoose.model("Login", LoginSchema);

class Login {
  constructor(body) {
    this.body = body;
    this.error = [];
    this.user = null;
  }

  async resgisterUser() {
    try {
      console.log(validator.isEmail(this.body.email));
      this.validate();

      if (this.error.length > 0) return;

      this.user = await LoginModel.create(this.body);
    } catch (error) {
      console.log(error);
    }
  }

  validate() {
    this.cleanUp();

    if (!validator.isEmail(this.body.email)) this.error.push("Email invalido!");

    if (this.body.password < 8 || this.body.password > 50) {
      this.error.push("Numero de caracteres invalido!");
    }
  }

  cleanUp() {
    for (let key in this.body) {
      if (typeof this.body[key] !== String) {
        this.body[key] = "";
      }
    }

    this.body = {
      name: this.body.name,
      email: this.body.email,
      password: this.body.password,
    };
  }
}

module.exports = Login;
