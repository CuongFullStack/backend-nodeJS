const connection = require("../config/database");
const { getAllUsers } = require("../services/CRUDService");

const getHomepage = async (req, res) => {
  let results = await getAllUsers();
  return res.render("home.ejs", { listUsers: results });
};

const getABC = (req, res) => {
  res.send("check ABC");
};

const getCuong = (req, res) => {
  // res.send("<h1>cuong hoc backend</h1>");
  res.render("sample.ejs");
};

const postCreateUser = async (req, res) => {
  let { email, name, city } = req.body;
  console.log(">>> email =", email, "name= ", name, "city= ", city);

  const [results, fields] = await connection.query(
    `INSERT INTO Users (email, name, city)
  VALUES (?, ?, ?)`,
    [email, name, city]
  );
  console.log(">>>check results: ", results);
  res.send("Created user succeed!");
};

const getCreatePage = (req, res) => {
  res.render("create.ejs");
};

const getUpdatePage = (req, res) => {
  const userId = req.params.id;
  console.log(">>> req.params::", req.params, userId);
  return res.render("edit.ejs", {});
};

module.exports = {
  getHomepage,
  getABC,
  getCuong,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
};
