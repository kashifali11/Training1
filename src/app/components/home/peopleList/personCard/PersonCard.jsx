import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Divider, Typography } from "@material-ui/core";

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
  const handlePeopleClick = (ev) => {
    props.openPersonModalAction(ev.target.id);
  };
  return (
    <Card className={classes.cardContainer}>
      <CardContent>
        <img
          id={props.personId}
          onClick={handlePeopleClick}
          className={classes.image}
          src={props.personPicture}
          alt="Persons Image"
        />
        <Divider />
        <Typography
          id={props.personId}
          onClick={handlePeopleClick}
          variant="h6"
          component="h6"
          style={{ marginTop: 10 }}
        >
          {props.personName}
        </Typography>
      </CardContent>
    </Card>
  );
}
