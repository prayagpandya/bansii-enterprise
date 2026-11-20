"use client";
import "./style.css";
import React from "react";

const CrouselCustom = () => {
  const items = [
    {
      year: "2021",
      description:
        "During the pandemic of COVID-19, Bansi Enterprise contributed a lot to healthcare & life services. Therefore, we provide extra nursing service to the healthcare department.",
    },
    {
      year: "2022",
      description:
        "In this year too, there was the second wave of the coronavirus. Thus, Bansi Enterprise provided more than 500 employees to do housekeeping services at government hospitals.",
    },
    {
      year: "2023",
      description:
        "Awarded to work with many government contracts while joining in the G20 event.",
    },
    {
      year: "2024",
      description:
        "Assigned to provide service during the Monsoon Fest - 2024, and we did our duty perfectly.",
    },
  ];

  return (
    <div className="flex flex-col items-center mt-12">
      <h5 className="text-3xl font-bold text-[#0E2E71] w-[85%]">
        Timeline And Milestone
      </h5>
      <div className="scroll-container">
        <div className="scroll-content">
          {/* Repeat the items twice for seamless infinite scrolling */}
          {items.concat(items).map((item, index) => (
            <div className="scroll-item" key={index}>
              <p className="year">{item.year}</p>
              <p className="description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CrouselCustom;
