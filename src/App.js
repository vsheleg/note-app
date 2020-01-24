import React from "react";
import ReactDOM from "react-dom";
import Note from "./Note";
import "./App.css";

export default function App() {
  const notes = ["note1", "note2", "note3", "note4", "note5"];
  return (
    <div id="container">
      <Note notes={notes} />
    </div>
  );
}
