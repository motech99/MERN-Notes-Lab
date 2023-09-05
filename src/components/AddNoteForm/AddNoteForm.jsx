import { useState } from 'react';

export default function AddNoteForm({ addNote }) {

  const [noteText, setNoteText] = useState(''); 

  const handleNoteTextChange = (e) => {
    setNoteText(e.target.value); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    addNote(noteText);
   
    setNoteText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your note"
        value={noteText}
        onChange={handleNoteTextChange}
      />
      <button type="submit">Add Note</button>
    </form>
  );
}