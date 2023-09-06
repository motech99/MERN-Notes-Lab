import { useState } from 'react';
import { getUser } from "../../utilities/users-service";
import { Routes, Route } from 'react-router-dom';
import AuthPage from "../AuthPage/AuthPage";
import NewNotePage from "../NewNotePage/NewNotePage";
import NotesListPage from "../NotesListPage/NotesListPage";
import NavBar from "../../components/NavBar/NavBar";

import './App.css';

export default function App() {

  const [user, setUser] = useState(getUser());

  const [notes, setNotes] = useState([]); 
  
  return (
    <main className="App">
    { user ?
        <>
          <NavBar user={user} setUser={setUser}/>
            <Routes>
              {/* Routes components in here */}
              <Route path="/notes/new" element={<NewNotePage notes={notes} setNotes={setNotes}/>} />
              <Route path="/notes" element={<NotesListPage user={user} notes={notes} setNotes={setNotes}/>} />
          </Routes>
        </> 
        :
        <AuthPage user={user} setUser={setUser} />
    }

    </main>
  );
}

