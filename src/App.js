import ExpenseItem from "./components/ExpenseItem";

function App() {
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
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
