import React, { useState } from "react";
import "./App.css";
import reportWebVitals from "./reportWebVitals";
import Todos from "./components/Todos";
import Todo from "./models/todo";
import NewTodo from "./components/NewTodo";

function App() {
  reportWebVitals(console.log);
  console.log(process.env);

  const [todoList, setTodoList] = useState<Todo[]>([]);
  // const todoList = [new Todo("Learn React"), new Todo("Learn TypeScript")];
  // const apiUrl = process.env.REACT_APP_API_ENDPOINT;

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodoList( (prevTodo) => {
      return prevTodo.concat(newTodo);
    })
  }

  const removeTodoHandler = (todoId: string) => {
    setTodoList((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId)
    })
  }

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler}/>
      <Todos items={todoList} onRemoveTodo={removeTodoHandler}/>
    </div>
    // <div>
    //   <p>API URL: {apiUrl}</p>
    // </div>
  );
}

export default App;
