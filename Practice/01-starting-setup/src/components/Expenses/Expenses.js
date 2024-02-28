import { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
const EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
function Expenses() {
  const [expenses, setExpenses] = useState(EXPENSES);

  function changeTitle(id) {
    setExpenses((prev) => {
      return prev.map((item) => {
        if (item.id === id) {
          return { ...item, title: "New Title" };
        } else {
          return item;
        }
      });
    });
  }
  return (
    <Card className="expenses">
      <ExpenseItem expenses={expenses} changeTitleHandler={changeTitle} />
    </Card>
  );
}

export default Expenses;
