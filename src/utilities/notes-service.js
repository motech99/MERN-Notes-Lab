import * as notesAPI from './notes-api'

export async function allNotes() {
    return await notesAPI.allNotes();
}

export async function createNote(newNote) {
    return await notesAPI.createNote(newNote);
}