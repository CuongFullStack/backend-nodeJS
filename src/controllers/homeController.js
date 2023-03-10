const connection = require("../config/database");
const {
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
} = require("../services/CRUDService");

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

const getUpdatePage = async (req, res) => {
  const userId = req.params.id;
  let user = await getUserById(userId);
  res.render("edit.ejs", { userEdit: user });
};

const postUpdateUser = async (req, res) => {
  let { email, name, city, userId } = req.body;
  console.log(
    ">>> email =",
    email,
    "name= ",
    name,
    "city= ",
    city,
    "userId= ",
    userId
  );
  await updateUserById(email, name, city, userId);
  // res.send("Updated user succeed!");
  res.redirect("/");
};

const postDeleteUser = async (req, res) => {
  4;
  const userId = req.params.id;
  let user = await getUserById(userId);
  res.render("delete.ejs", { userEdit: user });
};

const postHandleRemoveUser = async (req, res) => {
  const id = req.body.userId;
  await deleteUserById(id);
  res.redirect("/");
};

module.exports = {
  getHomepage,
  getABC,
  getCuong,
  getCreatePage,
  getUpdatePage,
  postCreateUser,
  postUpdateUser,
  postDeleteUser,
  postHandleRemoveUser,
};
