"use client";
import React from "react";
import Card from "./Cards";

const GridCards = ({ cardData }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        {cardData.map((card, index) => (
          <Card
            key={`${card.title}-${index}`}
            image={card.image}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default GridCards;
