import React from 'react'
import './index.css'
const Notes = ({ id, title, description, handleDelete, handleEdit }) => {
    return (
        <div id={id} className="note-container">
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="button-container">
                <button onClick={() => handleEdit(id)} className="button">Edit</button>
                <button onClick={() => handleDelete(id)} className="button">Delete</button>
            </div>
        </div>
    )
}

export default Notes
