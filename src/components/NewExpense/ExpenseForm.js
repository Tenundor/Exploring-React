import './ExpenseForm.css';

const ExpenseForm = () => {
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Наименование</label>
          <input type="text" />
        </div>
        <div className="new-expense__control">
          <label>Стоимость</label>
          <input type="number" min="0.01" step="0.01"/>
        </div>
        <div className="new-expense__control">
          <label>Дата</label>
          <input type="date" min="2019-01-01" max="2022-12-31"/>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Добавить</button>
        </div>
      </div>
    </form> 
  )
}

export default ExpenseForm;