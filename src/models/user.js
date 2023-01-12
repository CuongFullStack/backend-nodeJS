const mongoose = require("mongoose");
const { updateUserById } = require("../services/CRUDService");

//shape data
const userSchema = new mongoose.Schema({
  // _id: uuid, //Tự tạo
  name: String,
  email: String,
  city: String,
  ////
});

const user = mongoose.model("user", userSchema);

module.exports = user;
