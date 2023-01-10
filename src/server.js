require("dotenv").config();
const express = require("express"); //commonjs
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const mysql = require("mysql2");

const app = express(); //app express
const port = process.env.PORT || 8888; //port => hardcode .uat .prod
const hostname = process.env.HOST_NAME;

//config template engine
//config static files: image/css/js
configViewEngine(app);

//Khai báo route
app.use("/v1", webRoutes);
app.use("/v2", webRoutes);

//test connection
//create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  port: 3307, // default port 3306
  user: "root", // default password: empty
  password: "123456",
  database: "hoidanit",
});

// simple query
connection.query("select * from Users u;", function (err, results, fields) {
  console.log(">>>results=", results); // results contains rows returned by server
  console.log(">>>fields=", fields); // fields contains extra meta data about results, if available
});

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
