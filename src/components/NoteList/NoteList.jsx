/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React from 'react';
import EditNote from '../EditNote/EditNote';
import DeleteNote from '../DeleteNote/DeleteNote';

function NoteList(props) {
  return (
    <>
      {props.notes.map(note => (
        <div
          className="note"
          style={
            note.isComplete
              ? { backgroundColor: 'lightgreen' }
              : { backgroundColor: 'lightgray' }
          }
        >
          <div className="btn-container">
            <p>{note.title} </p>
            <EditNote
              notes={props.notes}
              setNotes={props.setNotes}
              editMode={props.editMode}
              setEditMode={props.setEditMode}
              setEditableNote={props.setEditableNote}
              isComplete={props.isComplete}
              setIsComplete={props.setIsComplete}
              title={props.title}
              setTitle={props.setTitle}
              noteId={note.id}
            />
            <DeleteNote
              notes={props.notes}
              setNotes={props.setNotes}
              noteId={note.id}
            />
          </div>
        </div>
      ))}
    </>
  );
}

export default NoteList;
