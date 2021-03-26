import React,{ useState,useEffect } from 'react'
import { Card, CardContent, Dialog, makeStyles, Typography} from "@material-ui/core";
import { connect } from 'react-redux';
import { getPerson } from "../redux/selectors.jsx/filterPrerson.jsx";

function CustomModal(props) {
    const [person, setperson] = useState([]);
    useEffect(() => {
        setperson(props.person(props.perID))
    }, [props.op])
    
    if(person[0]!==undefined){
        return (
            <Dialog
                open={props.op}
                onClose={props.hClose}
            >
                <Card>
                    <CardContent>
                        <Typography>Name: {person[0].name.first} {person[0].name.last}</Typography>
                        <Typography>Street: {person[0].location.street.number} {person[0].location.street.name}</Typography>
                        <Typography>City: {person[0].location.city}</Typography>
                        <Typography>State: {person[0].location.state}</Typography>
                        <Typography>Post Code: {person[0].location.postcode} {person[0].name.last}</Typography>
                        <Typography>Phone: {person[0].phone}</Typography>
                        <Typography>Cell: {person[0].cell}</Typography>
                    </CardContent>
                </Card>
            </Dialog>
        )
    }
    else{ 
        return <div></div>
    }
}
const mapStateToProps = (state) =>{
    return {
        person:(id)=> getPerson(state,id),
    }
}
export default connect(mapStateToProps,null)(CustomModal)