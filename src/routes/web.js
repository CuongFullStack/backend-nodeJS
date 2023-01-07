const express = require("express");

const router = express.Router();

//Khai báo route
router.get("/", (req, res) => {
  res.send("Hello World! nodemon");
});

router.get("/abc", (req, res) => {
  res.send("check ABC");
});

router.get("/cuong", (req, res) => {
  // res.send("<h1>cuong hoc backend</h1>");
  res.render("sample.ejs");
});

module.exports = router; //export default
