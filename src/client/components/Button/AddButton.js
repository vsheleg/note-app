import React, { useRef } from "react";
import "./AddButton.css";

export default function AddButton({ onAdd }) {
  const textInputRef = useRef(null);

  function addNote() {
    onAdd(textInputRef.current.value);
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
