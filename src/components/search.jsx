import React, { useState } from "react";
import { TextField, Button, Container, makeStyles } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { SET_SEARCH_KEY } from "../redux/types.jsx";
import { fetchPeople, resetFetch } from "../redux/actions/action.jsx";

const useStyles = makeStyles({
  cont: {
    width: "auto",
    position: "fixed",
    background: "white",
    padding: 10,
  },
});
function Search() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const nat = useSelector((state) => state.settings.nationality);
  const [searchKey, setSearchKey] = useState("");
  const handleChange = (ev) => {
    setSearchKey(ev.target.value);
  };
  const handleClick = (ev) => {
    dispatch({
      type: SET_SEARCH_KEY,
      payload: searchKey,
    });
    dispatch(resetFetch());
    dispatch(fetchPeople(1, nat));
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

export default Search;
