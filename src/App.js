import React from "react";
import NoteList from "./NoteList";
import Button from "./Button";
import "./App.css";

export default function App() {
  const notes = ["note1", "note2", "note3", "note4", "note5"];
  return (
    <div id="container">
      <NoteList notes={notes} />
      <Button />
    </div>
  );
}
