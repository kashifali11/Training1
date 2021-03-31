import React, { useState } from "react";
import { TextField, Button, Container, makeStyles } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { SET_SEARCH_TERM } from "../../../redux/types/peopleTypes";

const useStyles = makeStyles({
  container: {
    width: "auto",
    position: "fixed",
    background: "white",
    padding: 10,
  },
});
export default function PeopleSearchBar() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchTermChange = (ev) => {
    setSearchTerm(ev.target.value);
  };
  const handleSearchClick = () => {
    dispatch({
      type: SET_SEARCH_TERM,
      payload: searchTerm,
    });
  };
  return (
    <Container className={classes.container}>
      <TextField
        onChange={handleSearchTermChange}
        fullWidth
        variant="outlined"
        placeholder="Search"
      />
      <Button
        onClick={handleSearchClick}
        style={{ marginTop: 16 }}
        color="primary"
        variant="contained"
      >
        search
      </Button>
    </Container>
  );
}
