const user = require("../models/user");

const getUsersAPI = async (req, res) => {
  let results = await user.find({});
  return res.status(200).json({
    errorCode: 0,
    data: results,
  });
};

module.exports = { getUsersAPI };
