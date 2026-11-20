import React from "react";
import Awards from "../AwardCard/Awards";
import Awards2 from "./Awards2";

const Accreditions = ({ accreditions, customClass }) => {
  return (
    <div
      className={`${customClass} grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 md:px-16 md:gap-6 px-8 py-4 md:ml-[60px] xl:pb-40 pb-10`}
    >
      {accreditions.map((accredition, index) => (
        <Awards2
          customClass={
            "flex flex-col md:p-6 py-5 col-span-1 bg-white mt-20 md:flex-row items-center w-full border rounded-lg shadow-lg hover:shadow-gray-300 hover:shadow-xl "
          }
          key={index}
          img={accredition.img}
          Title={accredition.Title}
          Disc={accredition.Disc}
        />
      ))}
    </div>
  );
};

export default Accreditions;
