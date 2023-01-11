require("dotenv").config();
const express = require("express"); //commonjs
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const connection = require("./config/database");

const app = express(); //app express
const port = process.env.PORT || 8888; //port => hardcode .uat .prod
const hostname = process.env.HOST_NAME;

// config req.body
app.use(express.json()); //utilizes the body-parser package
app.use(express.urlencoded({ extended: true }));

//config template engine
//config static files: image/css/js
configViewEngine(app);

//Khai báo route
app.use("/", webRoutes);
app.use("/v2", webRoutes);

// simple query
// connection.query("select * from Users u", function (err, results, fields) {
//   // console.log(err);
//   console.log(">>>results=", results); // results contains rows returned by server
// });

const simpleQuery = async () => {
  const [results, fields] = await connection.query(`select * from Users u`);
  console.log(">>>check results: ", results);
};
simpleQuery();

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
