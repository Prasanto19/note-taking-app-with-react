/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [editableNote, setEditableNote] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const noteCreateHandler = event => {
    event.preventDefault();
    if (title) {
      const newNote = {
        id: Date.now(),
        title: title,
        isComplete: false,
      };
      setNotes([newNote, ...notes]);
      setTitle('');
    } else {
      alert('You can not enter empty string');
    }
  };

  const noteDeleteHandler = noteId => {
    setNotes(notes.filter(note => note.id !== noteId));
  };

  const editHandler = noteId => {
    const toBeEditedNote = notes.find(note => note.id === noteId);
    setEditMode(true);
    setEditableNote(toBeEditedNote);
    setTitle(toBeEditedNote.title);
  };
  const updateHandler = event => {
    event.preventDefault();
    const newNotes = notes.map(note => {
      if (note.id === editableNote.id) note.title = title;
      return note;
    });
    setNotes(newNotes);
    setEditMode(false);
    setTitle('');
  };
  /*
   note = {
      id:Date.now(),
      title: 'title-1',
      isComplete:false,
   }
   */
  return (
    <div className="App">
      <form
        onSubmit={event =>
          editMode ? updateHandler(event) : noteCreateHandler(event)
        }
      >
        <input
          onChange={event => setTitle(event.target.value)}
          type="text"
          value={title}
          name=""
          id=""
          placeholder="Write your note here"
        />
        <button type="submit">{editMode ? 'Update Note' : 'Add note'}</button>
      </form>
      <ul>
        {notes.map(note => (
          <li>
            <span>{note.title} </span>
            <button onClick={() => editHandler(note.id)}>Edit</button>
            <button onClick={() => noteDeleteHandler(note.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
