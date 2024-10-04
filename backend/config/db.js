const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) { 
    console.log(`Error: ${error.message}`)
    process.exit(); // Exit with a non-zero status code to indicate an error
  }
};

module.exports = connectDB;