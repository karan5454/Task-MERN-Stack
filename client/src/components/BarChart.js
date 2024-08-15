import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';

const BarChart = ({ month }) => {
  const [chartData, setChartData] = useState(null); // Set initial state to null

  const fetchBarChartData = async () => {
    try {
     // const response = await axios.get(`/api/transactions/barchart/${month}`);
     const response = await axios.get(`/api/transactions/barchart/${month}`);

      const { priceRanges, itemCounts } = response.data;

      setChartData({
        labels: priceRanges || [],
        datasets: [{
          label: 'Items Count',
          data: itemCounts || [],
          backgroundColor: 'rgba(75, 192, 192, 0.6)',
        }]
      });
    } catch (error) {
      console.error('Error fetching bar chart data:', error);
      setChartData(null); // In case of error, reset chartData
    }
  };

  useEffect(() => {
    fetchBarChartData();
  }, [month]);

  return (
    <div>
      <h2>Price Range Bar Chart</h2>
      {chartData ? <Bar data={chartData} /> : <p>No data available</p>}
    </div>
  );
};

export default BarChart;
