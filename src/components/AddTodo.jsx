import React, { useState } from "react";
import addIcon from "../assets/icons/add.svg";
import { db } from "../firebase";

export const AddTodo = () => {
  const [input, setInput] = useState("");

  const onAddTodo = (e) => {
    e.preventDefault();
    if (input) {
      db.collection("todos").add({
        name: input,
        completed: false,
      });
    } else {
      alert("Input can't be blank");
    }
    setInput("");
  };

  return (
    <div>
      <form onSubmit={onAddTodo} className="todo-list__add-todo">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Your todo goes here..."
        />
        <button className="todo-list__add-todo-button" type="submit">
          <img className="icon" src={addIcon} alt="add" />
        </button>
      </form>
    </div>
  );
};
