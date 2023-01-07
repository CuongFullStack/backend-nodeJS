const express = require("express");
const {
  getHomepage,
  getABC,
  getCuong,
} = require("../controllers/homeController");

const router = express.Router();

//Khai báo route
router.get("/", getHomepage);

router.get("/abc", getABC);

router.get("/cuong", getCuong);

module.exports = router; //export default
