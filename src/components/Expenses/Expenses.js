import { useState } from 'react';

import Card from '../UI/Card';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

import './Expenses.css';

function Expenses(props) {
  const [selectedYear, setYear] = useState('2021');

  const saveFilterYear = (filterYear) => {
    setYear(filterYear);
  }

  const filterExpensesByYear = (expenses, year) => {
    return expenses.filter(expense => expense.date.getFullYear() == year);
  }

  const filteredExpenses = filterExpensesByYear(props.expenses, selectedYear)

  return (
      <Card className="expenses">
        <ExpensesFilter selected={selectedYear} 
        onChangeFilterYear={saveFilterYear}/>
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList expenses={filteredExpenses} />
      </Card>
      );
}

export default Expenses;