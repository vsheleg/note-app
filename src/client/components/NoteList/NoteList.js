import React from "react";

import "./Note/Note.css";
import Note from "./Note/Note";

function NoteList({ notes, onDelete, onAdd, onEdit, access }) {
  const listNotes = notes.map(elem => (
    <li key={elem}>
      <Note
        note={elem}
        onDelete={onDelete}
        onAdd={onAdd}
        onEdit={onEdit}
        access={access}
      />
    </li>
  ));
  return <ul>{listNotes}</ul>;
}

export default NoteList;
