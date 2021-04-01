import { Typography } from "@material-ui/core";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CustomAppBar from "../components/common/appBar/AppBar.jsx";
import SelectSetting from "../components/settings/selectSetting/SelectSetting.jsx";
import { setNationality } from "../redux/actions/settingsAction";

function Settings() {
  const dispatch = useDispatch();
  const nationality = useSelector((state) => state.settingReducer.nationality);
  const nationalities = ["CH", "ES", "FR", "GB"];
  const setNationalityInSettings = (ev) =>{
    dispatch(setNationality(ev.target.value))
  }
  return (
    <div style={{ margin: "auto", width: "70%" }}>
      <CustomAppBar />
      <Typography variant="h4" component="h1">
        Settings
      </Typography>
      <SelectSetting 
        nationality={nationality}
        nationalities={nationalities}
        settingName="Nationality"
        handleSettingsChange={setNationalityInSettings}
      />
    </div>
  );
}

export default Settings;
