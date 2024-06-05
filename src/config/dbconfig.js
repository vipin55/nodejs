const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
module.exports.MongoConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Database connection established");
  } catch (err) {
    console.log(err.message);
  }
};
