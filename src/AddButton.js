import React from "react";
import "./Button.css";

function Button() {
  function addNote() {
    console.log("click");
  }
  return (
    <div>
      <input placeholder="Add new item" type="text" name="addNote"></input>
      <input type="button" onClick={addNote} value="Add note"></input>
    </div>
  );
}
export default Button;
