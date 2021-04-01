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
export default function PersonCard({
  openPersonModalAction,
  personName,
  personPicture,
  personId,
}) {
  const classes = useStyles();
  return (
    <Card className={classes.cardContainer}>
      <CardContent>
        <img
          id={personId}
          onClick={openPersonModalAction}
          className={classes.image}
          src={personPicture}
          alt="Persons Image"
        />
        <Divider />
        <Typography
          id={personId}
          onClick={openPersonModalAction}
          variant="h6"
          component="h6"
          style={{ marginTop: 10 }}
        >
          {personName}
        </Typography>
      </CardContent>
    </Card>
  );
}
