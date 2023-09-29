import './AddTransaction.styles.css';
const AddTransaction = ({addTransaction, text, setText, amount, setAmount,transactionType, settransactionType }) => {
  return (
    <div className="transaction-form">
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
          id="expenses"
          name="transactionType"
          value="expenses"
          checked={transactionType === 'expenses'}
          onChange={(e) => settransactionType(e.target.value)}
        />
        <label htmlFor="expenses">Expenses</label>
      
        <input
          type="radio"
          id="income"
          name="transactionType"
          value="income"
          checked={transactionType === 'income'}
          onChange={(e) => settransactionType(e.target.value)}
        />
     <label htmlFor="expenses">Income</label>
        <button onClick={addTransaction}>Add Transaction</button>
      </div>
  )
}

export default AddTransaction