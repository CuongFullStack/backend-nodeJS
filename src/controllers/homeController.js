const getHomepage = (req, res) => {
  //process data
  //call model
  res.send("Hello World! nodemon");
};

const getABC = (req, res) => {
  res.send("check ABC");
};

const getCuong = (req, res) => {
  // res.send("<h1>cuong hoc backend</h1>");
  res.render("sample.ejs");
};

module.exports = {
  getHomepage,
  getABC,
  getCuong,
};
