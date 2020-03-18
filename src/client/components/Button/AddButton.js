import React, { useState, useEffect, useRef } from "react";
import { Dialog, Button, IconButton } from "@material-ui/core";
import PostAddOutlinedIcon from "@material-ui/icons/PostAddOutlined";
import PostAddIcon from "@material-ui/icons/PostAdd";
import DialogTitle from "@material-ui/core/DialogTitle";
import CancelPresentationIcon from "@material-ui/icons/CancelPresentation";

import "./AddButton.css";
import { Input, ButtonGroup } from "@material-ui/core";

export default function AddButton({ onAdd }) {
  const textInputRef = useRef(null);
  const titleInputRef = useRef(null);
  const [dialog, setDialog] = useState(false);

  function addNote() {
    onAdd({
      content: textInputRef.current.value,
      title: titleInputRef.current.value
    });
    setDialog(false);
  }
  function handleClose() {
    setDialog(false);
  }
  function handleClickModal() {
    setDialog(true);
  }
  return (
    <div>
      <Button
        startIcon={<PostAddOutlinedIcon />}
        color="primary"
        variant="contained"
        onClick={handleClickModal}
      >
        Add new note
      </Button>
      <Dialog open={dialog} className="modal">
        <DialogTitle>
          Add new note
          <IconButton
            color="primary"
            size="medium"
            className="closeModal"
            onClick={handleClose}
          >
            <CancelPresentationIcon />
          </IconButton>
        </DialogTitle>

        <Input
          variant="outlined"
          name="addNote"
          inputRef={titleInputRef}
          className="add-button"
          placeholder="Add title"
          inputProps={{ "aria-label": "description" }}
        />
        <Input
          variant="outlined"
          name="addNote"
          inputRef={textInputRef}
          className="add-button add-content"
          placeholder="Add new note"
          inputProps={{ "aria-label": "description" }}
        />
        <IconButton id="outlined-basic" color="primary" onClick={addNote}>
          <PostAddIcon />
        </IconButton>
      </Dialog>
    </div>
  );
}
