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

const postCreateUser = (req, res) => {
  console.log(">>>req.body: ", req.body);
  res.send("create a new user");
};

module.exports = {
  getHomepage,
  getABC,
  getCuong,
  postCreateUser,
};
