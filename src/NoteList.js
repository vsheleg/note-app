import React, { useState } from "react";

import "./Note.css";
import Note from "./Note.js";

function NoteList(props) {
  const notes = props.notes;
  console.log(props);
  //  function delete(note) {
  // new notes

  const listNotes = notes.map(elem => (
    <li key={elem}>
      <Note note={elem} onDelete={props.onDelete} onEdit={props.onEdit} />
    </li>
  ));
  return <ul>{listNotes}</ul>;
}

export default NoteList;
