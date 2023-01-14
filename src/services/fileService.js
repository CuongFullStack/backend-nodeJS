const path = require("path");

const uploadSingleFile = async (fileObject) => {
  //save => public/images/upload (Định nghĩa đường link muốn lưu)
  //remember to create the upload folder first
  let uploadPath = path.resolve(__dirname, "../public/images/upload");
  // console.log(">>> check fileObject: ", uploadPath);

  // abc.png => abc-timestamp.png
  // ---->
  //get image extension
  let extName = path.extname(fileObject.name);
  //get image's name(without extension)
  let baseName = path.basename(fileObject.name, extName);
  //create final path: eg: /upload/your-image.png
  let finalName = `${baseName}-${Date.now()}${extName}`;
  let finalPath = `${uploadPath}/${finalName}`;

  // Use the mv() method to place the file somewhere on your server
  try {
    await fileObject.mv(finalPath);
    return {
      status: "success",
      path: finalName,
      error: null,
    };
  } catch (err) {
    console.log(">>> check error: ", err);
    return {
      status: "failed",
      path: null,
      error: JSON.stringify(err),
    };
  }
};

const uploadMultipleFiles = async (fileArr) => {
  try {
    let uploadPath = path.resolve(__dirname, "../public/images/upload");
    let resultArr = [];
    let countSuccess = 0;

    //Lặp và upload từng file
    for (let i = 0; i < fileArr.length; i++) {
      //get image extension
      let extName = path.extname(fileArr[i].name);
      //get image's name(without extension)
      let baseName = path.basename(fileArr[i].name, extName);
      //create final path: eg: /upload/your-image.png
      let finalName = `${baseName}-${Date.now()}${extName}`;
      let finalPath = `${uploadPath}/${finalName}`;

      // Use the mv() method to place the file somewhere on your server
      try {
        await fileArr[i].mv(finalPath);
        resultArr.push({
          status: "success",
          path: finalName,
          fileName: fileArr[i].name,
          error: null,
        });
        countSuccess++;
      } catch (err) {
        resultArr.push({
          status: "failed",
          path: null,
          fileName: fileArr[i].name,
          error: JSON.stringify(err),
        });
      }
    }

    return {
      countSuccess: countSuccess,
      detail: resultArr,
    };
  } catch (err) {
    console.log(">>> Error: ", err);
  }
};

module.exports = {
  uploadSingleFile,
  uploadMultipleFiles,
};
