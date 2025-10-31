// /server/seeder.js

const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Part = require('./models/partModel');
const sampleParts = require('./sampleParts'); // Our data file

// Load .env variables
dotenv.config();

// Connect to MongoDB
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

// --- MODIFIED IMPORT FUNCTION ---
const importData = async () => {
  try {
    // 1. Check if parts already exist
    const count = await Part.countDocuments();
    
    if (count > 0) {
      console.log('Data already exists! ⚠️  Skipping import.');
      console.log('To force a re-import, run "npm run data:destroy" first.');
      process.exit();
    }

    // 2. Insert the sample parts
    await Part.insertMany(sampleParts);

    console.log('Data Imported Successfully! ✅');
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

// Function to destroy data (remains the same)
const destroyData = async () => {
  try {
    // Clear all parts
    await Part.deleteMany();
    
    console.log('Data Destroyed! ❌');
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

// --- SCRIPT LOGIC ---

(async () => {
  await connectDB();

  // Check command-line arguments to see what to do
  if (process.argv[2] === '-d') {
    await destroyData();
  } else {
    await importData();
  }
})();