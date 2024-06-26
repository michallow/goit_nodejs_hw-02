// db.js
const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/contactsDB';

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
