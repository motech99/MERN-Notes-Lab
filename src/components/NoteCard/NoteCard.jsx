import './NoteCard.css';

export default function NoteCard({ note, timestamp }) {
  return (
    <div className="card">
      <p>{note}</p>
      <p className="timestamp">Created: {new Date(timestamp).toLocaleString()}</p>
    </div>
  );
}
