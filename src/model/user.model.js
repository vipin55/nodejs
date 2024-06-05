const mongoose = require("mongoose");
const crypto = require("crypto");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  role: {
    type: String,
    default: "user",
    enum: ["user", "admin"],
  },
  hashed_passwrod: {
    type: String,
  },
  salt: String,
});
UserSchema.virtual("password")
  .set(function (password) {
    console.log("Password is:", password);
    this._password = password;
    this.salt = this.makeSalt();
    console.log("Salt is:", this.salt);
    this.hashed_passwrod = this.encryptPassword(password);
    console.log("Hashed password is:", this.hashed_passwrod);
  })
  .get(function () {
    return this._password;
  });
UserSchema.methods = {
  makeSalt: function () {
    return Math.round(new Date().valueOf() * Math.random());
  },
  encryptPassword: function (password) {
    return crypto.createHmac("sha1", this.salt).update(password).digest("hex");
  },
  authenticate: function (password) {
    return this.encryptPassword(password) === this.hashed_passwrod;
  },
};
let User = mongoose.model("User", UserSchema);
module.exports = User;
