import { useState } from 'react';

import Card from '../UI/Card';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import ExpenseItem from "./ExpenseItem";

import './Expenses.css';

function Expenses(props) {
  const [selectedYear, setYear] = useState('2019');

  const saveFilterYear = (filterYear) => {
    console.log('filterYear', filterYear)
    setYear(filterYear);
  }

  return (
      <Card className="expenses">
        <ExpensesFilter selected={selectedYear} 
        onChangeFilterYear={saveFilterYear}/>
        {props.expenses.map( (expense) => (
          <ExpenseItem key={expense.id} title={expense.title} date={expense.date} amount={expense.amount} />
        ))}
      </Card>
      );
}

export default Expenses;