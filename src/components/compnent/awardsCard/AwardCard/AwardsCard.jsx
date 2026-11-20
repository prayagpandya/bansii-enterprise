import React from "react";
import Awards from "./Awards";

const AwardsCard = ({ awards, customClass }) => {
  return (
    <div
      className={`${customClass} grid w-full grid-cols-1  md:grid-cols-2 lg:gap-32 px-4 md:px-32 md:gap-10 lg:px-56 h-full md:py-4`}
    >
      {awards.map((award, index) => (
        <Awards
          customClass={
            " col-span-1 md:p-6 py-5  bg-white md:flex md:flex-col mt-20 md:flex-row items-center max-w-lg border rounded-lg shadow-lg hover:shadow-gray-300 hover:shadow-xl justify-center"
          }
          key={index}
          img={award.img}
          Title={award.Title}
          Disc={award.Disc}
        />
      ))}
    </div>
  );
};

export default AwardsCard;
