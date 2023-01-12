const mongoose = require("mongoose");

//shape data
const kittySchema = new mongoose.Schema({
  name: String,
  ////
});

const kitten = mongoose.model("kitten", kittySchema);

module.exports = kitten;
