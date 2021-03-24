import React, { useEffect, useState, useRef } from "react";
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
import CustomModal from "./modal.jsx";

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
  const [open,setOpen] = useState(false);
  const [id,setID] = useState("");
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
    setOpen(true);
    setID(ev.target.id);
  };
  const handleClose = () => {
    setOpen(false);
  }
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
  const Modal = () =>{
    if(open){
      return <CustomModal op={open} hClose={handleClose} perID={id} />
    }
    else return <div></div>
  }
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
        <Modal />
      </div>
    );
  } else {
    return <CircularProgress />;
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetch: (page) => dispatch(fetchPeople(page)),
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
