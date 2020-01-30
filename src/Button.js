import React from "react";
import "./Button.css";
const locUrl = "http://localhost:3001/notes";

function Button(props) {
  function addNote() {
    let val = document.getElementById("addNote").value;
    let data = { note: val };
    fetch(locUrl + "/addFile", {
      method: "POST",
      status: 200,
      headers: {
        "Content-Type": "text/plain"
      },
      body: val
    })
      .then(response => response.json())
      .then(response => {
        console.log("here");
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
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
