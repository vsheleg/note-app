import React from "react";
let fetchUrl = require("fetch").fetchUrl;
/*function Note(props) {
  const note = props.note;
  const 
  function deleteItem() {
    props.onDelete(note);
  }
  function editItem() {
    console.log("edit");
  }
  return (
    <div className="note-settings">
      <div className="note">{note}</div>
      <input type="button" onClick={deleteItem} name="delete"></input>
      <input type="button" onClick={editItem} name="edit"></input>
    </div>
  );
}*/

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = { val: false };
  }
  componentDidMount = () => {};

  componentDidUpdate = () => {
    console.log("note updated");
  };
  componentWillUnmount = () => {
    console.log("note deleted");
  };

  deleteItem = () => {
    this.props.onDelete(this.props.note);
  };
  editItem = () => {
    if (this.state.val) {
      let elem = document.getElementById("editNote").value;
      this.props.onEdit(this.props.note, elem);
    } else {
      this.setState({ val: true });
    }
  };
  render() {
    return (
      <div className="note-settings">
        <div className="note">{this.props.note}</div>
        <input type="button" onClick={this.deleteItem} name="delete"></input>
        <input type="button" onClick={this.editItem} name="edit"></input>
        {this.state.val ? (
          <input type="text" name="editNote" id="editNote" />
        ) : null}
      </div>
    );
  }
}

export default Note;
