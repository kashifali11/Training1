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

function PersonalDetailModal({
  personModalOpen,
  closePersonModal,
  personPicture,
  personalDetails,
}) {
  const classes = useStyles();
  return (
    personModalOpen && (
      <Dialog open={personModalOpen} onClose={closePersonModal}>
        <Card className={classes.cardContainer}>
          <CardContent>
            <img src={personPicture} alt="image" className={classes.media} />
            {personalDetails.map((detail) => {
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
