import { MenuItem, Select, Typography, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setNat } from "../redux/actions/settingsAction";

function Settings(props) {
  const [nationality, setNationality] = useState("");
  const dispatch = useDispatch();
  const nat = useSelector((state) => state.settings.nationality);
  useEffect(() => {
    setNationality(nat);
  }, []);
  const handleChange = (ev) => {
    setNationality(ev.target.value);
    dispatch(setNat(ev.target.value));
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
