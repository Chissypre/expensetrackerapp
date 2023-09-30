

import BalanceSection from './BalanceSection/BalanceSection';
import IncomeandExpense from './IncomeandExpense/IncomeandExpense'
import AddTransaction from './AddTransaction/AddTransaction';
import TransactionHistory from './TransactionHistory/TransactionHistory';


import './App.css';

import { GlobalProvider } from './context/Globalstate';

function App() {
  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <GlobalProvider>
      <BalanceSection/>
      <IncomeandExpense/>
      <AddTransaction/>
      <TransactionHistory/>
      </GlobalProvider>
    </div>
  );
}

export default App;
