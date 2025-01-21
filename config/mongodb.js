require("dotenv").config({ path: "./config/.env" });
const mongoose = require("mongoose");

async function connDB() {
  mongoose.connect(process.env.MONGODB_URL);
}

module.exports = connDB;
