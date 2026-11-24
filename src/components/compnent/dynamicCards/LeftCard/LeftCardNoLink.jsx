import React from "react";
import ShowcaseCard from "../ShowcaseCard";

const LeftCardNoLink = ({
  img,
  title,
  description,
  clsimgdiv,
  containMedia = false,
}) => {
  return (
    <ShowcaseCard
      img={img}
      title={title}
      description={description}
      clsimgdiv={clsimgdiv}
      containMedia={containMedia}
      mediaPosition="left"
    />
  );
};

export default LeftCardNoLink;
