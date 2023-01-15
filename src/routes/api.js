const express = require("express");
const routerAPI = express.Router();
const {
  getUsersAPI,
  postCreateUserAPI,
  putUpdateUserAPI,
  deleteUserAPI,
  postUploadSingleFileApi,
  postUploadMultipleFilesAPI,
} = require("../controllers/apiController");
const {
  postCreateCustomer,
  postCreateArrayCustomer,
} = require("../controllers/customerController");

//Khai báo router
routerAPI.get("/users", getUsersAPI);
routerAPI.post("/users", postCreateUserAPI);
routerAPI.put("/users", putUpdateUserAPI);
routerAPI.delete("/users", deleteUserAPI);

routerAPI.post("/file", postUploadSingleFileApi);
routerAPI.post("/files", postUploadMultipleFilesAPI);

routerAPI.post("/customers", postCreateCustomer);
routerAPI.post("/customers-many", postCreateArrayCustomer);

module.exports = routerAPI; //export default
