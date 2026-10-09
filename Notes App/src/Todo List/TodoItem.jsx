import React from "react";
import "./todo.css";

const TodoItem = ({ item, setTodo, todo }) => {
  const { text, id, completed } = item;
  function handleDelete(id) {
    const updatedList = todo.filter((i) => i.id !== id);
    setTodo(updatedList);
  }
  function handleToggle(id) {
    setTodo((prev) => {
      return prev.map((item, i) => {
        return item.id === id ? { ...item, completed: !item.completed } : item;
      });
    });
  }
  return (
    <div className="todo-item">
      <div>
        <input
          type="checkbox"
          className="checkbox"
          checked={completed}
          onChange={() => handleToggle(id)}
        />
        <span className={`${completed ? "strike" : ""}`}> {text}</span>
      </div>
      <button className="delete-button" onClick={() => handleDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
