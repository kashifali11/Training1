import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import PersonCard from "./personCard/PersonCard.jsx";
const useStyles = makeStyles({
  cont: {
    paddingTop: 12,
    marginTop: -20,
    marginLeft: 350,
    marginRight: -400,
  },
});
export default function PeopleList({ people, openPersonModalAction }) {
  const classes = useStyles();
  return (
    <div className={classes.cont}>
      <Grid container>
        {people.map((person) => {
          return (
            <Grid item key={person.login.uuid}>
              <PersonCard
                personPicture={person.picture.large}
                personId={person.login.uuid}
                personName={person.name.first + " " + person.name.last}
                openPersonModalAction={openPersonModalAction}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
