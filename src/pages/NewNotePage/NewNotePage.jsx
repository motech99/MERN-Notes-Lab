import NewNoteForm from "../../components/NewNoteForm/NewNoteForm";

export default function NewNotePage({notes, setNotes}) {
    return (
      <>
       <h1>NewNotePage</h1>
       <NewNoteForm notes={notes} setNotes={setNotes}/>
       </>
    )
   }
   