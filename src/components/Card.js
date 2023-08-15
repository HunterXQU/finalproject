import React from "react";
import "./Card.css"
import Button from "./Button";
const Card = ({title, price, description, imageSrc}) => {
    return(
        <div className="card">
            <img src={imageSrc}/>
            <div className="heading">
                <div className="title">{title}</div>
                <div className="price">{price}</div>
            </div>
            <div className="description">{description}</div>
            <div className="order"><Button buttonLink='/order' buttonStyle="btn-secondary">Order a delivery</Button></div>
        </div>
    );
};

export default Card;