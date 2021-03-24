import React, { useEffect, useCallback, useRef } from "react";
import { connect } from "react-redux";
import { fetchPeople } from "../redux/actions/action.jsx";
import {
  Card,
  CardContent,
  CircularProgress,
  Divider,
  Grid,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  cardCont: {
    width: 200,
    minHeight: 250,
    margin: 16,
  },
  image: {
    width: 170,
    height: "auto",
  },
});
function Home(props) {
  const classes = useStyles();
  const observer = useRef();
  const lastPersonRef = (node) =>{
    if(props.loading) return;
    if(observer.current) {
      observer.current.disconnect();
    }
    observer.current = new IntersectionObserver(entries=>{
      if(entries[0].isIntersecting){
        if(props.hasMore){
          console.log();
          props.fetch(props.page);
        }
      }
    })
    if(node) {
      observer.current.observe(node);
    }
  };
  useEffect(() => {
    props.fetch(1);
  }, []);

  const handleClick = (ev) => {
    console.log(ev.target.id);
  };
  const Progress = () => {
    if (props.loading) {
      return <CircularProgress />;
    } 
    if(!props.hasMore) {
      return <Typography>No More</Typography>
    } else {
      return <div></div>;
    }
  };
  if (props.people != []) {
    return (
      <div>
        <Grid container>
          {props.people.map((p, index) => {
            if (props.people.length === index + 1) {
              return (
                <Grid item key={p.login.uuid}>
                  <Card ref={lastPersonRef} className={classes.cardCont}>
                    <CardContent>
                      <img
                        id={p.login.uuid}
                        onClick={handleClick}
                        className={classes.image}
                        src={p.picture.large}
                        alt="Persons Image"
                      />
                      <Divider />
                      <Typography
                        id={p.login.uuid}
                        onClick={handleClick}
                        variant="h6"
                        component="p"
                        style={{ marginTop: 10 }}
                      >
                        {p.name.first} {p.name.last}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
            }
            else{
              return (
                <Grid item key={p.login.uuid}>
                  <Card className={classes.cardCont}>
                    <CardContent>
                      <img
                        id={p.login.uuid}
                        onClick={handleClick}
                        className={classes.image}
                        src={p.picture.large}
                        alt="Persons Image"
                      />
                      <Divider />
                      <Typography
                        id={p.login.uuid}
                        onClick={handleClick}
                        variant="h6"
                        component="p"
                        style={{ marginTop: 10 }}
                      >
                        {p.name.first} {p.name.last}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              )
            }
          })}
        </Grid>
        <Progress />
      </div>
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
    people: state.fetch.people,
    hasMore: state.fetch.hasMore,
    loading: state.fetch.loading,
    page: state.fetch.page,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
