import React from "react";
import {
  Card,
  CardContent,
  Divider,
  Dialog,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getPerson } from "../../../redux/selectors/filterPrerson.js";
import { MODAL_CLOSE } from "../../../redux/types/modalTypes.js";

const useStyles = makeStyles({
  media: {
    marginLeft: 50,
    marginBottom: 10,
    minWidth: 150,
  },
  details: {
    padding: 3,
  },
  cardContainer: {
    width: 300,
    padding: 5,
  },
});

function PersonalDetailModal() {
  const classes = useStyles();
  const person = useSelector((state) => getPerson(state));
  const modalOpen = useSelector((state) => state.modalReducer.modalOpen);
  const dispatch = useDispatch();
  return (
    modalOpen && (
      <Dialog open={modalOpen} onClose={() => dispatch({ type: MODAL_CLOSE })}>
        <Card className={classes.cardContainer}>
          <CardContent>
            <img
              src={person.picture.large}
              alt="image"
              className={classes.media}
            />
            <Divider />
            <Typography className={classes.details}>
              Name: {person.name.first} {person.name.last}
            </Typography>
            <Divider />
            <Typography className={classes.details}>
              Street: {person.location.street.number}{" "}
              {person.location.street.name}
            </Typography>
            <Divider />
            <Typography className={classes.details}>
              City: {person.location.city}
            </Typography>
            <Divider />
            <Typography className={classes.details}>
              State: {person.location.state}
            </Typography>
            <Divider />
            <Typography className={classes.details}>
              Post Code: {person.location.postcode} {person.name.last}
            </Typography>
            <Divider />
            <Typography className={classes.details}>
              Phone: {person.phone}
            </Typography>
            <Divider />
            <Typography className={classes.details}>
              Cell: {person.cell}
            </Typography>
            <Divider />
            <Typography className={classes.details}>
              Nationality: {person.nat}
            </Typography>
          </CardContent>
        </Card>
      </Dialog>
    )
  );
}

export default PersonalDetailModal;
