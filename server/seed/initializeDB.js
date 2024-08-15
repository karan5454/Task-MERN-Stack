const axios = require('axios');
const Transaction = require('../models/Transaction');

const initializeDB = async () => {
    try {
        const { data } = await axios.get('https://s3.amazonaws.com/roxiler.com/product_transaction.json');
        await Transaction.insertMany(data);
        console.log('Database initialized with seed data');
    } catch (error) {
        console.error('Error initializing database:', error);
    }
};

module.exports = initializeDB;
