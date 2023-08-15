import React from "react";
import Card from "./Card";
import "./Specials.css";
import Button from "./Button"
const specials = [
    {
      title: "Lemon Desert",
      price: "$5.00",
      description:
        "This comes straight from grandma's recipe book, every last ingredient has been sourced and is authentic as can be imagined.",
      getImageSrc: () => require("./images/lemondessert.jpg"),
    },
    {
      title: "Greek Salad",
      price: "$12.99",
      description:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunch garlic and rosemary croutons.",
      getImageSrc: () => require("./images/greekSalad.jpg"),
    },
    {
      title: "Bruschetta",
      price: "$5.99",
      description:
        "Our traditional Bruschetta is made from grilled bread that has bean smeared with garlic and seasoned with sald and olive oil.",
      getImageSrc: () => require("./images/bruchetta.jpg"),
    },
  ];

const Specials = () => {
  return (
    <div className="specials__container">
      <div className="specials__title">
        <h1 className="first">This Week's Specials</h1>
        <Button className="second" buttonLink='/menu' buttonStyle="btn-primary">Online Menu</Button>
      </div>
      <div className="specials">
      {specials.map((special) => (
          <Card
            className="card"
            key={special.title}
            price={special.price}
            title={special.title}
            description={special.description}
            imageSrc={special.getImageSrc()}
          />
      ))}
      </div>
    </div>
  )
}

export default Specials;