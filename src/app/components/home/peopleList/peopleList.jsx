import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import { selectPeople } from "../../../redux/selectors/selectPeople";
import { Grid } from "@material-ui/core";
import PersonCard from "./personCard/personCard.jsx";
const useStyles = makeStyles({
  cont: {
    paddingTop: 12,
    marginTop: -20,
    marginLeft: 350,
    marginRight: -400,
  },
});
export default function PeopleList() {
  const classes = useStyles();
  const people = useSelector((state) => selectPeople(state));
  return (
    <div className={classes.cont}>
      <Grid container>
        {people.map((person) => {
          return (
            <Grid item key={person.login.uuid}>
              <PersonCard person={person} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
