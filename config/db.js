const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const connectDB = async () => {
  
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Database Connected: Successs`);
  } catch (error) {
    console.log(error);
  }

}

module.exports = connectDB;
