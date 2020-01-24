import React from "react";
import ReactDOM from "react-dom";
import "./Note.css";
import Note from "./Note.js";

function NoteList(props) {
  const notes = props.notes;
  const listNotes = notes.map(elem => (
    <li>
      <Note note={elem} />
    </li>
  ));
  return <ul>{listNotes}</ul>;
}

export default NoteList;
