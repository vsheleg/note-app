import React from "react";
import "./Button.css";

function Button(props) {
  function addNote() {
    let val = document.getElementById("addNote").value;
    console.log(val);
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
export default Button;
