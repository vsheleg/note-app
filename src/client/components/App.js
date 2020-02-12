import React from "react";
import NoteList from "./NoteList/NoteList";
import AddButton from "./Button/AddButton";
import "./App.css";
import noteService from "../noteService/index.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { notes: [] };
  }
  updateItems = () => {
    let obj = { notes: [] };
    let result = noteService.loadAllNotes.loadAllNotes();
    result.then(response => {
      obj.notes = response;
      if (JSON.stringify(obj.notes) === JSON.stringify(this.state.notes)) {
        this.updateItems();
      } else {
        this.setState(obj);
      }
    });
  };
  componentDidMount = () => {
    this.updateItems();
  };
  componentDidUpdate = () => {};
  componentWillUnmount = () => {};

  deleteNote = note => {
    noteService.deleteNote.deleteNote(note);
    let obj = this.state;
    obj.notes = obj.notes.filter(elem => elem !== note);
    this.setState(obj);
  };

  addNote = note => {
    noteService.addNote.addNote(note);
    this.updateItems();
  };
  render() {
    return (
      <div id="container">
        <NoteList notes={this.state.notes} onDelete={this.deleteNote} />
        <AddButton onAdd={this.addNote} />
      </div>
    );
  }
}
export default App;
