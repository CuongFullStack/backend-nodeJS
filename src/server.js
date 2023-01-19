require("dotenv").config();
const express = require("express"); //commonjs
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const apiRoutes = require("./routes/api");
const connection = require("./config/database");
const fileUpload = require("express-fileupload");
const { MongoClient } = require("mongodb");

const app = express(); //app express
const port = process.env.PORT || 8888; //port => hardcode .uat .prod
const hostname = process.env.HOST_NAME;

//config file upload
// default options
app.use(fileUpload());

// config req.body
app.use(express.json()); //utilizes the body-parser package
app.use(express.urlencoded({ extended: true }));

//config template engine
//config static files: image/css/js
configViewEngine(app);

// Khai báo route
app.use("/", webRoutes);
app.use("/v1/api", apiRoutes);

(async () => {
  //Test connection
  try {
    // using monggoose
    // await connection();

    //using mongodb driver
    // Connection URL
    const url = process.env.DB_HOST_WITH_DRIVER;
    const client = new MongoClient(url);
    const dbName = process.env.DB_NAME;
    await client.connect();
    console.log("Connected successfully to server");

    const db = client.db(dbName);
    const collection = db.collection("customers");

    // collection.insertOne({ name: "Hoi Dan IT" });
    // collection.insertOne({ address: "ha noi", email: "hoidanit@gmail.com" });
    // collection.insertOne({ test: [1, 2, 3] });
    let a = await collection.findOne({ address: "ha noi" });
    console.log(">>> find = ", a);

    app.listen(port, hostname, () => {
      console.log(`Backend zero app listening on port ${port}`);
    });
  } catch (error) {
    console.log(">>> Error connect to DB: ", error);
  }
})();
