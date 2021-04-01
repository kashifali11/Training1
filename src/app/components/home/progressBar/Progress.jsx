import { CircularProgress, Typography } from "@material-ui/core";
import React from "react";

export default function ProgressBar({loading,hasMore}) {
  if (loading) {
    return <CircularProgress style={{ marginLeft: 800 }} />;
  }
  if (!hasMore) {
    return (
      <Typography style={{ marginLeft: 800 }}>End of users catalog</Typography>
    );
  } else {
    return null;
  }
}
