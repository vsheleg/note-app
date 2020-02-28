import React, { createRef, useState, useEffect, useRef } from "react";
import noteService from "../../../services/note.service";
import "./Note.css";
import "../../../pages/signup/signup.css";

export default function Note(props) {
  const [editInput, setEditInput] = useState(false);
  const [content, setContent] = useState("");
  const textInput = useRef(null);

  const updateItems = () => {
    noteService.loadNote(props.note).then(setContent);
  };

  useEffect(() => {
    updateItems();
  }, [editInput]);

  function deleteItem() {
    props.onDelete(props.note);
  }

  async function editItem() {
    if (editInput) {
      const newValue = textInput.current.value;
      await noteService.editNote({ val: textInput.current.value }, props.note);
      setContent(newValue);
      setEditInput(false);
    } else {
      setEditInput(true);
    }
  }

  return (
    <div>
      <div className="note">
        <span id="title">{props.note}</span>
        <hr id="title-line" />
        <div className="note-content">{content}</div>
        <input type="button" onClick={deleteItem} name="delete" />
        <input type="button" onClick={editItem} name="edit" />
        {editInput ? (
          <input type="text" name="editNote" id="editNote" ref={textInput} />
        ) : null}
      </div>
    </div>
  );
}
