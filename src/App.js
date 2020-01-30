import React from "react";
import NoteList from "./NoteList";
import Button from "./Button";
import "./App.css";
const locUrl = "http://localhost:3001/notes";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { notes: ["note1", "note2", "note3", "note4", "note5"] };
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
    fetch(locUrl + "/" + note + "/delete")
      .then(response => response.json())
      .then(response => {})
      .catch(function(error) {
        console.log(error);
      });
    let newNotes = this.state.notes.filter(elem => elem !== note);
    let newObj = { notes: newNotes };
    this.setState(newObj);
  };
  addNote = note => {
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
        <Button onAdd={this.addNote} />
      </div>
    );
  }
}
export default App;
