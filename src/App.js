import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const DUMMY_EXPENSES = [
  { id: 'e1', 
    title: "Car Insurance", 
    amount: 284.23, 
    date: new Date(2023, 4, 4)
  },
  { id: 'e2', 
    title: "TV", 
    amount: 23.23, 
    date: new Date(2023, 4, 2)
  },
  { id: 'e3', 
    title: "Toilet Paper", 
    amount: 15.22, 
    date: new Date(2023, 4, 3)
  },
  { id: 'e4', 
    title: "News paper", 
    amount: 5.20, 
    date: new Date(2023, 4, 1)
  },
];


const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [expenses, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
