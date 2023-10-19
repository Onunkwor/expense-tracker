import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const onclickHandler = () => {
    props.deleteExpenseHandler(props.id); // Use props.id to delete the expense
    
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button className="expense-item__delete" onClick={onclickHandler}>
          Delete
        </button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
