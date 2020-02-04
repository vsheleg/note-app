import React from "react";
import NoteList from "./NoteList/NoteList";
import AddButton from "./Button/AddButton";
import "./App.css";
const locUrl = "http://localhost:3001/notes";
const noteService = require("../../server/noteService");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { notes: [] };
  }
  updateItems = () => {
    let obj = { notes: [] };

    let result = fetch(locUrl)
      .then(response => response.json())
      .then(response => {
        obj.notes = response;
        this.setState(obj);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  componentDidMount = () => {
    this.updateItems();
  };

  componentDidUpdate = () => {
    console.log("main is updated");
  };
  componentWillUnmount = () => {
    console.log("component was unmounted");
  };

  deleteNote = note => {
    this.updateItems();
  };
  addNote = note => {
    console.log("note " + note);
    noteService.addNote(note);
    this.updateItems();
  };
  render() {
    return (
      <div id="container">
        <NoteList
          notes={this.state.notes}
          //onEdit={this.editNote}
          onDelete={this.deleteNote}
        />
        <AddButton onAdd={this.addNote} />
      </div>
    );
  }
}
export default App;
