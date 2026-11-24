import Image from "next/image";
import React from "react";

const Awards2 = ({ img, Title, Disc, customClass = "" }) => {
  return (
    <article
      className={`w-full flex flex-col sm:flex-row items-center gap-6 ${customClass}`}
    >
      <div className="w-32 sm:w-36 shrink-0 flex items-center justify-center bg-slate-50 rounded-xl p-3 border border-slate-100">
        <Image
          src={img}
          alt={Title}
          width={180}
          height={180}
          className="w-full h-auto object-contain rounded-lg"
        />
      </div>
      <div className="flex-1 text-center sm:text-left space-y-2.5">
        <h2 className="text-lg lg:text-xl font-bold text-[#0E2E71] leading-snug">
          {Title}
        </h2>
        {Array.isArray(Disc) ? (
          Disc.map((item, index) => (
            <p
              key={index}
              className="text-sm lg:text-base text-slate-600 leading-relaxed"
            >
              {item}
            </p>
          ))
        ) : (
          <p className="text-sm lg:text-base text-slate-600 leading-relaxed text-justify sm:text-left">
            {Disc}
          </p>
        )}
      </div>
    </article>
  );
};

export default Awards2;
