import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

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
      <NewExpense />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
