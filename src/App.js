import { useState } from 'react'

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const initialExpenses = [
    {
      id: 1,
      title: 'Автомобильная страховка',
      date: new Date(2021, 9, 29),
      amount: 14000
    }, {
      id: 2,
      title: 'Туаленая бумага',
      date: new Date(2021, 9, 28),
      amount: 140
    }, {
      id: 3,
      title: 'Помидоры Черри',
      date: new Date(2021, 9, 27),
      amount: 1400
    }
  ]

  const [expenses, setExpenses] = useState(initialExpenses);

  const addExpenseHandler = expense => {
    console.log('In App.js');
    console.log('expense', expense);
    setExpenses([...expenses, expense]);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
