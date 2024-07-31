import React, { useState } from 'react';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  const handleAddExpense = () => {
    if (amount && description && category) {
      const newExpense = {
        amount,
        description,
        category,
      };
      setExpenses([...expenses, newExpense]);
      setAmount('');
      setDescription('');
      setCategory('');
    }
  };

  return (
    <div className="App">
      <h1>Daily Expenses Tracker</h1>
      <div>
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="" disabled>Select category</option>
          <option value="Food">Food</option>
          <option value="Petrol">Petrol</option>
          <option value="Salary">Salary</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Other">Other</option>
        </select>
        <button onClick={handleAddExpense}>Add Expense</button>
      </div>
      <h2>Expenses</h2>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            {expense.amount} - {expense.description} ({expense.category})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
