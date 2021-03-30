import React from "react";
import {
  Card,
  CardContent,
  Divider,
  Dialog,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { useSelector } from "react-redux";
import { getPerson } from "../../../redux/selectors/filterPrerson.js";

const useStyles = makeStyles({
  media: {
    marginLeft: 50,
    marginBottom: 10,
    minWidth: 150,
  },
  details: {
    padding: 3,
  },
  cardCont: {
    width: 300,
    padding: 5,
  },
});
function CustomModal(props) {
  const classes = useStyles();
  const person = useSelector((state) => getPerson(state, props.perID));
  if (props.op) {
    if (person[0] !== undefined) {
      return (
        <Dialog open={props.op} onClose={props.hClose}>
          <Card className={classes.cardCont}>
            <CardContent>
              <img
                src={person[0].picture.large}
                alt="image"
                className={classes.media}
              />
              <Divider />
              <Typography className={classes.details}>
                Name: {person[0].name.first} {person[0].name.last}
              </Typography>
              <Divider />
              <Typography className={classes.details}>
                Street: {person[0].location.street.number}{" "}
                {person[0].location.street.name}
              </Typography>
              <Divider />
              <Typography className={classes.details}>
                City: {person[0].location.city}
              </Typography>
              <Divider />
              <Typography className={classes.details}>
                State: {person[0].location.state}
              </Typography>
              <Divider />
              <Typography className={classes.details}>
                Post Code: {person[0].location.postcode} {person[0].name.last}
              </Typography>
              <Divider />
              <Typography className={classes.details}>
                Phone: {person[0].phone}
              </Typography>
              <Divider />
              <Typography className={classes.details}>
                Cell: {person[0].cell}
              </Typography>
              <Divider />
              <Typography className={classes.details}>
                Nationality: {person[0].nat}
              </Typography>
            </CardContent>
          </Card>
        </Dialog>
      );
    } else {
      return <div></div>;
    }
  } else {
    return <div />;
  }
}

export default CustomModal;
