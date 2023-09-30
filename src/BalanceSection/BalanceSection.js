import React, {useContext} from 'react';
import './BalanceSection.styles.css';
import { GlobalContext } from '../context/Globalstate';


const BalanceSection = () => {
  const {transactions} = useContext(GlobalContext)

  let Income = transactions
    .filter(transaction => transaction.transactionType === 'Income')
    .reduce((acc, transaction) => acc + transaction.amount, 0).toFixed(2);
    
  let Expenses = transactions
    .filter(transaction => transaction.transactionType === 'Expenses')
    .reduce((acc, transaction) => acc + transaction.amount, 0).toFixed(2);
    
  let balance = (Income - Expenses).toFixed(2);
    

  return (
    <div className="balance">
    <h2>Balance: ₦{balance}</h2>
  </div>
  )
}

export default BalanceSection