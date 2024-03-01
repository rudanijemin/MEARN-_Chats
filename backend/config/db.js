const mongoose = require("mongoose");
require("dotenv").config();

const connectDb = async () => {
  try {
    const connect = await mongoose
      .connect(process.env.MONGO_URL)
      .then((res) => console.log("MongoDB Connected"))
      .catch((err) => console.log("Error occured", err));
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDb;