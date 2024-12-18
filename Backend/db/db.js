require("dotenv").config();
const mongoose = require("mongoose");

exports.dbConnect = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("DB connection successful ");
    })
    .catch((err) => {
      console.log(err);
    });
};
