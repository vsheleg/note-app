import React from "react";

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = { val: false, content: "", loading: false };
  }
  componentDidMount = () => {
    fetch("http://localhost:3001/notes/" + this.props.note)
      .then(response => response.json())
      .then(response => {
        let obj = { val: false, content: response.join(""), loading: true };
        this.setState(obj);
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
      this.setState({
        content: elem
      });
      fetch(
        "http://localhost:3001/notes/" +
          this.props.note.slice(0, -4) +
          "/editFile/" +
          elem
      )
        .then(response => response.json())
        .then(response => {})
        .catch(function(error) {
          console.log(error);
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
          <input type="text" name="editNote" id="editNote" />
        ) : null}
      </div>
    );
  }
}

export default Note;
