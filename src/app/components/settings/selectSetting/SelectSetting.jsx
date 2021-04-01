import { MenuItem, Select, Typography, Grid } from "@material-ui/core";
import React from "react";

function Nationality(props) {
  return (
    <div style={{ marginTop: 25 }}>
      <Grid container spacing={10}>
        <Grid item>
          <Typography variant="h6" component="h4">
            {props.settingName}
          </Typography>
        </Grid>
        <Grid item>
          <Select
            value={props.nationality}
            onChange={props.handleSettingsChange}
          >
            {props.nationalities.map((nationality) => {
              return (
                <MenuItem key={nationality} value={nationality}>
                  {nationality}
                </MenuItem>
              );
            })}
          </Select>
        </Grid>
      </Grid>
    </div>
  );
}

export default Nationality;
