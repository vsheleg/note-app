import React, { createRef } from "react";
import noteService from "../../../services/note.service";
import "./Note.css";
import "../../../pages/signup/signup.css";

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.textInputRef = React.createRef();
    this.state = { val: false, content: "", loading: false };
  }
  updateItems = () => {
    let result = noteService.loadNote(this.props.note);
    result.then(response => {
      let obj = { val: false, content: response, loading: true };
      this.setState(obj);
    });
  };
  componentDidMount = () => {
    this.updateItems();
  };
  componentDidUpdate = () => {};
  componentWillUnmount = () => {};
  deleteItem = () => {
    this.props.onDelete(this.props.note);
  };

  editItem = () => {
    if (this.state.val) {
      let newValue = this.textInputRef.current.value;
      noteService.editNote(
        { value: this.textInputRef.current.value },
        this.props.note
      );
      this.setState({
        content: newValue,
        val: false
      });
    } else {
      this.setState({ val: true });
    }
  };
  addItem = () => {};
  render() {
    return (
      <div className="note">
        <span id="title">{this.props.note}</span>
        <hr id="title-line" />
        <div className="note-content">{this.state.content}</div>
        <input type="button" onClick={this.deleteItem} name="delete"></input>
        <input type="button" onClick={this.editItem} name="edit"></input>
        {this.state.val ? (
          <input
            type="text"
            name="editNote"
            id="editNote"
            ref={this.textInputRef}
          />
        ) : null}
      </div>
    );
  }
}

export default Note;
