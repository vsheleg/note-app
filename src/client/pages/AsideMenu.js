import React, { useEffect } from "react";
import { useState } from "react";
//import { MenuList } from "@material-ui/core";
import { List, ListItem } from "@material-ui/core";
import IconExpandLess from "@material-ui/icons/ExpandLess";
import IconExpandMore from "@material-ui/icons/ExpandMore";
import {
  Drawer,
  Select,
  ListItemText,
  Collapse,
  Divider
} from "@material-ui/core";
import { Redirect } from "react-router-dom";
import PersonIcon from "@material-ui/icons/Person";
import GroupIcon from "@material-ui/icons/Group";
import "./AsideMenu.css";

export default function AsideMenu({ access, commonNotes, personalNotes }) {
  const [openAllNotes, setOpenAllNotes] = useState(false);
  const [openMyNotes, setOpenMyNotes] = useState(false);
  const [selectedNote, setSelectedNote] = useState(false);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    setOpenMyNotes(false);
    setOpenAllNotes(false);
  }, [commonNotes, personalNotes]);

  const handleSelectNote = event => {
    setSelectedNote(Number(event.target.innerText));
    setRedirect(true);
  };
  function handleAllNotes() {
    setOpenAllNotes(!openAllNotes);
  }
  function handleMyNotes() {
    setOpenMyNotes(!openMyNotes);
  }
  if (redirect) {
    return <Redirect to={`/${selectedNote}`} />;
  }
  if (access) {
    const listPersonalNotes = personalNotes.map(elem => (
      <ListItem button onClick={handleSelectNote}>
        <ListItemText inset primary={elem} />
      </ListItem>
    ));
    const listAllNotes = commonNotes.map(elem => (
      <ListItem button onClick={handleSelectNote}>
        <ListItemText inset primary={elem} />
      </ListItem>
    ));

    return (
      <List disablePadding>
        <ListItem button onClick={handleMyNotes}>
          <ListItemText primary="My Notes" />
          {openMyNotes ? <IconExpandLess /> : <IconExpandMore />}
        </ListItem>
        <Collapse in={openMyNotes} timeout="auto" unmountOnExit>
          <Divider />
          <List component="div" disablePadding>
            {listPersonalNotes}
          </List>
        </Collapse>
        <ListItem button onClick={handleAllNotes}>
          <ListItemText primary="All Notes" />
          {openAllNotes ? <IconExpandLess /> : <IconExpandMore />}
        </ListItem>
        <Collapse in={openAllNotes} timeout="auto" unmountOnExit>
          <Divider />
          <List component="div" disablePadding>
            {listAllNotes}
          </List>
        </Collapse>
      </List>
    );
  }
}
