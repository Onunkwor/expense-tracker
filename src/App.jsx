import "./App.css";
import { useState, useEffect } from "react";
import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const localData = localStorage.getItem("expenses")
    ? JSON.parse(localStorage.getItem("expenses"))
    : [];
  const [expenses, setExpenses] = useState(localData); 

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  const deleteExpenseFromLocalStorage = (expenseId) => {
    const idToDelete = expenseId;
    const updatedExpenses = expenses.filter(
      (expense) => expense.id !== idToDelete
    );
    setExpenses(updatedExpenses); // Update the state with the deleted item removed
    localStorage.setItem("expenses", JSON.stringify(updatedExpenses));
  };

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  return (
    <div>
      <h3>Lets get started</h3>
      <NewExpense onAddExpenseHandler={addExpenseHandler} />
      <Expense
        items={expenses}
        deleteExpense1={deleteExpenseFromLocalStorage}
      />
    </div>
  );
};

export default App;
