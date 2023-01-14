const mongoose = require("mongoose");

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

const Customer = mongoose.model("user", customerSchema);

module.exports = Customer;
