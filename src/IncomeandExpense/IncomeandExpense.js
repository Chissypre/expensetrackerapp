import './IncomeandExpense.styles.css';
import React, {useContext} from 'react';
import { GlobalContext } from '../context/Globalstate';


const IncomeandExpense = () => {
  const {transactions} = useContext(GlobalContext)
  const Income = transactions
    .filter(transaction => transaction.transactionType === 'Income')
    .reduce((acc, transaction) => acc + transaction.amount, 0).toFixed(2);
    
  const Expenses = transactions
    .filter(transaction => transaction.transactionType === 'Expenses')
    .reduce((acc, transaction) => acc + transaction.amount, 0).toFixed(2);
  return (
  
    <div className="incomeexpense">
  <section className='box incomebox'>
    <div className="box-content">
      <h2>Income</h2>
      <p>₦{Income}</p>
    </div>
    <div className="box-icon">
      <i className="fas fa-dollar-sign"></i> 
    </div>
  </section>

  <section className='box expensebox'>
    <div className="box-content">
      <h2>Expenses</h2>
      <p>₦{Expenses}</p>
    </div>
    <div className="box-icon">
      <i className="fas fa-shopping-cart"></i> 
    </div>
  </section>
</div>

  )
}

export default IncomeandExpense