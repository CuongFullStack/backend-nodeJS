require("dotenv").config();
const express = require("express"); //commonjs
const path = require("path");
// import express from "express"; // é modules

// console.log(">> check env", process.env);

const app = express(); //app
const port = process.env.PORT || 8888; //port => hardcode .uat .prod
const hostname = process.env.HOST_NAME;

//config template engine
app.set("views", path.join(__dirname, "views")); // Cú pháp path.join(__dirname,...) tìm các file trong views
app.set("view engine", "ejs");

//config static files: image/css/js
app.use(express.static(path.join(__dirname, "public")));

//Khai báo route
app.get("/", (req, res) => {
  res.send("Hello World! nodemon");
});

app.get("/abc", (req, res) => {
  res.send("check ABC");
});

app.get("/cuong", (req, res) => {
  // res.send("<h1>cuong hoc backend</h1>");
  res.render("sample.ejs");
});

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
