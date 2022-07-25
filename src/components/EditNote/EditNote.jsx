/* eslint-disable react/prop-types */
import React from 'react';

function EditNote(props) {
  const editHandler = noteId => {
    const toBeEditedNote = props.notes.find(note => note.id === noteId);
    props.setIsComplete((toBeEditedNote.isComplete = false));
    props.setEditMode(true);
    props.setEditableNote(toBeEditedNote);
    props.setTitle(toBeEditedNote.title);
  };
  return (
    <button onClick={() => editHandler(props.noteId)} className="edit">
      Edit
    </button>
  );
}

export default EditNote;
