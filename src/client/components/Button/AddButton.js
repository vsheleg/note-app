import React from "react";
import "./AddButton.css";

function AddButton(props) {
  function addNote() {
    let val = document.getElementById("addNote").value;
    props.onAdd(val);
  }

  return (
    <div>
      <input
        className="login"
        placeholder="Add new item"
        type="text"
        id="addNote"
        name="addNote"
      />
      <input
        id="plus"
        type="button"
        className="primary"
        onClick={addNote}
        value="+"
      />
    </div>
  );
}
export default AddButton;
