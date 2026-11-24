import React from "react";
import { FaBuilding, FaMapMarkerAlt } from "react-icons/fa";
import ContactHero from "@/components/compnent/Contact/sector private/ContactHero";
import Scoresec from "@/components/pages/home/Scoresec/Scoresec";
import Footer from "@/components/compnent/Footer/Footer";
import heroImg from "@/assets/Home/HomePage-SectorBgs/06.webp";

const CLIENTS = [
  {
    name: "GMERS Medical College & Hospital",
    city: "Navsari",
  },
  {
    name: "Guru Gobind Singh Government Hospital",
    city: "Jamnagar",
  },
  {
    name: "Planning & Development Authority",
    city: "Silvassa",
  },
  {
    name: "Government District Panchayat",
    city: "Junagadh",
  },
  {
    name: "Sardar Vallabhbhai National Institute of Technology (SVNIT)",
    city: "Surat",
  },
  {
    name: "Department of Tourism",
    city: "Daman",
  },
  {
    name: "Government Engineering College",
    city: "Daman",
  },
  {
    name: "Archaeological Survey of India",
    city: "Ahmedabad",
  },
  {
    name: "Gujarat Metro Rail Corporation (GMRC) Ltd.",
    city: "Ahmedabad & Gandhinagar",
  },
];

const Clients = () => {
  return (
    <div className="overflow-x-clip">
      <ContactHero
        img={heroImg}
        title="Our Clients"
        classnameContainer="bg-cover bg-center"
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-widest text-[#0d9cd4]">
            Trusted Partnerships
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0E2E71]">
            Institutions &amp; Organizations We Serve
          </h2>
          <div className="w-20 h-1 bg-[#0d9cd4] mx-auto rounded-full" />
          <p className="text-base text-slate-600 leading-relaxed pt-2">
            Bansi Enterprise proudly partners with leading government bodies,
            medical institutions, universities, heritage authorities, and public
            infrastructure organizations across western India.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CLIENTS.map((client) => (
            <article
              key={`${client.name}-${client.city}`}
              className="group bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:border-[#0d9cd4] transition-all duration-300 flex flex-col justify-between gap-5"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#0E2E71] group-hover:bg-[#0E2E71] group-hover:text-white transition-colors">
                  <FaBuilding className="w-5 h-5" />
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-[#0E2E71] leading-snug">
                  {client.name}
                </h3>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-sm font-semibold text-slate-600">
                <FaMapMarkerAlt className="w-4 h-4 text-[#0d9cd4] shrink-0" />
                <span>{client.city}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Scoresec />
      <Footer />
    </div>
  );
};

export default Clients;
