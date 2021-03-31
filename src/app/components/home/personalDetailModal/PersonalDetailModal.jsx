import React from "react";
import {
  Card,
  CardContent,
  Divider,
  Dialog,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
  media: {
    marginLeft: 70,
    marginBottom: 10,
    minWidth: 150,
  },
  details: {
    padding: 3,
  },
  cardContainer: {
    width: 330,
    padding: 5,
  },
});

function PersonalDetailModal(props) {
  const classes = useStyles();
  return (
    props.personModalOpen && (
      <Dialog open={props.personModalOpen} onClose={props.closePersonModal}>
        <Card className={classes.cardContainer}>
          <CardContent>
            <img
              src={props.personPicture}
              alt="image"
              className={classes.media}
            />
            {props.personalDetails.map((detail) => {
              return (
                <div key={detail}>
                  <Divider />
                  <Typography className={classes.details}>{detail}</Typography>
                </div>
              );
            })}
          </CardContent>
        </Card>
      </Dialog>
    )
  );
}

export default PersonalDetailModal;
