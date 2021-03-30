import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPeople, resetFetch } from "../redux/actions/userActions";
import { CircularProgress, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CustomModal from "../components/home/modal/modal.jsx";
import Search from "../components/home/search/search.jsx";
import { selectPeople } from "../redux/selectors/selectPeople";
import CustomCard from "../components/home/card/customCard.jsx";
import ProgressBar from "../components/home/progressBar/progress.jsx";
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
  cont: {
    paddingTop: 12,
    marginTop: -20,
    marginLeft: 350,
    marginRight: -400,
  },
  progressBar: {
    marginLeft: 800,
  },
});

function Home() {
  const [open, setOpen] = useState(false);
  const [id, setID] = useState("");
  const classes = useStyles();
  const dispatch = useDispatch();
  const people = useSelector((state) => selectPeople(state));
  const nat = useSelector((state) => state.settings.nationality);
  const searchKey = useSelector((state) => state.settings.search);
  const page = useSelector((state) => state.fetch.page);
  useEffect(() => {
    dispatch(resetFetch());
    dispatch(fetchPeople(1, nat));
  }, [nat]);

  useEffect(() => {
    if (searchKey !== "" && people.length === 0 && page < 20) {
      dispatch(fetchPeople(page, nat));
    }
  }, [searchKey, page]);
  const getData = (op, id) => {
    setOpen(op);
    setID(id);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Search />
      {people.length !== 0 && people !== undefined ? (
        <div>
          <Grid container>
            <Grid item></Grid>
            <Grid item>
              <div className={classes.cont}>
                <Grid container>
                  <CustomCard sendData={getData} />
                </Grid>
              </div>
              <ProgressBar />
            </Grid>
          </Grid>
          <CustomModal op={open} hClose={handleClose} perID={id} />
        </div>
      ) : (
        <div>
          {page === 20 ? (
            <Typography className={classes.progressBar}>
              No Results Found Try Something Different
            </Typography>
          ) : (
            <CircularProgress className={classes.progressBar} />
          )}
        </div>
      )}
    </div>
  );
}

export default Home;
