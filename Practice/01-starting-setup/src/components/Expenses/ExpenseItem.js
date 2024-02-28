import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import {useState} from 'react';

function ExpenseItem({ expenses, changeTitleHandler }) {
  // const [title, setTitle] = useState(expenses);
  // const changeTitleHandler = (id) => {
  //   setTitle('Updated!!');
  //   // console.log("Call " + even);
  // };
  return (
    <>
      {expenses.map((item) => {
        return (
          <Card className="expense-item" key={item.id}>
            <ExpenseDate date={item.date}/>
            <div className="expense-item__description">
              <h2>{item.title}</h2>
              <div className="expense-item__price">${item.amount}</div>
            </div>
            <button onClick={() => changeTitleHandler(item.id)}>Change Title</button>
          </Card>
        );
      })}
    </>
  );
}

export default ExpenseItem;
