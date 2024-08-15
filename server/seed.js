const mongoose = require('mongoose');
const Transaction = require('./models/Transaction'); // Assuming you have a Transaction model

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/transaction_dashboard', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected...');
}).catch(err => console.log(err));

// Seed data
const seedData = [
  {
    title: 'Laptop',
    description: 'A powerful gaming laptop',
    price: 1500,
    dateOfSale: new Date(),
    sold: true
  },
  {
    title: 'Smartphone',
    description: 'A new generation smartphone',
    price: 900,
    dateOfSale: new Date(),
    sold: false
  },
  {
    title: 'Tablet',
    description: 'Lightweight and powerful',
    price: 600,
    dateOfSale: new Date(),
    sold: true
  }
];

// Insert seed data
Transaction.insertMany(seedData)
  .then(() => {
    console.log('Data seeded successfully');
    mongoose.connection.close();
  })
  .catch((error) => {
    console.log('Error seeding data:', error);
  });
