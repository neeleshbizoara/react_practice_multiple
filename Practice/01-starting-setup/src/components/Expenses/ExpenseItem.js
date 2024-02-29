import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import { useState } from "react";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  const changeTitleHandler = (id) => {
    setTitle('Updated!!');
    // console.log("Call " + even);
  };

  // const [title, setTitle] = useState(props.title);
  console.log("ExpenseItem evaluated by React");
  const changeHandler = () => {
    setTitle("Updated!");
    console.log(title);
  };
  return (
    <li>
      <Card className="expense-item" key={props.id}>
        <ExpenseDate date={props.date} />
        
        <div className="expense-item__description">
          <h2>{title} - {props.id}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        <button onClick={changeHandler}>Change Title</button>
      </Card>
    </li>
  );
}

export default ExpenseItem;
