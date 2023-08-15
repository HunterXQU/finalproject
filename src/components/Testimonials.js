import React from "react";
import "./Testimonials.css";
import Testimony from "./Testimony";
const testimoniesOne = [
    {
    name: "Patrick S.",
    description:
    "'The food here tastes good, and it gives homey vibes'",
    getImageSrc: () => require("./images/lemondessert.jpg"),
    background: "red",
    },
    {
    name: "Jenna W.",
    description:
    "'The service is really good, and the food is tasty.'",
    getImageSrc: () => require("./images/lemondessert.jpg"),
    background: "blue",
    },
  ];
const testimoniesTwo = [
    {
    name: "Kaiser R.",
    description:
    "'This place is great. Loved the atmosphere' ",
    getImageSrc: () => require("./images/lemondessert.jpg"),
    background: "orange",
    },
    {
    name: "Jake R.",
    description:
    "'The food here is great, especially the Bruschetta'",
    getImageSrc: () => require("./images/lemondessert.jpg"),
    background: "green",
    },
]
const Testimonials = () => {
    return(
        <div className="Testimonials">
            <h1 className="Testimonials-title">Testimonials</h1>
            <div className="Testimonials-container">
            {testimoniesOne.map((testimony) => (
            <Testimony
                className="Testimonials-container-one"
                background={testimony.background}
                key={testimony.name}
                name={testimony.name}
                description={testimony.description}
                imageSrc={testimony.getImageSrc()}
            />
             ))}
             {testimoniesTwo.map((testimony) => (
            <Testimony
                className="Testimonials-container-two"
                key={testimony.name}
                background={testimony.background}
                name={testimony.name}
                description={testimony.description}
                imageSrc={testimony.getImageSrc()}
            />
             ))}
            </div>
        </div>
    );
}
export default Testimonials;