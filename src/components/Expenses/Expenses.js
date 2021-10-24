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
        <ExpenseItem 
            title={props.expenses[0].title} 
            date={props.expenses[0].date} 
            amount={props.expenses[0].amount}
        ></ExpenseItem>
        <ExpenseItem 
            title={props.expenses[1].title} 
            date={props.expenses[1].date} 
            amount={props.expenses[1].amount}
        ></ExpenseItem>
        <ExpenseItem 
            title={props.expenses[2].title} 
            date={props.expenses[2].date} 
            amount={props.expenses[2].amount}
        ></ExpenseItem>
      </Card>
      )
}

export default Expenses;