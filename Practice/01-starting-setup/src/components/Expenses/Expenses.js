import { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
/* const EXPENSES = [
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
]; */
function Expenses(props) {
  /* const [expenses, setExpenses] = useState(EXPENSES);

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
  } */

  // Start of Derived / Computed State concept
  const [filteredYear, setFilteredYear] = useState("2020");

  let filterInfoText = "2019, 2021 & 2022";

  if (filteredYear === "2019") {
    filterInfoText = "2020, 2021 & 2022";
  } else if (filteredYear === "2021") {
    filterInfoText = "2019, 2020 & 2022";
  } else {
    filterInfoText = "2019, 2020 & 2021";
  }

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  })
  // end of Derived / Computed State concept

  return (
    <Card className="expenses">
      {/* <ExpenseItem expenses={expenses} changeTitleHandler={changeTitle} /> */}
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
        />
      <p style={{color: 'white'}}>Date for years {filterInfoText} is hidden.</p>
      {filteredExpenses.length === 0 && <p style={{color: 'white'}}>No expenses found.</p>}
        {filteredExpenses.length > 0 && filteredExpenses.map((item) => {
          return(<ExpenseItem id={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />)
        })}
      {/* <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      /> */}
    </Card>
  );
}

export default Expenses;
