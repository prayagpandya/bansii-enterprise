import React from "react";
import Awards from "./Awards";

const AwardsCard = ({ awards, customClass = "" }) => {
  return (
    <section className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20 ${customClass}`}>
      <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-8">
        {awards.map((award, index) => (
          <Awards
            customClass="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300"
            key={index}
            img={award.img}
            Title={award.Title}
            Disc={award.Disc}
          />
        ))}
      </div>
    </section>
  );
};

export default AwardsCard;
