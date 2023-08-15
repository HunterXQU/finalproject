import "./CallToAction.css";
import React, {useState} from "react";
import Button from "./Button";
import restaurant from "./images/restaurantfood.jpg";
export const CallToAction = () => {
    const [button, setButton] = useState(true)
    return(
        <div className="hero-section">
            <div className="hero-section-one">
                <div><h1 className="hero-section-one-main-heading">Little Lemon</h1></div>
                <div><h2 className="hero-section-one-sec-heading">Chicago</h2></div>
                <div><p  className="hero-section-one-sec-description">We are a family owned Mediterranean reastaurant, focused on traditional recipes served with a modern twist.</p></div>
                <div><Button className="hero-button" buttonStyle="btn--primary" buttonLink='/reservations'>Reserve a Table</Button></div>
            </div>
            <div className="hero-section-two">
                <img src={restaurant}/>
            </div>
        </div>
    );
};