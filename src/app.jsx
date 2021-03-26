import React, { useState } from "react";
import {
  AppBar,
  Container,
  IconButton,
  makeStyles,
  Menu,
  MenuItem,
  Toolbar,
} from "@material-ui/core";
import { Route, Switch, useHistory } from "react-router-dom";
import Home from "./components/home.jsx";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Settings from "./components/settings.jsx";
const useStyles = makeStyles({
  container: {
    marginTop: 90,
  },
});

export default function App() {
  const classes = useStyles();
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
    
    <Container className={classes.container}>
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
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/settings" component={Settings} />
      </Switch>
      <Menu anchorEl={anchor} open={Boolean(anchor)} onClose={handleClose}>
        <MenuItem onClick={handleHomeRoute}>Home</MenuItem>
        <MenuItem onClick={handleSettingsRoute}>Settings</MenuItem>
      </Menu>
    </Container>
  );
}
