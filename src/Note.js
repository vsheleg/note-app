import React from "react";

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = { val: false };
  }
  componentDidMount = () => {
    fetch(
      "http://localhost:3001/notes/" +
        this.props.note.substring(0, this.props.note.length - 4)
    )
      .then(response => response.json())
      .then(response => {
        this.props.onEdit(this.props.note, response.join("")); //here
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  /* 
  updateValue = response => {
     let result = fetch("http://localhost:3001/notes"+this.props.note+"/editFile/"+text)
  };
*/
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
