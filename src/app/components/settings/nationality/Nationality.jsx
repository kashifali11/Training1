import { MenuItem, Select, Typography, Grid } from "@material-ui/core";
import React from "react";

function Nationality(props) {
  const handleSelectMenuChange = (ev) => {
    props.setNationality(ev.target.value);
  };
  return (
    <div style={{ marginTop: 25 }}>
      <Grid container spacing={10}>
        <Grid item>
          <Typography variant="h6" component="h4">
            Nationality
          </Typography>
        </Grid>
        <Grid item>
          <Select value={props.nationality} onChange={handleSelectMenuChange}>
            <MenuItem value="CH">CH</MenuItem>
            <MenuItem value="ES">ES</MenuItem>
            <MenuItem value="FR">FR</MenuItem>
            <MenuItem value="GB">GB</MenuItem>
          </Select>
        </Grid>
      </Grid>
    </div>
  );
}

export default Nationality;
