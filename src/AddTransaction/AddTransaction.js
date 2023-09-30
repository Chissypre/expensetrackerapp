import React, { useState, useContext } from 'react';
import './AddTransaction.styles.css';
import { GlobalContext } from '../context/Globalstate';

const AddTransaction = () => {
const [text, setText] = useState('');
const [amount, setAmount] = useState('');
const [transactionType, settransactionType] = useState('Expenses');
const { addTransaction} = useContext(GlobalContext)
 const onSubmit = e => {
  e.preventDefault();
  const newTransaction = {
    id:Math.floor(Math.random() * 100000000),
    text,
    amount: +amount,
    transactionType
  }
  addTransaction(newTransaction)
 }
 
  return (
    <>
    <div className="transaction-form">
    <h2>Add New Income or Expences</h2>
    <form  onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Enter Transaction"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
       <input
          type="radio"
          name="transactionType"
          value="Expenses"
          checked={transactionType === 'Expenses'}
          onChange={(e) => settransactionType(e.target.value)}
        /><label  className="red"
        htmlFor="Expenses">Expenses</label>
      
        <input
          type="radio"
          name="transactionType"
          value="Income"
          checked={transactionType === 'Income'}
          onChange={(e) => settransactionType(e.target.value)}
        /><label className='green' htmlFor="Income">Income</label>

        <button>Add Transaction</button>

      </form>
      </div>
      </>
  )
}

export default AddTransaction