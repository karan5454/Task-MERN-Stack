import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Statistics = ({ month }) => {
  const [statistics, setStatistics] = useState({
    totalSaleAmount: 0,
    totalSold: 0,
    totalNotSold: 0
  });

  const fetchStatistics = async () => {
    try {
      const response = await axios.get(`/api/transactions/statistics/${month}`);
      setStatistics(response.data || {
        totalSaleAmount: 0,
        totalSold: 0,
        totalNotSold: 0
      });
    } catch (error) {
      console.error('Error fetching statistics:', error);
      setStatistics({
        totalSaleAmount: 0,
        totalSold: 0,
        totalNotSold: 0
      });
    }
  };

  useEffect(() => {
    fetchStatistics();
  }, [month]);

  return (
    <div>
      <h2>Transactions Statistics</h2>
      <p>Total Sale Amount: ${statistics.totalSaleAmount}</p>
      <p>Total Sold Items: {statistics.totalSold}</p>
      <p>Total Not Sold Items: {statistics.totalNotSold}</p>
    </div>
  );
};

export default Statistics;
