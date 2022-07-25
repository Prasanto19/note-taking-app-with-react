/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react/react-in-jsx-scope */
import Form from './components/Form/Form';
import NoteList from './components/NoteList/NoteList';
import { useState } from 'react';
import './App.css';

function App() {
  /*
   note = {
      id:Date.now(),
      title: 'title-1',
      isComplete:false,
   }
   */
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const [editableNote, setEditableNote] = useState(null);
  const [editMode, setEditMode] = useState(false);

  return (
    <div className="app">
      <Form
        editMode={editMode}
        title={title}
        setEditMode={setEditMode}
        setTitle={setTitle}
        notes={notes}
        setNotes={setNotes}
        editableNote={editableNote}
        setEditableNote={setEditableNote}
        isComplete={isComplete}
        setIsComplete={setIsComplete}
      />
      <NoteList
        editMode={editMode}
        title={title}
        setEditMode={setEditMode}
        setTitle={setTitle}
        notes={notes}
        setNotes={setNotes}
        editableNote={editableNote}
        setEditableNote={setEditableNote}
        isComplete={isComplete}
        setIsComplete={setIsComplete}
      />
    </div>
  );
}

export default App;
