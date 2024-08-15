import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Table = () => {
  const [transactions, setTransactions] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchTransactions = async () => {
    try {
      const response = await axios.get(`/api/transactions`, {
        params: { search, page }
      });
      setTransactions(response.data.transactions || []); // Ensure transactions is always an array
      setTotalPages(response.data.totalPages || 1); // Default to 1 if not available
    } catch (error) {
      console.error('Error fetching transactions:', error);
      setTransactions([]); // Reset to an empty array in case of an error
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, [search, page]);

  return (
    <div>
      <h2>Transactions Table</h2>
      <input 
        type="text" 
        placeholder="Search transactions..." 
        value={search}
        onChange={(e) => setSearch(e.target.value)} 
      />
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Date of Sale</th>
            <th>Sold</th>
          </tr>
        </thead>
        <tbody>
          {transactions.length > 0 ? (
            transactions.map((transaction) => (
              <tr key={transaction._id}>
                <td>{transaction.title}</td>
                <td>{transaction.description}</td>
                <td>{transaction.price}</td>
                <td>{new Date(transaction.dateOfSale).toLocaleDateString()}</td>
                <td>{transaction.sold ? 'Yes' : 'No'}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No transactions found</td>
            </tr>
          )}
        </tbody>
      </table>
      <div>
        <button 
          disabled={page <= 1}
          onClick={() => setPage(page - 1)}>Previous</button>
        <button 
          disabled={page >= totalPages}
          onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </div>
  );
};

export default Table;
