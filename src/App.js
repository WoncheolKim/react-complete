import React from 'react';

import Expenses from './components/Expenses/Expenses';

const App = () => {
  const expenses = [
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
    
  ]
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
