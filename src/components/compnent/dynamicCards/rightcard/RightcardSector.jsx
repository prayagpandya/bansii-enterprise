import React from "react";
import ShowcaseCard from "../ShowcaseCard";

const RightCardNoLink = ({
  img,
  title,
  description,
  classnm,
  cltitle,
  cldesc,
  containMedia = false,
}) => {
  return (
    <ShowcaseCard
      img={img}
      title={title}
      description={description}
      classnm={classnm}
      cltitle={cltitle}
      cldesc={cldesc}
      containMedia={containMedia}
      mediaPosition="right"
    />
  );
};

export default RightCardNoLink;
