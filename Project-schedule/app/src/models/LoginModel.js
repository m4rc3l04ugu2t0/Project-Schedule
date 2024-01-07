const mongoose = require("mongoose");
const validator = require("validator");
const { hash, compare } = require("bcrypt");
const { randomInt } = require("node:crypto");
const { use } = require("../../router");

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
    this.validate();

    if (this.error.length > 0) return;

    const emailExists = await this.checkEmailExists();

    if (emailExists) {
      this.error.push("E-mail já cadastrado!");
      return;
    }

    const randomSalt = randomInt(10, 16);
    const passwordHash = await hash(this.body.password, randomSalt);
    this.body.password = passwordHash;
    this.user = await LoginModel.create(this.body);
  }

  async checkUserExists() {
    const emailExists = await this.checkEmailExists();

    if (!emailExists) {
      this.error.push("Email não cadastrado!");
    }

    await compare(this.user.password, hash, (err, result) => {
      if (err) {
        this.error.push("Senha invalida!");
      }
    });
  }

  async checkEmailExists() {
    const user = await LoginModel.findOne({ email: this.body.email });
    return user !== null;
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
