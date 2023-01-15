const mongoose = require("mongoose");

//shape data
const customerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    address: String,
    phone: String,
    email: String,
    image: String,
    description: String,
  },
  { timestamps: true } // createdAt, updatedAt
);

const Customer = mongoose.model("customers", customerSchema);

module.exports = Customer;
