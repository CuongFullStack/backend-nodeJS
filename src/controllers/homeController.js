const connection = require("../config/database");

const getHomepage = (req, res) => {
  return res.render("home.ejs");
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

  // INSERT INTO Users (email, name, city)
  // VALUES ('test', 'cuong', 'Thai Nguyen');

  // connection.query(
  //   `INSERT INTO Users (email, name, city)
  //   VALUES (?, ?, ?)`,
  //   [email, name, city],
  //   function (err, results) {
  //     console.log(results);
  //     res.send("Created user succeed!");
  //   }
  // );

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

module.exports = {
  getHomepage,
  getABC,
  getCuong,
  postCreateUser,
  getCreatePage,
};
