import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random(),
    };
    props.onAddExpense(expenseData);
    console.log("In New Expense");
    console.log(expenseData);
  };

  return (
    <>
      <div className="new-expense">
        {!isEditing && (
          <button onClick={() => setIsEditing(true)}>Add New Expense</button>
        )}
        {isEditing && (
          <ExpenseForm
            onSaveExpenseData={saveExpenseDataHandler}
            onCancel={() => setIsEditing(false)}
          />
        )}
      </div>
    </>
  );
};

export default NewExpense;
