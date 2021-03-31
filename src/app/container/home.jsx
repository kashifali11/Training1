import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPeople } from "../redux/actions/peopleActions";
import { CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PersonalDetailModal from "../components/home/personalDetailModal/personalDetailModal.jsx";
import Search from "../components/home/search/search.jsx";
import { selectPeople } from "../redux/selectors/selectPeople";
import PeopleList from "../components/home/peopleList/peopleList.jsx";
import ProgressBar from "../components/home/progressBar/progress.jsx";
import { isEmpty } from "../utils/flags";
import CustomAppBar from "../components/common/appBar/appBar.jsx";
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
  progressBar: {
    marginLeft: 800,
  },
});

function Home() {
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

  return (
    <>
      <CustomAppBar />
      <Search />
      {!isEmpty(people) ? (
        <>
          <PeopleList />
          <div ref={lastPersonRef} />
          <PersonalDetailModal />
          <ProgressBar />
        </>
      ) : (
        <CircularProgress className={classes.progressBar} />
      )}
    </>
  );
}

export default Home;
