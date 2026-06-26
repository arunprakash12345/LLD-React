import React, { useRef, useState } from "react";
import "./CSS/todoList.css";
const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const taskInputRef = useRef(null);
  function handleAddTask() {
    if (taskInputRef.current.value.trim() === "") return;
    setTasks([
      ...tasks,
      {
        text: taskInputRef.current.value,
        completed: false,
      },
    ]);
    taskInputRef.current.value = "";
  }
  function handleDeleteTask(index) {
    const tas = tasks.filter((_, i) => i != index);
    setTasks(tas);
  }
  function handleCompleted(index) {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  }
  return (
    <>
      <h1>Todo List App</h1>
      <input type="text" placeholder="Add a new task" ref={taskInputRef} />
      <button onClick={handleAddTask}>Add Task</button>
      {tasks.length === 0 ? (
        <p>No tasks added yet</p>
      ) : (
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              <input type="checkbox" onClick={() => handleCompleted(index)} />
              <span
                style={{
                  textDecoration: task.completed ? "line-through" : "none",
                }}
              >
                {task.text}
              </span>
              {"   "}
              <button onClick={() => handleDeleteTask(index)}> Delete</button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default TodoList;
