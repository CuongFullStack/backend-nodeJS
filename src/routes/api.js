const express = require("express");

const routerAPI = express.Router();

const { getUsersAPI } = require("../controllers/apiController");

//Khai báo router
routerAPI.get("/", (req, res) => {
  res.send("hello word with apis");
});

routerAPI.get("/users", getUsersAPI);

module.exports = routerAPI; //export default
