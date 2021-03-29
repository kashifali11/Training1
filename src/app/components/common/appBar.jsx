import React, { useState } from "react";
import { AppBar, IconButton, Menu, MenuItem, Toolbar } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import MoreVertIcon from "@material-ui/icons/MoreVert";
export default function CustomAppBar() {
  const history = useHistory();
  const [anchor, setAnchor] = useState(null);
  const menuClick = (ev) => {
    setAnchor(ev.target);
  };
  const handleClose = () => {
    setAnchor(null);
  };
  const handleHomeRoute = () => {
    history.push("/");
    handleClose();
  };
  const handleSettingsRoute = () => {
    history.push("/settings");
    handleClose();
  };
  return (
    <div>
      <AppBar>
        <Toolbar>
          Address Book
          <IconButton
            onClick={menuClick}
            style={{ marginLeft: "auto" }}
            color="inherit"
          >
            <MoreVertIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Menu anchorEl={anchor} open={Boolean(anchor)} onClose={handleClose}>
        <MenuItem onClick={handleHomeRoute}>Home</MenuItem>
        <MenuItem onClick={handleSettingsRoute}>Settings</MenuItem>
      </Menu>
    </div>
  );
}
