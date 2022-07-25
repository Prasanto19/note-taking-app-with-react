/* eslint-disable react/prop-types */
import React from 'react';

function Form(props) {
  const noteCreateHandler = event => {
    event.preventDefault();
    if (props.title.trim()) {
      const newNote = {
        id: Date.now(),
        title: props.title,
        isComplete: true,
      };
      props.setNotes([newNote, ...props.notes]);
      props.setTitle('');
      props.setIsComplete(false);
    } else {
      props.setTitle('');
      var msg = 'Sorry! Your note is Empty!';
      msg += '\n';
      msg += 'Please Check again! ';
      alert(msg);
    }
  };

  const updateHandler = event => {
    event.preventDefault();
    if (props.title.trim()) {
      const newNotes = props.notes.map(note => {
        if (note.id === props.editableNote.id) {
          note.title = props.title;
          note.isComplete = true;
        }
        return note;
      });
      props.setNotes(newNotes);
      props.setEditMode(false);
      props.setTitle('');
      props.setIsComplete(false);
    } else {
      props.setTitle('');
      var msg = 'Sorry! Your note is Empty!';
      msg += '\n';
      msg += 'Please Check again! ';
      alert(msg);
    }
  };
  return (
    <div className="note-form">
      <form
        onSubmit={event =>
          props.editMode ? updateHandler(event) : noteCreateHandler(event)
        }
      >
        <input
          onChange={event => props.setTitle(event.target.value)}
          type="text"
          value={props.title}
          name=""
          id=""
          placeholder="Write your note here"
        />
        <button type="submit">
          {props.editMode ? 'Update Note' : 'Add note'}
        </button>
      </form>
    </div>
  );
}

export default Form;
