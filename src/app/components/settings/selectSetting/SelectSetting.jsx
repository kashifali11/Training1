import { MenuItem, Select, Typography, Grid } from "@material-ui/core";
import React from "react";

function SelectSetting({
  settingName,
  handleSettingsChange,
  nationalities,
  nationality,
}) {
  return (
    <div style={{ marginTop: 25 }}>
      <Grid container spacing={10}>
        <Grid item>
          <Typography variant="h6" component="h4">
            {settingName}
          </Typography>
        </Grid>
        <Grid item>
          <Select value={nationality} onChange={handleSettingsChange}>
            {nationalities.map((nationality) => {
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

export default SelectSetting;
