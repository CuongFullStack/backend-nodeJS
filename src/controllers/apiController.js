const user = require("../models/user");
const {
  uploadMultipleFiles,
  uploadSingleFile,
} = require("../services/fileService");

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

const postUploadSingleFileApi = async (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }
  let result = await uploadSingleFile(req.files.image);
  console.log(">>> check result: ", result);
  return res.status(200).json({
    errorCode: 0,
    data: result,
  });
};

const postUploadMultipleFilesAPI = async (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }
  // console.log('>>>check req.files',req.files);
  //upload single => files is an object
  //upload multiple => files is an array
  if (Array.isArray(req.files.image)) {
    //upload multiple
    let result = await uploadMultipleFiles(req.files.image);
    return res.status(200).json({
      errorCode: 0,
      data: result,
    });
  } else {
    //upload single
    return await postUploadSingleFileApi(req, res);
  }
};

module.exports = {
  getUsersAPI,
  postCreateUserAPI,
  putUpdateUserAPI,
  deleteUserAPI,
  postUploadSingleFileApi,
  postUploadMultipleFilesAPI,
};
