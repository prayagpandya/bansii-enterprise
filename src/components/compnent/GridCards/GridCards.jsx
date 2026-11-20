"use client";
import React from "react";
import Card from "./Cards";

const GridCards = ({ cardData }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:px-20 py-10">
      {cardData.map((card, index) => (
        <Card
          key={index}
          image={card.image}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
};

export default GridCards;
