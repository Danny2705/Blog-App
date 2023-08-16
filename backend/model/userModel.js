const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String },
});

UserSchema.statics.signup = async function (username, email, password) {
  //validation
  if (!email || !password || !username) {
    throw new Error("All fields are required");
  }
  if (!validator.isEmail(email)) {
    throw new Error("Invalid email");
  }
  // if (!validator.isStrongPassword(password)) {
  //   throw new Error("Password is not strong enough");
  // }

  const exists = await this.findOne({ email });

  if (exists) {
    throw new Error("User already exists");
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const user = await this.create({
    username,
    email,
    password: hashedPassword,
    salt: salt,
  });

  return user.save();
};

UserSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw new Error("All fields are required");
  }

  const user = await this.findOne({ email });

  if (!user) {
    throw new Error("Incorrect email");
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Incorrect password");
  }
  return user;
};

const UserModel = mongoose.model("User", UserSchema);
module.exports = UserModel;
