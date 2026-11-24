import React from "react";
import Awards2 from "./Awards2";

const Accreditions = ({ accreditions, customClass = "" }) => {
  return (
    <section className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20 ${customClass}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {accreditions.map((accredition, index) => (
          <Awards2
            customClass="bg-white rounded-2xl p-6 sm:p-8 border border-[#112C76]/25 shadow-sm hover:shadow-lg transition-all duration-300"
            key={index}
            img={accredition.img}
            Title={accredition.Title}
            Disc={accredition.Disc}
          />
        ))}
      </div>
    </section>
  );
};

export default Accreditions;
