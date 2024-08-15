const Transaction = require('../models/Transaction');

// Fetch all transactions with search and pagination
const getAllTransactions = async (req, res) => {
    const { page = 1, perPage = 10, search = '' } = req.query;
    const regex = new RegExp(search, 'i');
    
    const transactions = await Transaction.find({
        $or: [{ title: regex }, { description: regex }, { price: regex }]
    }).skip((page - 1) * perPage).limit(Number(perPage));
    
    res.json(transactions);
};

// Statistics API
const getStatistics = async (req, res) => {
    const { month } = req.params;
    const transactions = await Transaction.find({ dateOfSale: { $regex: month, $options: 'i' } });
    const totalSold = transactions.filter(t => t.sold).length;
    const totalNotSold = transactions.length - totalSold;
    const totalSaleAmount = transactions.reduce((acc, t) => acc + (t.sold ? t.price : 0), 0);
    
    res.json({ totalSaleAmount, totalSold, totalNotSold });
};

// Bar Chart API
const getBarChart = async (req, res) => {
    // Logic for bar chart API...
};

// Pie Chart API
const getPieChart = async (req, res) => {
    // Logic for pie chart API...
};

// Combined API
const combineApis = async (req, res) => {
    // Logic for combined API...
};

module.exports = {
    getAllTransactions,
    getStatistics,
    getBarChart,
    getPieChart,
    combineApis
};
