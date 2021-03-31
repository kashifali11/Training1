import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPeople } from "../redux/actions/peopleActions";
import { CircularProgress, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PersonalDetailModal from "../components/home/personalDetailModal/personalDetailModal.jsx";
import Search from "../components/home/search/search.jsx";
import { selectPeople } from "../redux/selectors/selectPeople";
import PeopleList from "../components/home/peopleList/peopleList.jsx";
import ProgressBar from "../components/home/progressBar/progress.jsx";
import { isEmpty } from "../utils/flags";
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
  const [openPersonalModal, setOpenPersonalModal] = useState(false);
  const [personId, setPersonId] = useState("");
  const classes = useStyles();
  const dispatch = useDispatch();
  const people = useSelector((state) => selectPeople(state));
  const observer = useRef();
  const hasMore = useSelector((state) => state.peopleReducer.hasMore);
  const loading = useSelector((state) => state.peopleReducer.loading);
  const pageNo = useSelector((state) => state.peopleReducer.pageNo);
  const nationality = useSelector((state) => state.settingReducer.nationality);
  const lastPersonRef = (node) => {
    if (loading) return;
    if (observer.current) {
      observer.current.disconnect();
    }
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        if (hasMore) {
          dispatch(fetchPeople(pageNo, nationality, 50));
        }
      }
    });
    if (node) {
      observer.current.observe(node);
    }
  };

  const getPersonId = (id) => {
    setOpenPersonalModal(true);
    setPersonId(id);
  };

  const handlePersonalModalClose = () => {
    setOpenPersonalModal(false);
  };

  return (
    <div>
      <Search />
      {!isEmpty(people) ? (
        <div>
          <Grid container>
            <Grid item></Grid>
            <Grid item>
              <div className={classes.cont}>
                <Grid container>
                  <PeopleList setPersonId={getPersonId} />
                </Grid>
              </div>
              <ProgressBar />
            </Grid>
          </Grid>
          <div ref={lastPersonRef} />
          <PersonalDetailModal
            openModal={openPersonalModal}
            handleModalClose={handlePersonalModalClose}
            personalId={personId}
          />
        </div>
      ) : (
        <div>
          {pageNo === 20 ? (
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
