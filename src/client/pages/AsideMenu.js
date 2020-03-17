import React, { useEffect } from "react";
import { useState } from "react";
//import { MenuList } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";
import { Drawer } from "@material-ui/core";
import { Redirect } from "react-router-dom";
import PersonIcon from "@material-ui/icons/Person";
import GroupIcon from "@material-ui/icons/Group";
import "./AsideMenu.css";

export default function AsideMenu({ access }) {
  const [allNotes, setAllNotes] = useState(false);
  const [myNotes, setMyNotes] = useState(false);

  useEffect(() => {
    setMyNotes(false);
    setAllNotes(false);
  });

  function redirectAllNotes() {
    setAllNotes(true);
  }
  function redirectMyNotes() {
    setMyNotes(true);
  }
  if (allNotes) {
    return <Redirect to="/notes" from="/my-notes" />;
  }
  if (myNotes) {
    return <Redirect to="/my-notes" from="/notes" />;
  }
  if (access) {
    return (
      <div>
        <Drawer variant="permanent" open="true" anchor="left" className="menu">
          <MenuItem className="header-menu"></MenuItem>
          <hr />
          <div className="menuItem">
            <MenuItem onClick={redirectMyNotes}>
              <PersonIcon className="icon" />
              My Notes
            </MenuItem>
          </div>
          <div className="menuItem">
            <MenuItem onClick={redirectAllNotes}>
              <GroupIcon className="icon" /> All Notes
            </MenuItem>
          </div>
        </Drawer>
      </div>
    );
  } else {
    return <div></div>;
  }
}
