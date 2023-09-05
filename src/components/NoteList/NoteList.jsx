import { useState, useEffect } from 'react';

export default function NoteList() {
  
  const [notes, setNotes] = useState([]);
  
  
  useEffect(() => {
    fetch('/api/notes') 
      .then((response) => response.json())
      .then((data) => setNotes(data))
      .catch((error) => console.error('Error fetching notes:', error));
  }, []);

  return (
    <div>
      <h1>Your Notes</h1>
      {notes.length === 0 ? (
        <p>No Notes Yet!</p>
      ) : (
        <ul>
          {notes.map((note) => (
            <li key={note._id}>
              <strong>{note.text}</strong> - {new Date(note.createdAt).toLocaleString()}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}