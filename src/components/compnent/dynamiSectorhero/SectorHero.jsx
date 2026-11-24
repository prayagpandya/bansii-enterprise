import React from "react";

const SectorHero = ({ img, title, description }) => {
  return (
    <section className="relative w-full min-h-[58vh] md:min-h-[66vh] flex items-center pt-32 pb-14 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#0E2E71]">
      <div
        className="absolute inset-0 bg-cover bg-center md:bg-top"
        style={{ backgroundImage: `url(${img.src})` }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#0E2E71]/75 via-[#0E2E71]/45 to-black/25"
        aria-hidden="true"
      />
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="max-w-xl bg-white/95 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl border border-white/60 space-y-4">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0b2f6a] leading-tight">
            {title}
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-slate-600 text-justify leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectorHero;
