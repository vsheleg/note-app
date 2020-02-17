import React, { createRef } from "react";
import noteService from "../../../noteService/index";

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    this.state = { val: false, content: "", loading: false };
  }
  updateItems = () => {
    let result = noteService.loadNote.loadNote(this.props.note);
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
      let newValue = this.textInput.current.value;
      noteService.editNote.editNote(newValue, this.props.note);
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
      <div className="note-settings">
        <div className="note">{this.state.content}</div>
        <input type="button" onClick={this.deleteItem} name="delete"></input>
        <input type="button" onClick={this.editItem} name="edit"></input>
        {this.state.val ? (
          <input
            type="text"
            name="editNote"
            id="editNote"
            ref={this.textInput}
          />
        ) : null}
      </div>
    );
  }
}

export default Note;
