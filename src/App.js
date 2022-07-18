/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
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
  /*
   note = {
      id:Date.now(),
      title: 'title-1',
      isComplete:false,
   }
   */
  return (
    <div className="App">
      <form onSubmit={noteCreateHandler}>
        <input
          onChange={event => setTitle(event.target.value)}
          type="text"
          value={title}
          name=""
          id=""
          placeholder="Write your note here"
        />
        <button type="submit">Add note</button>
      </form>
      <ul>
        {notes.map(note => (
          <li>
            <span>{note.title} </span>
            <button>Edit</button>
            <button>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
