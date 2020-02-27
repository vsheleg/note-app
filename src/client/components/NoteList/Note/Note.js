import React, { useState, useEffect } from "react";
import noteService from "../../../services/note.service";
import "./Note.css";
import "../../../pages/signup/signup.css";

export default function Note(props) {
  const [val, setVal] = useState(false);
  const [content, setContent] = useState("");
  const textInput = React.createRef();

  const updateItems = () => {
    let result = noteService.loadNote(props.note);
    result.then(response => {
      setContent(response);
    });
  };

  useEffect(() => {
    updateItems();
  }, [val]);

  function deleteItem() {
    props.onDelete(props.note);
  }

  async function editItem() {
    if (val) {
      let newValue = textInput.current.value;
      await noteService.editNote(
        { value: textInput.current.value },
        props.note
      );
      setContent(newValue);
      setVal(false);
    } else {
      setVal(true);
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
        {val ? (
          <input type="text" name="editNote" id="editNote" ref={textInput} />
        ) : null}
      </div>
    </div>
  );
}
