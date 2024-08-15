import React, { useState } from 'react';
import Table from './components/Table';
import Statistics from './components/Statistics';
import BarChart from './components/BarChart';
import PieChart from './components/PieChart';
import './styles.css'; 

const App = () => {
  const [month, setMonth] = useState('March');

  return (
    <div>
      <h1>Transactions Dashboard</h1>
      
      <label htmlFor="month">Select Month: </label>
      <select id="month" value={month} onChange={(e) => setMonth(e.target.value)}>
        <option value="January">January</option>
        <option value="February">February</option>
        <option value="March">March</option>
        <option value="April">April</option>
        <option value="May">May</option>
        <option value="June">June</option>
        <option value="July">July</option>
        <option value="August">August</option>
        <option value="September">September</option>
        <option value="October">October</option>
        <option value="November">November</option>
        <option value="December">December</option>
      </select>

      <Statistics month={month} />
      <Table />
      <BarChart month={month} />
      <PieChart month={month} />
    </div>
  );
};

export default App;
