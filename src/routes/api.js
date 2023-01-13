const express = require("express");

const routerAPI = express.Router();

const {
  getUsersAPI,
  postCreateUserAPI,
} = require("../controllers/apiController");

//Khai báo router
routerAPI.get("/users", getUsersAPI);

routerAPI.post("/users", postCreateUserAPI);

module.exports = routerAPI; //export default
