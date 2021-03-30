import { MenuItem, Select, Typography, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setNationality } from "../redux/actions/settingsAction";

function Settings() {
  const dispatch = useDispatch();
  const nationality = useSelector((state) => state.settingReducer.nationality);
  const handleChange = (ev) => {
    dispatch(setNationality(ev.target.value));
  };
  return (
    <div style={{ margin: "auto", width: "70%" }}>
      <Typography variant="h4" component="h1">
        Settings
      </Typography>
      <div style={{ marginTop: 25 }}>
        <Grid container spacing={10}>
          <Grid item>
            <Typography variant="h6" component="h4">
              Nationality
            </Typography>
          </Grid>
          <Grid item>
            <Select value={nationality} onChange={handleChange}>
              <MenuItem value="CH">CH</MenuItem>
              <MenuItem value="ES">ES</MenuItem>
              <MenuItem value="FR">FR</MenuItem>
              <MenuItem value="GB">GB</MenuItem>
            </Select>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Settings;
