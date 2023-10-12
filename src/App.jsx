import "./App.css";
import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";
const App = () => {
  const expense = [
    {
      id: "el",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "New Tv",
      amount: 294.12,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
  ];
  return (
    <div>
      <h3>Lets get started</h3>
      <NewExpense />
      <Expense items={expense} />
    </div>
  );
}

export default App;
