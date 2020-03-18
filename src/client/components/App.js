import React, { useState, useEffect, useCallback } from "react";
import NoteList from "./NoteList/NoteList";
import { Redirect } from "react-router-dom";

import AsideMenu from "../pages/AsideMenu";
import KeyboardReturnIcon from "@material-ui/icons/KeyboardReturn";
import { IconButton } from "@material-ui/core";
import "./App.css";
import noteService from "../services/note.service.js";
const KEY = "note-token";

export default function App({ onDefineHeader, typeOfNotes }) {
  const [personalNotes, setPersonalNotes] = useState([]);
  const [commonNotes, setCommonNotes] = useState([]);
  const [loggedUser, setLoggedUser] = useState(true);
  const [selectedNote, setSelectedNote] = useState(false);

  if (window.location.pathname === "/" && loggedUser) {
    onDefineHeader("/notes");
  } else {
    onDefineHeader(window.location.pathname);
  }
  function isLoggedUser() {
    const token = localStorage.getItem(KEY);
    setLoggedUser(Boolean(token));
  }
  const updateItems = () => {
    let result = noteService.loadAllNotes();
    result.then(response => {
      if (response.error) {
        alert(response.error.statusText); //Forbidden
      } else {
        setPersonalNotes(response.personal);
        setCommonNotes(response.common.concat(response.personal));
      }
    });
  };
  useEffect(() => {
    updateItems();
    isLoggedUser();
  }, [typeOfNotes, loggedUser, selectedNote]);

  async function deleteNote(note) {
    await noteService.deleteNote(note);
    if (typeOfNotes === "all") {
      setCommonNotes(commonNotes.filter(elem => elem !== note));
    } else {
      setPersonalNotes(personalNotes.filter(elem => elem !== note));
    }
  }
  function selectNote(note) {
    setSelectedNote(note);
    console.log(";" + note);
  }

  async function addNote(note) {
    const elem = await noteService.addNote({
      value: note.content,
      title: note.title,
      privacy: typeOfNotes
    });
    if (typeOfNotes === "all") {
      setCommonNotes(commonNotes.concat(elem.note.id));
    } else {
      setPersonalNotes(personalNotes.concat(elem.note.id));
    }
  }

  if (!loggedUser) {
    return (
      <div id="container">
        {typeOfNotes === "all" ? (
          <NoteList
            access={loggedUser}
            notes={commonNotes}
            onDelete={deleteNote}
          />
        ) : (
          <div />
        )}
      </div>
    );
  }
  if (selectedNote) {
    return (
      <div id="container">
        <div id="aside">
          <AsideMenu
            onAdd={addNote}
            onSelect={selectNote}
            commonNotes={commonNotes}
            personalNotes={personalNotes}
            access={loggedUser}
          />
        </div>
        <div id="content">
          <NoteList
            access={loggedUser}
            notes={[selectedNote]}
            onDelete={deleteNote}
          />
        </div>
      </div>
    );
  }
  return (
    <div id="container">
      <div id="aside">
        <AsideMenu
          onAdd={addNote}
          onSelect={selectNote}
          commonNotes={commonNotes}
          personalNotes={personalNotes}
          access={loggedUser}
        />
      </div>
      <div id="content">
        {typeOfNotes === "all" ? (
          <NoteList
            access={loggedUser}
            notes={commonNotes}
            onDelete={deleteNote}
          />
        ) : (
          <NoteList
            access={loggedUser}
            notes={personalNotes}
            onDelete={deleteNote}
          />
        )}
      </div>
    </div>
  );
}
