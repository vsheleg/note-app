import React from "react";
import "./Button.css";

function Button() {
  return (
    <div>
      <input placeholder="Add new item" type="text" name="addVal"></input>
      <input type="button" value="Add note"></input>
    </div>
  );
}
export default Button;
