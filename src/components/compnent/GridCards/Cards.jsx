"use client";
import Image from "next/image";
import React, { useState } from "react";
// import "./Card.css"; // Import the CSS file

const Card = ({ image, title, description }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="col-span-1 p-6 gap-6 rounded-lg">
      <Image
        src={image}
        className="w-full rounded-lg max-h-64 object-cover object-top"
        width={300}
        height={300}
        alt={title}
      />
      <h1 className="text-3xl font-normal mt-4 text-[#0C2F73]">{title}</h1>
      <div
        className={` text-[#778491] relative text-lg mt-2 transition-all text-justify  duration-500 ${
          open
            ? "max-h-full bg-transparent"
            : "max-h-24 overflow-hidden cardDes"
        }`}
      >
        {description}
      </div>
      <button
        className="bg-[#0C2F73] text-white px-4 py-2 rounded mt-4"
        onClick={() => setOpen(!open)}
      >
        <span className="material-symbols-outlined bg-transparent">
          {open ? "keyboard_arrow_up" : "keyboard_arrow_down"}
        </span>
      </button>
    </div>
  );
};

export default Card;
