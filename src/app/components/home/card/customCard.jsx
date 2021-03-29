import React, { useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { selectPeople } from "../../../../redux/selectors/selectPeople.jsx";
import { fetchPeople } from "../../../../redux/actions/action.jsx";
import {
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
} from "@material-ui/core";
const useStyles = makeStyles({
  cardCont: {
    width: 250,
    minHeight: 300,
    margin: 16,
  },
  image: {
    width: 220,
    height: "auto",
  },
});
export default function CustomCard(props) {
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
  const handleClick = (ev) => {
    props.sendData(true, ev.target.id);
  };

  return people.map((p, index) => {
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
                variant="inherit"
                component="p"
                style={{ marginTop: 10, fontSize: "0.5rem" }}
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
  });
}
