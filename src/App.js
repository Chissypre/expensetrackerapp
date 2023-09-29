
import React, { useState } from 'react';
import AddTransaction from './AddTransaction/AddTransaction';
import './App.css';


function App() {
  const [transactions, setTransactions] = useState([]);
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  const [transactionType, settransactionType] = useState('expenses');

  const addTransaction = () => {
    if (text === '' || amount === 0) return; 
    const id = transactions.length ? transactions[transactions.length - 1].id + 1 : 1;
    const newTransaction = {
      id: id,
      text,
      amount: +amount,

    };

    setTransactions([...transactions, newTransaction]);
    setText('');
    setAmount('');
    
    if (transactionType === "income") {
      setIncome(income + newTransaction.amount);
    } else {
      setExpenses(expenses + newTransaction.amount);
    }
  };
  let balance = income - expenses;


  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <div className="balance">
        <h2>Balance: ₦{(balance)}</h2>
      </div>
      <div className="balance">
        <h2>Income: ₦{income}</h2>
        <h2>Expenses: ₦{(expenses)}</h2>
      </div>
      <AddTransaction 
      addTransaction={addTransaction}
      transactionType={transactionType}
      settransactionType={settransactionType}
      amount={amount}
      setAmount={setAmount}
      text={text}
      setText={setText}
      />
       <div className="transaction-history">
        <h2>Transaction History</h2>
        <ul className='transactionul'>
          {transactions.map((transaction) => (
            <li className='transactionli' key={transaction.id}>
             <span>{transaction.text} (₦{transaction.amount})</span> 
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
