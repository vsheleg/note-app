import React, { useState, useEffect, useCallback } from "react";
import { Redirect, useParams } from "react-router-dom";
import noteService from "../services/note.service";
import "../components/NoteList/Note/Note.css";
import KeyboardReturnIcon from "@material-ui/icons/KeyboardReturn";
import { IconButton } from "@material-ui/core";
import "./NotePage.css";

export default function NotePage({ onDefineHeader }) {
  const [redirect, setRedirect] = useState(false);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState(false);
  const { id } = useParams();
  onDefineHeader("/notes");

  const updateItems = () => {
    noteService.loadNote(id).then(response => {
      setContent(response.content);
      setTitle(response.title);
    });
  };

  useEffect(() => {
    updateItems();
  }, []);

  function returnToNotes() {
    setRedirect(true);
  }
  if (redirect) {
    return <Redirect to="/notes" />;
  }
  return (
    <div className="shared-note">
      <div className="note-section">
        <div className="note">
          <span id="title">{title || id}</span>
          <hr id="title-line" />
          <div className="note-content"> {content}</div>
        </div>
      </div>
      <IconButton
        size="medium"
        variant="outlined"
        color="primary"
        onClick={returnToNotes}
      >
        <KeyboardReturnIcon />
      </IconButton>
    </div>
  );
}
