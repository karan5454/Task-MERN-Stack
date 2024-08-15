import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Pie } from 'react-chartjs-2';

const PieChart = ({ month }) => {
  const [chartData, setChartData] = useState(null); // Set initial state to null

  const fetchPieChartData = async () => {
    try {
      const response = await axios.get(`/api/transactions/piechart/${month}`);
      const { categories, itemCounts } = response.data;

      setChartData({
        labels: categories || [],
        datasets: [{
          label: 'Items Count',
          data: itemCounts || [],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        }]
      });
    } catch (error) {
      console.error('Error fetching pie chart data:', error);
      setChartData(null); // In case of error, reset chartData
    }
  };

  useEffect(() => {
    fetchPieChartData();
  }, [month]);

  return (
    <div>
      <h2>Category Pie Chart</h2>
      {chartData ? <Pie data={chartData} /> : <p>No data available</p>}
    </div>
  );
};

export default PieChart;
