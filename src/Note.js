import React from "react";
import ReactDOM from "react-dom";
import "./Note.css";

function Note(props) {
  const notes = props.notes;
  const listNotes = notes.map(elem => (
    <li>
      <div class="note">{elem}</div>
    </li>
  ));
  return <ul>{listNotes}</ul>;
}

export default Note;
