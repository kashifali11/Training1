import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import { fetchPeople, resetFetch } from "../redux/actions/action.jsx";
import {
  Card,
  CardContent,
  CircularProgress,
  Divider,
  Grid,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CustomModal from "./modal.jsx";
import Search from "./search.jsx";
import { getPeopleFilteredByKeyword } from "../redux/selectors.jsx/filterPrerson.jsx";

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
  cont: {
    paddingTop: 120,
  },
});
function Home(props) {
  const [open, setOpen] = useState(false);
  const [id, setID] = useState("");
  const classes = useStyles();
  const observer = useRef();
  
  const lastPersonRef = (node) => {
    if (props.loading) return;
    if (observer.current) {
      observer.current.disconnect();
    }
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        if (props.hasMore) {
          props.fetch(props.page, props.nat);
        }
      }
    });
    if (node) {
      observer.current.observe(node);
    }
  };
  useEffect(() => {
    props.reset();
    props.fetch(1, props.nat);
  }, [props.nat]);

  const handleClick = (ev) => {
    setOpen(true);
    setID(ev.target.id);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const Progress = () => {
    if (props.loading) {
      return <CircularProgress />;
    }
    if (!props.hasMore) {
      return <Typography>End of users catalog</Typography>;
    } else {
      return <div />;
    }
  };
  const Modal = () => {
    if (open) {
      return <CustomModal op={open} hClose={handleClose} perID={id} />;
    } else return <div />;
  };
  if (props.people != []) {
    return (
      <div>
        <Search />
        <div className={classes.cont}>
          <Grid container >
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
              } else {
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
                );
              }
            })}
          </Grid>
        </div>
        <Progress />
        <Modal />
      </div>
    );
  } else {
    return <CircularProgress />;
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetch: (page, nat) => dispatch(fetchPeople(page, nat)),
    reset: () => dispatch(resetFetch()),
  };
};
const mapStateToProps = (state) => {
  let p;
  if(state.settings.search===""){
    p = state.fetch.people.slice(0,state.fetch.people.length-50)
  }
  else{
    p = getPeopleFilteredByKeyword(state);
  }
  return {
    people: p,
    hasMore: state.fetch.hasMore,
    loading: state.fetch.loading,
    page: state.fetch.page,
    nat: state.settings.nationality,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
