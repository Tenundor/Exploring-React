import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      title: 'Автомобильная страховка',
      date: new Date(2021, 9, 29),
      amount: 14000
    }, {
      title: 'Туаленая бумага',
      date: new Date(2021, 9, 28),
      amount: 140
    }, {
      title: 'Помидоры Черри',
      date: new Date(2021, 9, 27),
      amount: 1400
    }
  ]
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem 
        title={expenses[0].title} 
        date={expenses[0].date} 
        amount={expenses[0].amount}
      ></ExpenseItem>
      <ExpenseItem 
        title={expenses[1].title} 
        date={expenses[1].date} 
        amount={expenses[1].amount}
      ></ExpenseItem>
      <ExpenseItem 
        title={expenses[2].title} 
        date={expenses[2].date} 
        amount={expenses[2].amount}
      ></ExpenseItem>
    </div>
  );
}

export default App;
