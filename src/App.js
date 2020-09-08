import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import { AddTodo } from "./components/AddTodo";
import { Todo } from "./components/Todo";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    db.collection("todos").onSnapshot((snapshot) =>
      setTodos(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
    );
  }, []);

  return (
    <div className="todo-list">
      <div className="todo-list__header">
        <h4>Todolist</h4>
      </div>
      <AddTodo />
      <div className="todo-list__items">
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
}

export default App;
