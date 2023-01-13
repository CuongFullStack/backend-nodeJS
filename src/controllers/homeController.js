const connection = require("../config/database");
const {
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
} = require("../services/CRUDService");
const user = require("../models/user");

const getHomepage = async (req, res) => {
  let results = await user.find({});
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
  await user.create({
    email,
    name,
    city,
  });
  res.send("Created user succeed!");
};

const getCreatePage = (req, res) => {
  res.render("create.ejs");
};

const getUpdatePage = async (req, res) => {
  const userId = req.params.id;
  let user1 = await user.findById(userId).exec();
  res.render("edit.ejs", { userEdit: user1 });
};

const postUpdateUser = async (req, res) => {
  let { email, name, city, userId } = req.body;
  await user.updateOne(
    { _id: userId },
    { name: name, email: email, city: city }
  );
  res.redirect("/");
};

const postDeleteUser = async (req, res) => {
  const userId = req.params.id;
  let user1 = await user.findById(userId).exec();
  res.render("delete.ejs", { userEdit: user1 });
};

const postHandleRemoveUser = async (req, res) => {
  const id = req.body.userId;
  let result = await user.deleteOne({ _id: id });
  console.log(">>> result: ", result);
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
