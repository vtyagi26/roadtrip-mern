// 1. Import Dependencies
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

// 2. Initialize Express App
const app = express();

// 3. Connect to Database
connectDB();

// 4. Initialize Middleware
app.use(cors());
app.use(express.json()); // This allows us to accept JSON data in the request body

// 5. Create a simple test route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// 6. Define Routes (We will uncomment this later)
 app.use('/api/trips', require('./routes/trips'));
 app.use('/api/users', require('./routes/users'));

// 7. Set up the port and start the server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});