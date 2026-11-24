import React from "react";
import "./style.css";

const SECTORS = [
  {
    title: "Healthcare and Life Services",
    bgClass: "bgimg2",
  },
  {
    title: "Education",
    bgClass: "bgimg4",
  },
  {
    title: "IT/ITES",
    bgClass: "bgimg5",
  },
  {
    title: "Hospitality",
    bgClass: "bgimg6",
  },
  {
    title: "Banking and Finance",
    bgClass: "bgimg7",
  },
];

const GridCardsLink = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="h-72 sm:h-80 rounded-2xl p-8 flex flex-col justify-center gap-4 bg-[#0E2E71] shadow-md">
          <span className="text-blue-200 underline text-lg italic">
            Take a Tour
          </span>
          <h2 className="border-b border-blue-400 pb-3 text-white text-3xl xl:text-4xl font-bold leading-snug">
            SECTORS WE WORK IN
          </h2>
          <span className="text-sm text-blue-100 font-medium">
            Explore tailored facility &amp; manpower solutions
          </span>
        </div>

        {SECTORS.map((sector) => (
          <div
            key={sector.title}
            className={`group relative h-72 sm:h-80 rounded-2xl overflow-hidden flex flex-col justify-end p-6 shadow-md ${sector.bgClass}`}
          >
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent group-hover:from-[#0E2E71]/85 transition-colors duration-300"
              aria-hidden="true"
            />
            <span className="relative z-10 inline-flex items-center justify-center px-4 py-2.5 text-base font-semibold bg-[#0E2E71] text-white rounded-xl group-hover:bg-[#0d9cd4] transition-colors duration-200 text-center shadow-sm">
              {sector.title}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GridCardsLink;
