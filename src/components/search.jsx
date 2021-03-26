import React, { useState } from "react";
import { TextField, Button, Container, makeStyles } from "@material-ui/core";
import { connect } from "react-redux";
import {
  fetchPeople,
  setSearchKey,
  resetFetch,
} from "../redux/actions/action.jsx";

const useStyles = makeStyles({
  cont: {
    width: "auto",
    position: "fixed",
    background: "white",
    padding: 10,
  },
});
function Search(props) {
  const classes = useStyles();
  const [searchKey, setSearchKey] = useState("");
  const handleChange = (ev) => {
    setSearchKey(ev.target.value);
  };
  const handleClick = (ev) => {
    props.setKey(searchKey);
    props.reset();
    props.fetch(1, props.nat);
  };
  return (
    <Container className={classes.cont}>
      <TextField
        onChange={handleChange}
        fullWidth
        variant="outlined"
        placeholder="Search"
      />
      <Button
        onClick={handleClick}
        style={{ marginTop: 16 }}
        color="primary"
        variant="contained"
      >
        search
      </Button>
    </Container>
  );
}
const mapStateToProps = (state) => {
  return {
    nat: state.settings.nationality,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setKey: (key) => dispatch(setSearchKey(key)),
    reset: () => dispatch(resetFetch()),
    fetch: (page, nat) => dispatch(fetchPeople(page, nat)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Search);
