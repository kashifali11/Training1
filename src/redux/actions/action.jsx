import { FETCH_PEOPLE } from "../types.jsx";
import axios from 'axios';
export const fetchPeople = () => (dispatch,state) =>{
    axios.get("https://randomuser.me/api/?results=50")
    .then(res=>{dispatch({
        type: FETCH_PEOPLE,
        payload: res.data.results,
    })});
}