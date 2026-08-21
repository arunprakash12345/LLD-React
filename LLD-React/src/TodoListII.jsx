import React, { useState, useEffect } from 'react';
import './CSS/todoListII.css'
const TodoListII = () => {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState("");
    const [isEdit, setIsEdit] = useState(false);
    const [editIndex, setEditIndex] = useState(null);

    function handleInputChange(e) {
        const value = e.target.value;
        setTask(value);
    }

    function handleCancel() {
        setTask("");
        setIsEdit(false);
        setEditIndex(null);
    }

    function handleSubmit() {
        if (!task.trim()) return;
        const updatedList = [...tasks, task];
        setTasks(updatedList);
        setTask("");
    }
    function handleEdit(index) {
        setIsEdit(true);
        setEditIndex(index);
        const editTodo = tasks[index];
        setTask(editTodo);
        console.log(editTodo);
    }

    function handleUpdate() {
        if (!task.trim()) return;
        const updatedTasks = tasks.map((todo, currentIndex) => {
            if (currentIndex === editIndex) {
                return task;
            }
            return todo;
        });

        setTasks(updatedTasks);
        setTask("");
        setIsEdit(false);
        setEditIndex(null);
    }


    function handleDelete(index) {
        const udpatedList = tasks.filter((task, i) => {
            return i !== index;
        });
        setTasks(udpatedList);
    }

    return (
        <div className="todo-List">
            <input value={task} name="task" className="task-input" placeholder="Enter your todo..." onChange={handleInputChange} />
            <div className="button-container">
                {isEdit && <button onClick={handleUpdate}>Update</button>}
                {!isEdit && <button onClick={handleSubmit}>Submit</button>}
                <button onClick={handleCancel} className="cancel">Cancel</button>
            </div>

            {
                tasks.map((tempTask, index) => {
                    return (
                        <div className="todo-item" data-key={index} key={index}>
                            <p>{tempTask}
                            </p>
                            <div className="button-container">
                                <button onClick={() => handleDelete(index)} className="delete">Delete</button>
                                <button onClick={() => handleEdit(index)} className="edit">Edit</button>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    );
}

export default TodoListII;