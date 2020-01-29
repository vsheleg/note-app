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
    //let result = fetch("http://localhost:3001/notes/addFile/" + note,{
    let result = fetch("http://localhost:3001/notes/addFile/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8"
      },
      body: JSON.stringify(note)
    })
      .then(response => response.json())
      .then(response => {
        console.log("requested data ", response);
      })
      .catch(function(error) {
        console.log(error);
      });
    let result1 = fetch("http://localhost:3001/notes")
      .then(response => response.json())
      .then(response => {
        this.setState({ notes: response });
      })
      .catch(function(error) {
        console.log(error);
      });
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
