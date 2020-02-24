import React from "react";
import NoteList from "./NoteList/NoteList";
import AddButton from "./Button/AddButton";
import "./App.css";
import noteService from "../services/note.service.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { notes: [] };
  }
  updateItems = () => {
    let obj = { notes: [] };
    let result = noteService.loadAllNotes();
    result.then(response => {
      obj.notes = response;
      this.setState(obj);
    });
  };
  componentDidMount = () => {
    this.updateItems();
  };
  componentDidUpdate = () => {};
  componentWillUnmount = () => {};

  deleteNote = async note => {
    await noteService.deleteNote(note);
    let obj = this.state;
    obj.notes = obj.notes.filter(elem => elem !== note);
    this.setState(obj);
  };

  addNote = async note => {
    await noteService.addNote(note);
    this.updateItems();
  };
  render() {
    return (
      <div id="container">
        <AddButton onAdd={this.addNote} />
        <NoteList notes={this.state.notes} onDelete={this.deleteNote} />
      </div>
    );
  }
}
export default App;
