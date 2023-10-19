import "./NewExpense.css";
import { v4 as uuidv4 } from 'uuid';
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";
const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      id: uuidv4(),
      ...enteredExpenseData,
      
    };
    props.onAddExpenseHandler(expenseData);
    setIsEditing(false);
  };
  const stopEditingHandler = () => {
    setIsEditing(true);
  };
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={stopEditingHandler}>Add New Expense</button>
      )}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseData} onCancel={stopEditingHandler} />}
    </div>
  );
};
export default NewExpense;
