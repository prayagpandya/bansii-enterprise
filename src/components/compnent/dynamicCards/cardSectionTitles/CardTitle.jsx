import React from "react";

const CardTitle = ({ title, flagLine }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 md:pt-16 pb-6">
      <div className="max-w-3xl space-y-3">
        <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-widest text-[#0d9cd4]">
          Bansi Enterprise Solutions
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#0b2f6a] font-bold leading-tight">
          {title}
        </h2>
        <div className="w-20 h-1 bg-[#0d9cd4] rounded-full" />
        {flagLine && (
          <p className="pt-2 text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed">
            {flagLine}
          </p>
        )}
      </div>
    </div>
  );
};

export default CardTitle;
