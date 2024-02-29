import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
    // title: "",
    // amount: "",
    // date: "",
  });

  const inputChangeHandler = (identifier, value) => {
    if (identifier === "title") {
      setUserInput((prevState) => {
        return { ...prevState, title: value };
      });
    } else if (identifier === "amount") {
      setUserInput((prevState) => {
        return { ...prevState, amount: value };
      });
    } else {
      setUserInput((prevState) => {
        return { ...prevState, date: value };
      });
    }
  };

  /* const titleChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, title: event.target.value };
    });
  };

  const amountChangeHandler = (event) => {
    // setUserInput({ ...userInput, amount: event.target.value });
    setUserInput((prevState) => {
      return { ...prevState, amount: event.target.value };
    });
  };

  const dateChangeHandler = (event) => {
    // setUserInput({ ...userInput, date: event.target.value });
    setUserInput((prevState) => {
      return { ...prevState, date: event.target.value };
    }); 
  };*/

  const submitHandler = (event) => {
    event.preventDefault();
    // console.log(userInput);
    //Pass data to parent component
    const finalFromData = {
        ...userInput,
        amount: +userInput.amount,
        date: new Date(userInput.date)
    }
    props.onSaveExpenseData(finalFromData);

    setUserInput((prevState) => {
      return {
        ...prevState,
        title: "",
        amount: "",
        date: "",
      };
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          {/* <input type="text" onChange={titleChangeHandler} /> */}
          <input
            type="text"
            value={userInput.title}
            onChange={(event) =>
              inputChangeHandler("title", event.target.value)
            }
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={userInput.amount}
            onChange={(event) =>
              inputChangeHandler("amount", event.target.value)
            }
          />
          {/* <inputonSaveExpenseData
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          /> */}
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={userInput.date}
            onChange={(event) => inputChangeHandler("date", event.target.value)}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
