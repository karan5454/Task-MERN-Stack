const express = require('express');
const { getAllTransactions, getStatistics, getBarChart, getPieChart, combineApis } = require('../controllers/transactionController');
const router = express.Router();

// Route to initialize database
router.get('/init', async (req, res) => {
    const initializeDB = require('../seed/initializeDB');
    await initializeDB();
    res.send('Database initialized');
});

// Route to get all transactions
router.get('/', getAllTransactions);

// Route for statistics
router.get('/statistics/:month', getStatistics);

// Route for bar chart
router.get('/barchart/:month', getBarChart);

// Route for pie chart
router.get('/piechart/:month', getPieChart);

// Combined API
router.get('/combined/:month', combineApis);

module.exports = router;
