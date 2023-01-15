const Customer = require("../models/customer");
const createCustomerService = async (customerData) => {
  try {
    let results = await Customer.create({
      name: customerData.name,
      address: customerData.address,
      phone: customerData.phone,
      email: customerData.email,
      description: customerData.description,
      image: customerData.image,
    });
    return results;
  } catch (err) {
    console.log(">>>err", err);
    return null;
  }
};
const createArrayCustomerService = async (arr) => {
  try {
    let result = await Customer.insertMany(arr);
    return result;
  } catch (err) {
    console.log("error >>>>", err);
    return null;
  }
};

const getAllCustomersService = async () => {
  try {
    let result = await Customer.find({});
    return result;
  } catch (err) {
    console.log("error >>>>", err);
    return null;
  }
};

const updateOneCustomerService = async (
  userId,
  name,
  address,
  phone,
  email,
  description
) => {
  try {
    let result = await Customer.updateOne(
      { _id: userId },
      {
        name: name,
        address: address,
        phone: phone,
        email: email,
        description: description,
      }
    );
    return result;
  } catch (err) {
    console.log("error >>>", err);
    return null;
  }
};

const deleteACustomerService = async (id) => {
  try {
    let result = await Customer.deleteById(id);
    return result;
  } catch (err) {
    console.log("error >>>", err);
    return null;
  }
};

module.exports = {
  createCustomerService,
  createArrayCustomerService,
  getAllCustomersService,
  updateOneCustomerService,
  deleteACustomerService,
};
