import { MenuItem, Select, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setNat } from "../redux/actions/action.jsx";

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
  console.log(props);
  localStorage.setItem("nationality", nationality);
  return (
    <div>
      <Typography variant="h4" component="h1">
        Settings
      </Typography>
      <Typography variant="h6" component="h4">
        Nationality
      </Typography>
      <Select value={nationality} onChange={handleChange}>
        <MenuItem value="CH">CH</MenuItem>
        <MenuItem value="ES">ES</MenuItem>
        <MenuItem value="FR">FR</MenuItem>
        <MenuItem value="GB">GB</MenuItem>
      </Select>
    </div>
  );
}

export default Settings;
