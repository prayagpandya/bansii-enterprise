import React from "react";
import ShowcaseCard from "../ShowcaseCard";

const RightCard = ({ img, title, description, link }) => {
  return (
    <ShowcaseCard
      img={img}
      title={title}
      description={description}
      link={link || "/Services"}
      mediaPosition="right"
    />
  );
};

export default RightCard;
