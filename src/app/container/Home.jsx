import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPeople } from "../redux/actions/peopleActions";
import { CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PersonalDetailModal from "../components/home/personalDetailModal/PersonalDetailModal.jsx";
import PeopleSearchBar from "../components/home/peopleSearchBar/PeopleSearchBar.jsx";
import { selectPeople } from "../redux/selectors/filterPrerson";
import PeopleList from "../components/home/peopleList/PeopleList.jsx";
import ProgressBar from "../components/home/progressBar/Progress.jsx";
import { isEmpty, isUndefined } from "../utils/flags";
import CustomAppBar from "../components/common/appBar/AppBar.jsx";
import { getPerson } from "../redux/selectors/filterPrerson";
import { PERSON_MODAL_OPEN, PERSON_MODAL_CLOSE } from "../redux/types/modalTypes";
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
  const person = useSelector((state) => getPerson(state));
  var personalDetails = []
  if(!isUndefined(person)){
    personalDetails = [
      "Name: "+person.name.first+" "+person.name.last,
      "Street: "+person.location.street.number+" "+person.location.street.name,
      "City: "+person.location.city,
      "State: "+person.location.state,
      "Post Code: "+person.location.postcode,
      "Phone: "+person.phone,
      "Cell: "+person.cell,
      "Nationality: "+person.nat
    ];
  }
  const personModalOpen = useSelector(
    (state) => state.modalReducer.personModal.modalOpen
  );
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
      <PeopleSearchBar />
      {!isEmpty(people) ? (
        <>
          <PeopleList
            people={people}
            openPersonModalAction={(id) =>
              dispatch({
                type: PERSON_MODAL_OPEN,
                payload: id,
              })
            }
          />
          <div ref={lastPersonRef} />
          <PersonalDetailModal
            personalDetails={personalDetails}
            personPicture={person?.picture.large}
            personModalOpen={personModalOpen}
            closePersonModal={() => dispatch({ type: PERSON_MODAL_CLOSE })}
          />
          <ProgressBar loading={loading} hasMore={hasMore} />
        </>
      ) : (
        <CircularProgress className={classes.progressBar} />
      )}
    </>
  );
}

export default Home;
