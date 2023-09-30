import React, {useContext} from 'react';
import './TransactionHistory.styles.css';
import Transaction from '../Transaction/Transaction';
import { GlobalContext } from '../context/Globalstate';

 
const TransactionHistory = () => {
const {transactions} = useContext(GlobalContext)
  return (
    <div className="transaction-history">
        <h2>Transaction History</h2>
        <ul className='transactionul'>
          {transactions.map(transaction=>
          (<Transaction key={transaction.id} transaction={transaction}/>)
          )}
              
        </ul>
      </div>
  )
}
export default TransactionHistory