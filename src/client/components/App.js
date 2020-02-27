import React from "react";
import NoteList from "./NoteList/NoteList";
import { Redirect } from "react-router-dom";
import AddButton from "./Button/AddButton";
import "./App.css";
import noteService from "../services/note.service.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { notes: [] };
  }
  updateItems = () => {
    let result = noteService.loadAllNotes();
    result.then(response => {
      if (response.error) {
        alert(response.error.statusText); //Forbidden
        this.setState({ redirect: true }); //redirects to login
      } else {
        this.setState({ notes: response });
      }
    });
  };
  componentDidMount = () => {
    this.updateItems();
  };
  componentDidUpdate = () => {};
  componentWillUnmount = () => {};

  deleteNote = async note => {
    await noteService.deleteNote(note);
    this.setState(({ notes: prevNotes }) => ({
      notes: prevNotes.filter(elem => elem !== note)
    }));
  };

  addNote = async note => {
    let elem = await noteService.addNote({ value: note });
    this.setState(({ notes: prevNotes }) => ({
      notes: prevNotes.concat(elem.note.id)
    }));
  };
  logout = () => {
    this.setState({ redirect: true });
  };
  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to="/login" from="/notes" />;
    }
    return (
      <div id="container">
        <input
          type="button"
          onClick={this.logout}
          name="exit"
          className="primary"
          id="logout"
        />
        <AddButton onAdd={this.addNote} />
        <NoteList notes={this.state.notes} onDelete={this.deleteNote} />
      </div>
    );
  }
}
export default App;
