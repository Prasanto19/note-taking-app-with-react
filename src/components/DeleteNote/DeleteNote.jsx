/* eslint-disable react/prop-types */
import React from 'react';

function DeleteNote(props) {
  const noteDeleteHandler = noteId => {
    props.setNotes(props.notes.filter(note => note.id !== noteId));
  };
  return (
    <button onClick={() => noteDeleteHandler(props.noteId)} className="delete">
      Delete
    </button>
  );
}

export default DeleteNote;
