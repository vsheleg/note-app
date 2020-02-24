import React from "react";
import "./AddButton.css";
import { render } from "@testing-library/react";

export default class AddButton extends React.Component {
  constructor(props) {
    super(props);
    this.textInputRef = React.createRef();
  }
  addNote = () => {
    this.props.onAdd(this.textInputRef.current.value);
  };
  render() {
    return (
      <div>
        <div>
          <input
            className="login"
            placeholder="Add new item"
            type="text"
            id="addNote"
            name="addNote"
            ref={this.textInputRef}
          />
          <input
            id="plus"
            type="button"
            className="primary"
            onClick={this.addNote}
            value="+"
          />
        </div>
      </div>
    );
  }
}
