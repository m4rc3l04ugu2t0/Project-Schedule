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

      console.log(this.error.length);
      if (this.error.length > 0) return;

      this.user = await LoginModel.create(this.body);
    } catch (error) {
      console.log(error);
    }
  }

  validate() {
    this.cleanUp();

    if (!validator.isEmail(this.body.email)) this.error.push("Email invalido!");

    if (this.body.password.length < 8 || this.body.password.length > 50) {
      this.error.push("Numero de caracteres invalido!");
    }
  }

  cleanUp() {
    for (let key in this.body) {
      // Removendo a verificação do tipo
      this.body[key] = this.body[key].trim();
    }

    this.body = {
      name: this.body.name,
      email: this.body.email,
      password: this.body.password,
    };
  }
}

module.exports = Login;
