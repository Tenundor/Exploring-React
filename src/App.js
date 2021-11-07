import { useState } from 'react'

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const INITIAL_EXPENSES = [
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

  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
