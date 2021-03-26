import { MenuItem, Select, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { setNat } from "../redux/actions/action.jsx";

function Settings(props) {
  const [nationality, setNationality] = useState("");
  useEffect(() => {
    setNationality(props.nat);
  }, []);
  const handleChange = (ev) => {
    setNationality(ev.target.value);
    props.setNat(ev.target.value);
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
const mapStateToProps = (state) => {
  return {
    nat: state.settings.nationality,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setNat: (nat) => dispatch(setNat(nat)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
