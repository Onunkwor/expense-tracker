import "./Expense.css";
import ExpenseList from "./ExpenseList.jsx";
import ExpenseFilter from "./ExpenseFilter.jsx";
import Card from "../UI/Card.jsx";
import { useState } from "react";
import ExpensesChart from "./ExpensesChart";
function Expense(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    let eachExpenseDate = new Date(expense.date).getFullYear();
    return eachExpenseDate.toString() === filteredYear;
  });
  const deleteExpense = (expenseId) => {
    props.deleteExpense1(expenseId); 
  };
  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpenseList filter={filteredExpenses} onDeleteHandler={deleteExpense} />
    </Card>
  );
}

export default Expense;
