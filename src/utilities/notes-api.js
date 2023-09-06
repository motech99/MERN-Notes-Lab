import sendRequest from "./send-request"

// the base path of the Express route 
const BASE_URL = "/api/notes";

// as this is a 'GET' request so additional args
export function allNotes() {
   return sendRequest(`${BASE_URL}`);
}
// as this is a 'POST' request 
export function createNote(newNote) {
   return sendRequest(`${BASE_URL}/new`, 'POST', newNote)
}
