"use client";
import Image from "next/image";
import React, { useState } from "react";

const Card = ({ image, title, description }) => {
  const [open, setOpen] = useState(false);

  return (
    <article className="bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full">
      <div className="relative w-full aspect-[16/10] bg-slate-100 overflow-hidden">
        <Image
          src={image}
          className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-105"
          width={640}
          height={400}
          loading="lazy"
          decoding="async"
          alt={title}
        />
      </div>

      <div className="p-6 flex flex-col flex-1 justify-between gap-4">
        <div className="space-y-3">
          <h3 className="text-xl sm:text-2xl font-bold text-[#0C2F73] leading-snug">
            {title}
          </h3>
          <div
            className={`text-slate-600 relative text-sm sm:text-base leading-relaxed text-justify whitespace-pre-line transition-all duration-300 ${
              open ? "max-h-[1200px]" : "max-h-24 overflow-hidden cardDes"
            }`}
          >
            {description}
          </div>
        </div>

        <div className="pt-2">
          <button
            type="button"
            className="inline-flex items-center gap-1.5 bg-[#0C2F73] hover:bg-[#0d9cd4] text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors duration-200"
            onClick={() => setOpen((prev) => !prev)}
            aria-expanded={open}
          >
            <span>{open ? "Show Less" : "Read More"}</span>
            <span className="material-symbols-outlined text-[18px] leading-none">
              {open ? "keyboard_arrow_up" : "keyboard_arrow_down"}
            </span>
          </button>
        </div>
      </div>
    </article>
  );
};

export default Card;
