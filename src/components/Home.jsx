import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPeople } from "../redux/actions/action.jsx";
import { Card, CardHeader, CircularProgress, Grid } from "@material-ui/core";
function Home(props) {
  useEffect(() => {
    props.fetch();
  }, []);
  const handleClick = (ev) => {
    console.log(ev.target.id);
  };
  if (props.people != undefined) {
    return (
      <Grid container>
        {props.people.map((p, index) => {
          return (
            <Grid
              item
              id={p.login.uuid}
              key={p.login.uuid}
              onClick={handleClick}
            >
              <Card>
                  <CardHeader>
                  <img src={p.picture.thumbnail} alt="Persons Image" />
                  </CardHeader>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    );
  } else {
    return <CircularProgress />;
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetch: () => dispatch(fetchPeople()),
  };
};
const mapStateToProps = (state) => {
  return {
    people: state.people,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
