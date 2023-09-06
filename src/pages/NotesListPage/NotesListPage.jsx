import * as notesService from '../../utilities/notes-service';
import NoteCard from '../../components/NoteCard/NoteCard';

export default function NotesListPage({ user, notes, setNotes }) {
  async function allNotes() {
    try {
      const userNotes = await notesService.allNotes();

      const notesWithValidTimestamps = userNotes.map(note => ({
        ...note,
        timestamp: Date.now(), 
      }));

      setNotes(notesWithValidTimestamps);
    } catch (error) {
      console.error("Error getting all notes:", error);
    }
  }

  return (
    <>
      <div>
        {notes.length === 0 ? (
          <p>No Notes Yet!</p>
        ) : (
          <>
            <h1>All {user.name} notes</h1>
            <div className="card-container">
              {notes.map((note, idx) => (
                <NoteCard
                  key={idx}
                  note={note.text}
                  timestamp={new Date(note.timestamp)} 
                />
              ))}
            </div>
          </>
        )}
        <button onClick={allNotes}>All Notes</button>
      </div>
    </>
  );
}