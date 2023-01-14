const path = require("path");
const express = require("express");

const configViewEngine = (app) => {
  //config template engine
  // console.log(">>>check__dirname:", __dirname);
  app.set("views", path.join("./src", "views")); // Cú pháp path.join(__dirname,...) tìm các file trong views
  app.set("view engine", "ejs");

  //config static files: image/css/js (Tìm các file trong views)
  app.use(express.static(path.join("./src", "public")));
};

module.exports = configViewEngine;
