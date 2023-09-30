import React, {useContext} from 'react';
import './Transaction.styles.css'
import { FaTrashAlt } from 'react-icons/fa';
import { GlobalContext } from '../context/Globalstate';
const Transaction = ({transaction}) => {
  const {deleteTransaction} = useContext(GlobalContext)
  
  
  return (
    <li className={`transactionli ${transaction.transactionType === 'Expenses' ? 'red' : 'green'}`}>
    {transaction.text} ₦{transaction.amount}
    <FaTrashAlt
       role="button"
       tabIndex="0" 
       onClick={()=>deleteTransaction(transaction.id)}  
   />
   </li>
  )
}

export default Transaction