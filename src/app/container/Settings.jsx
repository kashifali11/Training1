import { Typography } from "@material-ui/core";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CustomAppBar from "../components/common/appBar/AppBar.jsx";
import Nationality from "../components/settings/nationality/Nationality.jsx";
import { setNationality } from "../redux/actions/settingsAction";

function Settings() {
  const dispatch = useDispatch();
  const nationality = useSelector((state) => state.settingReducer.nationality);
  return (
    <div style={{ margin: "auto", width: "70%" }}>
      <CustomAppBar />
      <Typography variant="h4" component="h1">
        Settings
      </Typography>
      <Nationality
        setNationality={(nationality) => dispatch(setNationality(nationality))}
        nationality={nationality}
      />
    </div>
  );
}

export default Settings;
