import React, { useRef } from "react";

const CreateForm = ({ handleCancel, handleSaveNote, editingNote }) => {
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);

    function handleCreate() {
        const title = titleRef.current.value;
        const description = descriptionRef.current.value;
        handleSaveNote(title, description, editingNote?.id);
    }

    return (
        <div className="modal">
            <div className="modal-content">

                <div className="heading-section">
                    <h4 className="title">{!editingNote ? "Create Note" : "Edit Note"}</h4>
                </div>

                <input
                    ref={titleRef}
                    type="text"
                    placeholder="Enter your Title"
                    className="title-input"
                    defaultValue={editingNote ? editingNote.title : ""}
                />

                <br />

                <input
                    ref={descriptionRef}
                    type="text"
                    placeholder="Enter your Description"
                    className="description-input"
                    defaultValue={editingNote ? editingNote.description : ""}
                />

                <div className="button-container">
                    <button
                        className="cancel-button"
                        onClick={handleCancel}
                    >
                        Cancel
                    </button>

                    <button
                        className="create-button"
                        onClick={handleCreate}
                    >
                        {editingNote ? "Update" : "Create"}
                    </button>
                </div>

            </div>
        </div>
    );
};

export default CreateForm;