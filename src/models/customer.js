const mongoose = require("mongoose");
const { updateUserById } = require("../services/CRUDService");

//shape data
const customerSchema = new mongoose.Schema(
  {
    // _id: uuid, //Tự tạo
    name: { type: String, required: true },
    address: String,
    phone: String,
    email: String,
    image: String,
    description: String,
  },
  { timestamps: true } // createdAt, updatedAt
);

const Customer = mongoose.model("user", ustomerSchema);

module.exports = Customer;
