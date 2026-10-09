import React, { useState } from "react";
import TodoItem from "./TodoItem";
import "./todo.css";

const Todo = () => {
  const [todo, setTodo] = useState([
    { id: 1, text: "Learn React", completed: false },
  ]);
  const [temp, setTemp] = useState("");
  function handleInput(e) {
    const t = e.target.value;
    setTemp(t);
  }
  function handleAdd() {
    if (temp.trim() === "") return;
    setTodo((prev) => {
      return [
        ...prev,
        {
          id: Date.now(),
          text: temp,
          completed: false,
        },
      ];
    });

    setTemp("");
  }

  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      <input
        className="text-input "
        type="text"
        placeholder="Enter Todo"
        onChange={handleInput}
        value={temp}
      />
      <button className="add-button" onClick={handleAdd}>
        Add
      </button>
      {todo.map((item, index) => {
        return (
          <TodoItem key={item.id} item={item} setTodo={setTodo} todo={todo} />
        );
      })}
    </div>
  );
};

export default Todo;
