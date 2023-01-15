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
module.exports = {
  createCustomerService,
};
