import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Divider, Typography } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { PERSON_MODAL_OPEN } from "../../../../redux/types/modalTypes";
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
export default function PersonCard(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const handlePeopleClick = (ev) => {
    dispatch({
      type: PERSON_MODAL_OPEN,
      payload: ev.target.id,
    });
  };
  return (
    <Card className={classes.cardContainer}>
      <CardContent>
        <img
          id={props.person.login.uuid}
          onClick={handlePeopleClick}
          className={classes.image}
          src={props.person.picture.large}
          alt="Persons Image"
        />
        <Divider />
        <Typography
          id={props.person.login.uuid}
          onClick={handlePeopleClick}
          variant="h6"
          component="h6"
          style={{ marginTop: 10 }}
        >
          {props.person.name.first} {props.person.name.last}
        </Typography>
      </CardContent>
    </Card>
  );
}
