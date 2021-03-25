import React, { useState } from "react";
import { TextField, Button, Container, makeStyles } from "@material-ui/core";
import { connect } from "react-redux";
import { fetchPeople, setSearchKey, resetFetch } from "../redux/actions/action.jsx";

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
    props.fetch(1, props.nat, searchKey);
  };
  return (
    <Container className={classes.cont}>
      <span>
        <TextField
          onChange={handleChange}
          fullWidth
          variant="outlined"
          placeholder="Search"
        />
      </span>
      <span>
        <Button
          onClick={handleClick}
          style={{ marginTop: 16 }}
          color="primary"
          variant="contained"
        >
          search
        </Button>
      </span>
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
    fetch: (page, nat, key) => dispatch(fetchPeople(page, nat, key)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Search);
