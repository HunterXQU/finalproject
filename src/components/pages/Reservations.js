import "./Reservations.css"
import BookingForm from "./BookingForm";
import { useReducer } from "react";
import { fetchAPI, submitAPI } from "../../bookingsAPI";
import Nav from "../../Nav";
import Footer from "../../Footer";


const updateTimes = (availableTimes, date) => {
    const response = fetchAPI(new Date(date));
    return response;
  }
const initializeTimes = initialAvailableTimes =>
     [...initialAvailableTimes, ...fetchAPI(new Date())];

function Reservations () {
    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
    const submitData = (formData) => {
        const response = submitAPI(formData);
        return response;
    }
    return(
        <>
        <Nav/>
        <BookingForm availableTimes={availableTimes} updateTimes={dispatch} submitData={submitData}/>
        <Footer/>
        </>
    );
}
export default Reservations;