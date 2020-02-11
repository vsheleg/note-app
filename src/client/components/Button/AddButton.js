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
        placeholder="Add new item"
        type="text"
        id="addNote"
        name="addNote"
      ></input>
      <input type="button" onClick={addNote} value="Add note"></input>
    </div>
  );
}
export default AddButton;
