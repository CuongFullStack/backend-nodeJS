const express = require("express");
const {
  getHomepage,
  getABC,
  getCuong,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
  postUpdateUser,
} = require("../controllers/homeController");

const router = express.Router();

//Khai báo route
router.get("/", getHomepage);

router.get("/abc", getABC);

router.get("/cuong", getCuong);

router.get("/create", getCreatePage);

router.get("/update/:id", getUpdatePage);

router.post("/create-user", postCreateUser);

router.post("/update-user", postUpdateUser);

module.exports = router; //export default
