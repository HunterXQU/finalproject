import React, {useState} from "react";
import "./BookingForm.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
export default function BookingForm ({submitData, availableTimes, updateTimes} ) {
    const navigate = useNavigate();
    const occasions = ["None", "Birthday", "Anniversary", "Engagement", "Other"]
    const [date, setDate] = useState("");
    const [people, setPeople] = useState("");
    const [occasion, setOccasion] = useState("");
    const [time, setTime] = useState(availableTimes[0]);


    function areAllFieldsValid () {
        return people !== '' && people >= 1 && people <= 10
        && date != ""
        && occasion != "";
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        submitData({date, people, time, occasion});
        navigate("/Confirmation")
    }
    function handleTimeChange(e){
        setTime(e.target.value)
    }
    function handleDateChange(e) {
        setDate(e.target.value);
        updateTimes(e.target.value);
      }
    function handlePeopleChange(e){
        setPeople(e.target.value)
    }

    return (
        <form className="registration-form" onSubmit={handleFormSubmit}>
            <h1 className="reserve-title">Little Lemon</h1>
            <h1 className="reserve-sub-title">Chicago</h1>
            <h1 className="reserve-sub-title">FIND A TABLE FOR ANY OCCASION</h1>
            <div className="registration-form-line">
                <label htmlFor="date">Select Date:</label>
                <input
                type="date"
                id="date"
                required={true}
                min={new Date().toISOString().split('T')[0]}
                value={date}
                onChange={handleDateChange}
                ></input>
            </div>
            <div className="registration-form-line">
                <label htmlFor="time">Select Time:</label>
                <select
                id="time"
                required={true}
                onChange={handleTimeChange}
                >
                    {availableTimes.map((times) =>
                    <option data-testid="times" key={times}>
                        {times}
                    </option>
                    )}
                </select>
            </div>
            <div className="registration-form-line">
                <label htmlFor="people">Number of People:</label>
                <input
                type="number"
                id="people"
                value={people}
                required={true}
                min={1}
                max={10}
                placeholder="1-10"
                onChange={handlePeopleChange}
                ></input>
            </div>

            <div className="registration-form-line">
                <label htmlFor="occasion">Occasion:</label>
                <select
                id="occasion"
                value={occasion}
                required={true}
                onChange={(e) => setOccasion(e.target.value)}
                >
                    {occasions.map((occasions) =>
                    <option data-testid="occasions" key={occasions}>
                        {occasions}
                    </option>
                    )}
                </select>
            </div>

            <div>
                <button className="form-submit" type="submit" disabled={!areAllFieldsValid}>
                        Book Table
                </button>
            </div>

        </form>
    );
}


