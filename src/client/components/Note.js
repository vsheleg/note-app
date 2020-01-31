import React from "react";
const locUrl = "http://localhost:3001/notes/";

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = { val: false, content: "h", loading: false };
  }

  componentDidMount = () => {
    console.log(locUrl + this.props.note + "/read");
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
    this.props.onDelete(this.props.note);
  };

  editItem = () => {
    if (this.state.val) {
      let elem = document.getElementById("editNote").value;
      this.setState({
        content: elem
      });
      this.setState({
        val: false
      });

      console.log(locUrl + this.props.note + "/edit");
      fetch(locUrl + this.props.note + "/edit", {
        method: "POST",
        status: 200,
        headers: {
          "Content-Type": "text/plain"
        },
        body: elem
      })
        .then(response => response.json())
        .then(response => {
          console.log(response);
        })
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
