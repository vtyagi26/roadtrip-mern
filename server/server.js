// Ensure dotenv runs first to load all environment variables
const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const connectDB = require('./config/db');
const tripRoutes = require('./routes/trips');
const userRoutes = require('./routes/users');
const cors = require('cors');

// Connect to MongoDB
connectDB();

const app = express();

app.use(express.json()); // Middleware for parsing JSON bodies
app.use(cors());

// API Routes - This is where your backend defines the paths
app.use('/api/trips', tripRoutes);
app.use('/api/users', userRoutes); // This correctly sets up /api/users/...

app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});