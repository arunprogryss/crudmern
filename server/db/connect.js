const mongoose = require("mongoose");

const connectDB = (url) => {
  console.log("connected successfuly");
  mongoose.connect(url);
};

module.exports = connectDB;
