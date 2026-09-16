import React from 'react'
import './index.css';
export default function EmptyState({ handleCreate }) {
  return (
    <div className="empty-state">
      <h4 className="empty-title">No notes available</h4>
      <button className="create-button" onClick={handleCreate}>+ Create new task</button>
    </div>
  )
}