import React from "react";

const Locations = ({ MapLink, OfficeName, Address, Email, Phone }) => {
  return (
    <section className="bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          <div className="rounded-2xl overflow-hidden md:col-span-2 border border-slate-200 shadow-sm min-h-[300px]">
            <iframe
              src={MapLink}
              width="100%"
              height="100%"
              className="min-h-[300px] w-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
          <div className="bg-white p-6 sm:p-8 flex flex-col justify-center rounded-2xl shadow-sm border border-slate-200 space-y-4">
            <h3 className="text-xl font-bold text-[#0E2E71]">{OfficeName}</h3>
            <div className="space-y-2 text-sm sm:text-base text-slate-600">
              <p>{Address}</p>
              <p>{Phone}</p>
              <p>{Email}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;
