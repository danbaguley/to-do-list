import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]); // Holds the list of tasks

  return (
    <div>
      <h1>To-Do List</h1>
      <TodoForm />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
