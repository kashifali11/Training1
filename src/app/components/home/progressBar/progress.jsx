import { CircularProgress, Typography } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";

export default function ProgressBar() {
  const loading = useSelector((state) => state.fetch.loading);
  const hasMore = useSelector((state) => state.fetch.hasMore);
  if (loading) {
    return <CircularProgress style={{ marginLeft: 800 }} />;
  }
  if (!hasMore) {
    return <Typography style={{ marginLeft: 800 }}>End of users catalog</Typography>;
  } else {
    return null;
  }
}
