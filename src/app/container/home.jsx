import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPeople, resetFetch } from "../../redux/actions/action.jsx";
import { CircularProgress, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CustomModal from "../components/home/modal/modal.jsx";
import Search from "../components/home/search/search.jsx";
import { selectPeople } from "../../redux/selectors/selectPeople.jsx";
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

  useEffect(() => {
    dispatch(resetFetch());
    dispatch(fetchPeople(1, nat));
  }, [nat]);

  const getData = (op, id) => {
    setOpen(op);
    setID(id);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (people.length !== 0 && people !== undefined) {
    return (
      <div>
        <Grid container>
          <Grid item>
            <Search />
          </Grid>
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
    );
  } else {
    return (
      <div className="div">
        <CircularProgress className={classes.progressBar} />
      </div>
    );
  }
}

export default Home;
