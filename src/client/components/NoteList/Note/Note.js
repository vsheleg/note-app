import React from "react";
const locUrl = "http://localhost:3001/notes/";
const noteService = require("../../../noteService/index");

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    this.state = { val: false, content: "", loading: false };
  }
  componentDidMount = () => {
    fetch(locUrl + this.props.note + "/read")
      .then(response => response.json())
      .then(response => {
        console.log("res" + response);
        let obj = { val: false, content: response.join(""), loading: true };
        this.setState(obj);
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  componentDidUpdate = () => {
    console.log("note updated");
  };
  componentWillUnmount = () => {
    console.log("note deleted");
  };

  deleteItem = () => {
    noteService.deleteNote(this.props.note);
    this.props.onDelete(this.props.note);
  };

  editItem = () => {
    if (this.state.val) {
      let newValue = this.textInput.current.value;
      noteService.editNote(newValue, this.props.note);
      this.setState({
        content: newValue,
        val: false
      });
    } else {
      this.setState({ val: true });
    }
  };
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
