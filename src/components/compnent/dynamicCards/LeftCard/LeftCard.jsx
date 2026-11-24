import React from "react";
import ShowcaseCard from "../ShowcaseCard";

const LeftCard = ({ img, title, description, link }) => {
  return (
    <ShowcaseCard
      img={img}
      title={title}
      description={description}
      link={link || "/Services"}
      mediaPosition="left"
    />
  );
};

export default LeftCard;
