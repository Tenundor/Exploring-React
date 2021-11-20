import { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const textChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    };

    props.onSaveExpenseData(expenseData);

    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Наименование</label>
          <input type="text" value={enteredTitle} 
          onChange={textChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Стоимость</label>
          <input type="number" value={enteredAmount} 
          min="0.01" step="0.01" onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Дата</label>
          <input type="date" value={enteredDate} 
          min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
        </div>
        <div className="new-expense__actions">
          <button>Отменить</button>
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={props.onCancel}>Отменить</button>
          <button type="submit">Добавить</button>
        </div>
      </div>
    </form> 
  )
}

export default ExpenseForm;