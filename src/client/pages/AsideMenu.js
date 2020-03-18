import React, { useEffect } from "react";
import { useState } from "react";
import KeyboardReturnIcon from "@material-ui/icons/KeyboardReturn";
import { IconButton } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";
import { List, ListItem, ListItemIcon } from "@material-ui/core";
import IconExpandLess from "@material-ui/icons/ExpandLess";
import IconExpandMore from "@material-ui/icons/ExpandMore";
import AddButton from "../components/Button/AddButton";
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
import "../components/Button/AddButton.css";

export default function AsideMenu({
  access,
  commonNotes,
  personalNotes,
  onSelect,
  addNote
}) {
  const [openAllNotes, setOpenAllNotes] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [openMyNotes, setOpenMyNotes] = useState(false);
  const [selectedNote, setSelectedNote] = useState(false);

  function handleSelectNote(event) {
    setSelectedNote(Number(event.target.innerText));
    onSelect(Number(event.target.innerText));
  }
  function handleAllNotes() {
    setOpenAllNotes(!openAllNotes);
  }
  function handleMyNotes() {
    setOpenMyNotes(!openMyNotes);
  }
  function logout() {
    setRedirect(true);
  }

  if (redirect) {
    return <Redirect to="/login" />;
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
      <Drawer variant="permanent" className="menu-container">
        <MenuItem className="header-menu"></MenuItem>
        <hr />
        <List disablePadding>
          <ListItem button>
            <AddButton onAdd={addNote} />
          </ListItem>
          <ListItem button onClick={handleMyNotes}>
            <ListItemIcon>
              <PersonIcon color="primary" />
            </ListItemIcon>
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
            <ListItemIcon>
              <GroupIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="All Notes" />
            {openAllNotes ? <IconExpandLess /> : <IconExpandMore />}
          </ListItem>
          <Collapse in={openAllNotes} timeout="auto" unmountOnExit>
            <Divider />
            <List component="div" disablePadding>
              {listAllNotes}
            </List>
          </Collapse>

          <ListItem button onClick={logout}>
            <ListItemIcon color="primary" onClick={logout}>
              <KeyboardReturnIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </Drawer>
    );
  }
}
