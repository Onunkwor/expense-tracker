import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";
const ExpensesList = (props) => {
  let filteredList = props.filter;
  
  const deleteExpense = (expenseId) => {
    props.onDeleteHandler(expenseId);
  };
  if (filteredList.length === 0) {
    return <h2 className="expense-list_fallback">Found no expenses.</h2>;
  }
  return (
    <ul className="expenses-list">
      {filteredList.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          id ={expense.id}
          deleteExpenseHandler={deleteExpense}
        />
      ))}
    </ul>
  );
};
export default ExpensesList;
