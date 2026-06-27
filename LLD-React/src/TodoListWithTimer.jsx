import React, { useRef, useState, useEffect } from "react";
import "./CSS/todoList.css";
const TodoListWithTimer = () => {
  const [tasks, setTasks] = useState([]);
  const taskInputRef = useRef(null);
  function handleAddTask() {
    if (taskInputRef.current.value.trim() === "") return;
    setTasks([
      ...tasks,
      {
        text: taskInputRef.current.value,
        completed: false,
        elapsedTime: 0,
        isRunning: false,
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
  useEffect(() => {
    const interval = setInterval(() => {
      setTasks((prev) => {
        return prev.map((task) => {
          return task.isRunning
            ? { ...task, elapsedTime: task.elapsedTime + 1 }
            : task;
        });
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  function handleStartTimer(index) {
    setTasks((prev) =>
      prev.map((task, i) => (i === index ? { ...task, isRunning: true } : task))
    );
  }
  function handleResetTimer(index) {
    setTasks((prevTasks) => {
      return prevTasks.map((task, i) => {
        if (i === index) {
          return {
            ...task,
            isRunning: false,
            elapsedTime: 0,
          };
        }
        return task;
      });
    });
  }
  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  }
  function handlePauseTimer(index) {
    setTasks((prev) => {
      prev.map((task, i) => {
        i === index
          ? {
              ...tasks,
              isRunning: false,
            }
          : {
              task,
            };
      });
    });
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
              <span>{formatTime(task.elapsedTime)}</span>
              <div>
                {task.isRunning ? (
                  <button
                    className="pause"
                    onClick={() => handlePauseTimer(index)}
                  >
                    {" "}
                    Pause
                  </button>
                ) : (
                  <button
                    className="start"
                    onClick={() => handleStartTimer(index)}
                  >
                    {" "}
                    Start
                  </button>
                )}

                <button
                  className="reset"
                  onClick={() => handleResetTimer(index)}
                >
                  {" "}
                  Reset
                </button>
                <button
                  className="delete"
                  onClick={() => handleDeleteTask(index)}
                >
                  {" "}
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default TodoListWithTimer;
