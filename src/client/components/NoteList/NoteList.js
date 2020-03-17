import React from "react";

import "./Note/Note.css";
import Note from "./Note/Note";

function NoteList({ notes, onDelete, onAdd, onEdit }) {
  const listNotes = notes.map(elem => (
    <li key={elem}>
      <Note note={elem} onDelete={onDelete} onAdd={onAdd} onEdit={onEdit} />
    </li>
  ));
  return <ul>{listNotes}</ul>;
}

export default NoteList;
