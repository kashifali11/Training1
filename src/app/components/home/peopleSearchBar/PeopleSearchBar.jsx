import React, { useState } from "react";
import { TextField, Button, Container, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    width: "auto",
    position: "fixed",
    background: "white",
    padding: 10,
  },
});
export default function PeopleSearchBar({dispatchSearchAction}) {
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchTermChange = (ev) => {
    setSearchTerm(ev.target.value);
  };
  const handleSearchClick = () => {
    dispatchSearchAction(searchTerm);
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
