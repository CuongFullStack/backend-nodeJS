const user = require("../models/user");

const getUsersAPI = async (req, res) => {
  let results = await user.find({});
  return res.status(200).json({
    errorCode: 0,
    data: results,
  });
};

const postCreateUserAPI = async (req, res) => {
  let { email, name, city } = req.body;
  let user1 = await user.create({
    email,
    name,
    city,
  });
  return res.status(200).json({
    errorCode: 0,
    data: user1,
  });
};

const putUpdateUserAPI = async (req, res) => {
  let { email, name, city, userId } = req.body;
  let user1 = await user.updateOne(
    { _id: userId },
    { name: name, email: email, city: city }
  );
  return res.status(200).json({
    errorCode: 0,
    data: user1,
  });
};

const deleteUserAPI = async (req, res) => {
  const id = req.body.userId;
  let result = await user.deleteOne({ _id: id });
  return res.status(200).json({
    errorCode: 0,
    data: result,
  });
};

module.exports = {
  getUsersAPI,
  postCreateUserAPI,
  putUpdateUserAPI,
  deleteUserAPI,
};
