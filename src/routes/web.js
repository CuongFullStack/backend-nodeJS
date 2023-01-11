const express = require("express");
const {
  getHomepage,
  getABC,
  getCuong,
  postCreateUser,
  getCreatePage,
} = require("../controllers/homeController");

const router = express.Router();

//Khai báo route
router.get("/", getHomepage);

router.get("/abc", getABC);

router.get("/cuong", getCuong);

router.get("/create", getCreatePage);

router.post("/create-user", postCreateUser);

module.exports = router; //export default
