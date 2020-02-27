import React, { useState, useEffect } from "react";
import NoteList from "./NoteList/NoteList";
import { Redirect } from "react-router-dom";
import AddButton from "./Button/AddButton";
import "./App.css";
import noteService from "../services/note.service.js";

export default function App(props) {
  const [notes, setNotes] = useState([]);
  const [redirect, setRedirect] = useState(false);

  const updateItems = () => {
    let result = noteService.loadAllNotes();
    result.then(response => {
      if (response.status) {
        alert(response.statusText); //Forbidden
        setRedirect(true); //redirects to login
      } else {
        setNotes(response);
      }
    });
  };
  useEffect(() => {
    updateItems();
  }, [redirect]);

  async function deleteNote(note) {
    await noteService.deleteNote(note);
    setNotes(notes.filter(elem => elem !== note));
    updateItems();
  }

  async function addNote(note) {
    await noteService.addNote({ value: note });
    updateItems();
  }
  function logout() {
    setRedirect(true);
  }

  if (redirect) {
    return <Redirect to="/login" from="/notes" />;
  }
  return (
    <div id="container">
      <input
        type="button"
        onClick={logout}
        name="exit"
        className="primary"
        id="logout"
      />
      <AddButton onAdd={addNote} />
      <NoteList notes={notes} onDelete={deleteNote} />
    </div>
  );
}
