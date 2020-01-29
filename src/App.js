import React from "react";
import NoteList from "./NoteList";
import Button from "./Button";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { notes: ["note1", "note2", "note3", "note4", "note5"] };
  }
  //TO-DO fetch in note, pass to note title
  //edit + add

  componentDidMount = () => {
    let obj = { notes: [] };
    let result = fetch("http://localhost:3001/notes")
      .then(response => response.json())
      .then(response => {
        obj.notes = response;
        this.setState(obj);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  componentDidUpdate = () => {
    console.log("main is updated");
  };
  componentWillUnmount = () => {
    console.log("component was unmounted");
  };

  deleteNote = note => {
    let newNotes = this.state.notes.filter(elem => elem !== note);
    let newObj = { notes: newNotes };
    this.setState(newObj);
  };
  addNote = note => {
    let newNotes = this.state.notes.concat(note);
    let newObj = { notes: newNotes };
    this.setState(newObj);
    let result = fetch("http://localhost:3001/notes/addFile/" + note)
      .then(response => response.json())
      .then(response => {})
      .catch(function(error) {
        console.log(error);
      });
  };
  editNote = (note, val) => {
    let newNotes = this.state.notes.map(elem => (elem === note ? val : elem));
    let newObj = { notes: newNotes };
    this.setState(newObj);
    // let result  = fetch("http://localhost:3001/notes/addFile/")
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
