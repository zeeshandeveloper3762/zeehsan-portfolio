const mongoose = require("mongoose");

const connectDB = async (DATABASEURL) => {
  const DB_OPTIONS = {
    dbname: "portfolio",
  };
  const data = await mongoose.connect(DATABASEURL, DB_OPTIONS);
  if (data) {
    console.log("database connection seccessfully ...");
  }
};

module.exports = connectDB;
