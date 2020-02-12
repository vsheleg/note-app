import React from "react";

import "./Note/Note.css";
import Note from "./Note/Note";

function NoteList(props) {
  const notes = props.notes;
  const listNotes = notes.map(elem => (
    <li key={elem}>
      <span>{elem}</span>
      <Note
        note={elem}
        onDelete={props.onDelete}
        onAdd={props.onAdd}
        onEdit={props.onEdit}
      />
    </li>
  ));
  return <ul>{listNotes}</ul>;
}

export default NoteList;
