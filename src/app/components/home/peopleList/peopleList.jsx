import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import { selectPeople } from "../../../redux/selectors/selectPeople";
import {
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
} from "@material-ui/core";
const useStyles = makeStyles({
  cardContainer: {
    width: 250,
    minHeight: 300,
    margin: 16,
  },
  image: {
    width: 220,
    height: "auto",
  },
});
export default function PeopleList(props) {
  const classes = useStyles();
  const people = useSelector((state) => selectPeople(state));
  const handlePeopleClick = (ev) => {
    props.setPersonId(ev.target.id);
  };
  return people.map((person) => {
    return (
      <Grid item key={person.login.uuid}>
        <Card className={classes.cardContainer}>
          <CardContent>
            <img
              id={person.login.uuid}
              onClick={handlePeopleClick}
              className={classes.image}
              src={person.picture.large}
              alt="Persons Image"
            />
            <Divider />
            <Typography
              id={person.login.uuid}
              onClick={handlePeopleClick}
              variant="h6"
              component="h6"
              style={{ marginTop: 10 }}
            >
              {person.name.first} {person.name.last}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    );
  });
}
