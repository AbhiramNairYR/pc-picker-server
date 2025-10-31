// Main server + Database connection
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');

// Load env vars
dotenv.config();

// --- Database Connection (Combined) ---
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

connectDB();
// --- End DB Connection ---

const app = express();

// Body parser
app.use(express.json());

// ✅ Enable CORS for your frontend URL
app.use(
  cors({
    origin: "https://pc-picker-frontend.onrender.com",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// Alternative: allow localhost for development
// app.use(
//   cors({
//     origin: ["http://localhost:5173", "https://pc-picker-frontend.onrender.com"],
//     credentials: true,
//   })
// );

// Mount the API router
app.use('/api', require('./routes/api'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
