import { CircularProgress, Typography } from "@material-ui/core";
import React from "react";

export default function ProgressBar(props) {
  if (props.loading) {
    return <CircularProgress style={{ marginLeft: 800 }} />;
  }
  if (!props.hasMore) {
    return (
      <Typography style={{ marginLeft: 800 }}>End of users catalog</Typography>
    );
  } else {
    return null;
  }
}
