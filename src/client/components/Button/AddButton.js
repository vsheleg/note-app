import React from "react";
import "./AddButton.css";
import { render } from "@testing-library/react";

export default function AddButton(props) {
  const textInputRef = React.createRef();

  function addNote() {
    props.onAdd(textInputRef.current.value);
  }
  return (
    <div>
      <div>
        <input
          className="login"
          placeholder="Add new item"
          type="text"
          id="addNote"
          name="addNote"
          ref={textInputRef}
        />
        <input
          id="plus"
          type="button"
          className="primary"
          onClick={addNote}
          value="+"
        />
      </div>
    </div>
  );
}
