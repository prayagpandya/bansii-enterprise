import React from "react";
import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
import geoMapImg from "@/assets/geographical-presence.webp";

const OFFICE_LOCATIONS = [
  {
    region: "Gujarat",
    office: "Rajkot – Gujarat State",
    city: "Rajkot",
  },
  {
    region: "Union Territory",
    office: "UT, Diu, Daman & Dadra - Nagar Haveli",
    city: "Daman & Silvassa",
  },
  {
    region: "Maharashtra",
    office: "Raigad – Maharashtra State",
    city: "Raigad / Mumbai Region",
  },
  {
    region: "NCR",
    office: "Rohini Sector – Delhi State",
    city: "New Delhi",
  },
];

const GeographicalPresence = () => {
  return (
    <section className="w-full bg-slate-50 py-14 md:py-20 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-widest text-[#0d9cd4]">
                Pan-India Footprint
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0E2E71] leading-tight">
                Geographical Presence
              </h2>
              <div className="w-20 h-1 bg-[#0d9cd4] rounded-full" />
              <p className="text-base text-slate-600 text-justify leading-relaxed pt-1">
                Delivering trusted manpower outsourcing and integrated facility
                management solutions across strategic regional offices and
                industrial hubs in India.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#0E2E71]">
                Office Locations
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                {OFFICE_LOCATIONS.map((loc) => (
                  <li
                    key={loc.office}
                    className="flex items-start gap-3.5 p-4 bg-white rounded-xl border border-slate-200 shadow-sm hover:border-[#0d9cd4] transition-colors"
                  >
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#0E2E71] text-white">
                      <FaMapMarkerAlt className="w-4 h-4" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm sm:text-base font-semibold text-[#0E2E71] leading-snug">
                        {loc.office}
                      </p>
                      <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                        {loc.region} &middot; {loc.city}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-4 sm:p-6 lg:p-8">
              <Image
                src={geoMapImg}
                alt="Bansi Enterprise Geographical Presence across Rajkot, Daman, Mumbai, and Delhi"
                width={1400}
                height={987}
                loading="lazy"
                decoding="async"
                className="w-full h-auto object-contain rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeographicalPresence;
