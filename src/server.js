require("dotenv").config();
const express = require("express"); //commonjs
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");

const app = express(); //app
const port = process.env.PORT || 8888; //port => hardcode .uat .prod
const hostname = process.env.HOST_NAME;

//config template engine
//config static files: image/css/js
configViewEngine(app);

//Khai báo route
app.use("/v1", webRoutes);
app.use("/v2", webRoutes);

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
