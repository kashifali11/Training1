import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
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
import { selectPeople } from "../redux/selectors/selectPeople.jsx";

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

function Home() {
  const [open, setOpen] = useState(false);
  const [id, setID] = useState("");
  const classes = useStyles();
  const observer = useRef();
  const dispatch = useDispatch();
  const people = useSelector((state) => selectPeople(state));
  const hasMore = useSelector((state) => state.fetch.hasMore);
  const loading = useSelector((state) => state.fetch.loading);
  const page = useSelector((state) => state.fetch.page);
  const nat = useSelector((state) => state.settings.nationality);
  const lastPersonRef = (node) => {
    if (loading) return;
    if (observer.current) {
      observer.current.disconnect();
    }
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        if (hasMore) {
          dispatch(fetchPeople(page, nat));
        }
      }
    });
    if (node) {
      observer.current.observe(node);
    }
  };
  useEffect(() => {
    dispatch(resetFetch());
    dispatch(fetchPeople(1, nat));
  }, [nat]);

  const handleClick = (ev) => {
    setOpen(true);
    setID(ev.target.id);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const Progress = () => {
    if (loading) {
      return <CircularProgress />;
    }
    if (!hasMore) {
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
  if (people != []) {
    return (
      <div>
        <Search />
        <div className={classes.cont}>
          <Grid container>
            {people.map((p, index) => {
              if (people.length === index + 1) {
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

export default Home;
