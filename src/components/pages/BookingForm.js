import React, {useState} from "react";
import "./BookingForm.css";
import { Link } from "react-router-dom";
export default function BookingForm (props) {
    const [date, setDate] = useState("");
    const [people, setPeople] = useState("");
    const [occasion, setOccasion] = useState("");
    const [time, setTime] = useState(props.availableTimes[0]);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const isDateValid = () => date !== '';
    const isNumberOfGuestsValid = () => people !== '';
    
  
    const areAllFieldsValid = () => {
      isDateValid() && isNumberOfGuestsValid() ;
    }
    function handleFormSubmit(e) {
        e.preventDefault();
        setFormSubmitted(props.submitData({date, time, people, occasion}));
    }
    function handleTimeChange(e){
        setTime(e.target.value)
    }
    function handleDateChange(e) {
        setDate(e.target.value);
        props.updateTimes(e.target.value);
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
                    {props.availableTimes.map((times) =>
                    <option>
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
                onChange={(e) => setPeople(e.target.value)}
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
                    <option>None</option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                    <option>Engagement</option>
                    <option>Other</option>
                </select>
            </div>

            <div>
            {formSubmitted ? (
                    <Link to="/Confirmation" className=''>
                        <button className="form-submit" type="submit" disabled={!areAllFieldsValid}>
                            Book Table
                        </button>
                    </Link>
                ) : (
                    <button className="form-submit" type="submit" disabled={!areAllFieldsValid}>
                            Book Table
                        </button>
                )}
            </div>

        </form>
    );
}


