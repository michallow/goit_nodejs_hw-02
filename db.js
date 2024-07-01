// db.js
const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://michallow92:Chomiczek.123@cluster0.srpn9bm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log('Database connection successful');
  } catch (error) {
    console.error('Database connection error:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
