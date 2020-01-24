import React from "react";
import NoteList from "./NoteList";
import Button from "./Button";
import "./App.css";
/*
export default function App() {
  const notes = ["note1", "note2", "note3", "note4", "note5"]; //hook

  return (
    <div id="container">
      <NoteList notes={notes} />
      <Button />
    </div>
  );
}
*/
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { notes: ["note1", "note2", "note3", "note4", "note5"] };
  }
  deleteNote = note => {
    let newNotes = this.state.notes.filter(elem => elem !== note);
    let newObj = { notes: newNotes };
    this.setState(newObj);
  };
  addNote = note => {
    let newNotes = this.state.notes.concat(note);
    let newObj = { notes: newNotes };
    this.setState(newObj);
  };
  editNote = (note, val) => {
    let newNotes = this.state.notes.map(elem => (elem === note ? val : elem));
    let newObj = { notes: newNotes };
    this.setState(newObj);
  };
  render() {
    return (
      <div id="container">
        <NoteList
          notes={this.state.notes}
          onEdit={this.editNote}
          onDelete={this.deleteNote}
        />
        <Button onAdd={this.addNote} />
      </div>
    );
  }
}
export default App;
