const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    default: "",
  },
  email: {
    type: String,
    default: "",
  },
  password: {
    type: String,
    default: "",
  },
  phoneNumber: {
    type: String,
    require: true,
  },
  isPhonenumberVerified: {
    type: String,
    default: "",
  },
  isEmailVerified: {
    type: String,
    default: "",
  },
  token: {
    type: String,
    default: "",
  },
  dateCreate: {
    type: String,
    default: "",
  },
});

module.exports = mongoose.model("User", userSchema);
