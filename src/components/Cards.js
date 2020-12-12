import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>CHECK OUT OUR EPIC CUISINE!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="imgs/img-2.jpg"
              text="Explore the Japenese hidden taste deep inside the German Technique"
              label="Japenese-German"
              path="/menu"
            />
            <CardItem
              src="imgs/img-ind.jpg"
              text="Eat through the spices of India in a German winks"
              label="Indian-German"
              path="/menu"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="imgs/img-chinese.jpg"
              text="Set Sail in the Indian cuisine with a German touch"
              label="Chinese-German"
              path="/menu"
            />
            <CardItem
              src="imgs/img-pakistani.jpg"
              text="Experience Pakistani Mountain delicasy on Top of the German class "
              label="Pakistani-German"
              path="/menu"
            />
            <CardItem
              src="imgs/img-turkish.jpg"
              text="Ride through the Turkish delicasy with German techique"
              label="Turkish-German"
              path="/menu"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
