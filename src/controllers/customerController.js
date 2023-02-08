const {
  createCustomerService,
  createArrayCustomerService,
  getAllCustomersService,
  updateOneCustomerService,
  deleteACustomerService,
  deleteArrayCustomerService,
} = require("../services/customerService");
const { uploadSingleFile } = require("../services/fileService");
const aqp = require("api-query-params");
const Joi = require("joi");

module.exports = {
  postCreateCustomer: async (req, res) => {
    let { name, address, phone, email, description } = req.body;

    //Nên định nghĩa trong file khác
    const schema = Joi.object({
      name: Joi.string().alphanum().min(3).max(30).required(),
      address: Joi.string(),
      phone: Joi.string().pattern(new RegExp("^[Z0-9]{8,11}$")),
      email: Joi.string().email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
      }),
      description: Joi.string(),
    });
    // const result = schema.validate(req.body, { abortEarly: false });
    const { error } = schema.validate(req.body, { abortEarly: false }); // abortEarly false sẽ cho hiện tất cả lỗi validate

    if (error) {
      return res.status(200).json({
        msg: error,
      });
    } else {
      let imageUrl = "";

      if (!req.files || Object.keys(req.files).length === 0) {
        //do nothing
      } else {
        let result = await uploadSingleFile(req.files.image);
        imageUrl = result.path;
      }
      let customerData = {
        name,
        address,
        phone,
        email,
        description,
        image: imageUrl,
      };
      let customer = await createCustomerService(customerData);
      return res.status(200).json({
        errorCode: 0,
        data: customer,
      });
    }
  },

  postCreateArrayCustomer: async (req, res) => {
    let customers = await createArrayCustomerService(req.body.customers);
    if (customers) {
      return res.status(200).json({
        errorCode: 0,
        data: customers,
      });
    } else {
      return res.status(200).json({
        errorCode: -1,
        data: customers,
      });
    }
  },

  getAllCustomers: async (req, res) => {
    console.log(req.query);
    let limit = req.query.limit;
    let page = req.query.page;
    let name = req.query.name;
    let result = null;

    if (limit && page) {
      result = await getAllCustomersService(limit, page, name, req.query);
    } else {
      result = await getAllCustomersService();
    }
    return res.status(200).json({
      errorCode: 0,
      data: result,
    });
  },

  putUpdateOneCustomer: async (req, res) => {
    let { userId, name, address, phone, email, description } = req.body;
    let result = await updateOneCustomerService(
      userId,
      name,
      address,
      phone,
      email,
      description
    );
    return res.status(200).json({
      errorCode: 0,
      data: result,
    });
  },

  deleteACustomer: async (req, res) => {
    let id = req.body.id;
    let result = await deleteACustomerService(id);
    return res.status(200).json({
      errorCode: 0,
      data: result,
    });
  },

  deleteArrayCustomer: async (req, res) => {
    let ids = req.body.id;
    // console.log(">>>check ids", req.body);
    let result = await deleteArrayCustomerService(ids);
    return res.status(200).json({
      errorCode: 0,
      data: result,
    });
  },
};
