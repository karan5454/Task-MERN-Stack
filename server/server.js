const mongoose = require('mongoose');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
require('dotenv').config();

// Define the MongoDB URI (using environment variables or a default value)
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/transaction_dashboard'; // Add the database name here

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log(`MongoDB connected to database: transaction_dashboard`))
.catch(err => console.log(`Error connecting to MongoDB: ${err}`));

// Rest of your server code...

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
