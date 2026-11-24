"use client";
import "./style.css";
import React from "react";

const CrouselCustom = () => {
  const items = [
    {
      year: "2021",
      description:
        "During the COVID-19 pandemic, Bansi Enterprise contributed extensively to healthcare & life services, deploying additional nursing staff to the healthcare department.",
    },
    {
      year: "2022",
      description:
        "During the second wave of COVID-19, Bansi Enterprise deployed more than 500 employees for dedicated housekeeping services at government hospitals.",
    },
    {
      year: "2023",
      description:
        "Awarded multiple government contracts while supporting hospitality and facility operations during the G20 event.",
    },
    {
      year: "2024",
      description:
        "Entrusted with venue cleaning and hospitality operations during Monsoon Fest 2024, delivering our duties seamlessly.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 space-y-6">
      <div className="space-y-2">
        <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-widest text-[#0d9cd4]">
          Our Track Record
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0E2E71]">
          Timeline and Milestones
        </h2>
      </div>
      <div className="scroll-container">
        <div className="scroll-content">
          {items.concat(items).map((item, index) => (
            <div className="scroll-item" key={index}>
              <p className="year">{item.year}</p>
              <p className="description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CrouselCustom;
