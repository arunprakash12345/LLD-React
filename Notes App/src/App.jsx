import { useState, useEffect } from 'react'
import './App.css'
import EmptyState from './EmptyState'
import CreateForm from './CreateForm'
import Notes from './Notes'

function App() {
  const [notes, setNotes] = useState(() => {
    return JSON.parse(localStorage.getItem("notes")) || [];
  });
  const [editingNote, setEditingNote] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  function handleCreate() {
    setOpenModal(true);
  }

  function handleCancel() {
    setOpenModal(false);
    setEditingNote(null);
  }

  function handleSaveNote(title, description, id) {
    if (!title.trim() || !description.trim()) return;
    if (id) {
      setNotes(prev =>
        prev.map(note =>
          note.id === id ? { ...note, title, description } : note
        )
      );
    } else {
      const newNote = { id: Date.now(), title, description };
      setNotes(prev => [...prev, newNote]);
    }
    setOpenModal(false);
    setEditingNote(null);
  }

  function handleDelete(id) {
    const updatedList = notes.filter((note) => note.id !== id);
    setNotes(updatedList);
  }

  function handleEdit(id) {
    const targetNote = notes.find((note) => note.id === id);
    setEditingNote(targetNote);
    setOpenModal(true);
  }

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);


  return (
    <>
      <div className="notes-container">
        <h1>Notes App</h1>
        {
          notes.length === 0 ? <EmptyState handleCreate={handleCreate} /> : notes.map((note) => {
            return <Notes key={note.id} {...note} handleDelete={handleDelete} handleEdit={handleEdit} />
          })
        }
        <button className="create-button" onClick={handleCreate}>+ Create new task</button>
      </div>
      {
        openModal && <CreateForm editingNote={editingNote} handleCancel={handleCancel} handleSaveNote={handleSaveNote} />
      }
    </>
  )
}

export default App
