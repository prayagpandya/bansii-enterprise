import Image from "next/image";
import React from "react";

import ContactHero from "@/components/compnent/Contact/sector private/ContactHero";
import CrouselCustom from "@/components/compnent/crousel/Crousel";
import Footer from "@/components/compnent/Footer/Footer";
import GeographicalPresence from "@/components/compnent/GeographicalPresence/GeographicalPresence";
import img2 from "@/assets/About/b2.webp";
import ScoreCard from "@/components/compnent/scorecard/ScoreCard";

import Mission from "./Mission/Mission";
import img1 from "./01.webp";

const data = [
  { label: "Employees", value: "2000+" },
  { label: "Cities", value: "100+" },
  { label: "Clients", value: "250+" },
  { label: "Years", value: "25+" },
];

const About = () => {
  return (
    <div className="overflow-x-clip">
      <ContactHero
        img={img1}
        title="About Us"
        classnameContainer="bg-cover bg-bottom"
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20 space-y-16">
        {/* Founder & Chairman */}
        <div className="space-y-8">
          <div className="text-center max-w-4xl mx-auto space-y-2">
            <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-widest text-[#0d9cd4]">
              Leadership
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-[#0E2E71] font-bold uppercase">
              The Inspirational Journey of Our Founder &amp; Chairman
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm">
            <div className="lg:col-span-4 flex justify-center">
              <div className="w-full max-w-xs aspect-[4/5] overflow-hidden rounded-2xl bg-slate-100 shadow-md border border-slate-200">
                <Image
                  src={img2}
                  width={500}
                  height={625}
                  alt="Mr. Pravinkumar Vaja"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <div className="space-y-1 border-b border-slate-100 pb-4">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#0E2E71]">
                  Mr. Pravinkumar Vaja
                </h3>
                <p className="text-base sm:text-lg font-semibold text-[#0d9cd4]">
                  Founder &amp; Chairman &middot; Bansi Enterprise
                </p>
              </div>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed text-justify">
                A decisive social entrepreneur faithful towards keeping every
                space clean everywhere, Mr. Pravinkumar Vaja serves as the
                Chairman and Managing Director of Bansi Enterprise, having
                commenced his journey in 1999.
              </p>
            </div>
          </div>
        </div>

        {/* Managing Director (Image temporarily removed while maintaining uniform left/right card layout) */}
        <div className="space-y-8">
          <div className="text-center max-w-4xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-[#0E2E71] font-bold uppercase">
              The Inspirational Journey of Our Managing Director
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm">
            <div className="lg:col-span-4 flex justify-center">
              <div
                aria-label="Mrs. Bansi Vaja leadership profile badge"
                className="w-full max-w-xs aspect-[4/5] rounded-2xl bg-gradient-to-br from-[#0E2E71] to-[#1746a2] text-white shadow-md flex flex-col items-center justify-center p-6 text-center gap-3 border border-slate-200"
              >
                <span className="h-24 w-24 rounded-full bg-white/15 border border-white/30 flex items-center justify-center text-3xl font-bold tracking-wider">
                  BV
                </span>
                <p className="text-lg font-bold tracking-wide">Mrs. Bansi Vaja</p>
                <span className="text-xs uppercase tracking-widest text-blue-200">
                  Managing Director
                </span>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <div className="space-y-1 border-b border-slate-100 pb-4">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#0E2E71]">
                  Mrs. Bansi Vaja
                </h3>
                <p className="text-base sm:text-lg font-semibold text-[#0d9cd4]">
                  Managing Director &middot; Bansi Enterprise
                </p>
              </div>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed text-justify">
                Since 1999, Mrs. Bansi Vaja has been a driving force behind the
                continued growth and success of Bansi Enterprise. With over 25
                years of industry experience, she has led the organization with
                dedication, integrity, and a strong commitment to excellence.
              </p>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed text-justify">
                Her leadership is centered on delivering quality services,
                fostering long-term client relationships, and maintaining the
                highest standards of professionalism. Through her strategic
                vision and customer-focused approach, she has played a vital
                role in strengthening the company&apos;s reputation as a
                trusted and reliable business partner.
              </p>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed text-justify">
                Mrs. Vaja believes in continuous improvement, innovation, and
                ethical business practices. Her commitment to operational
                excellence and sustainable growth continues to inspire the team
                and position Bansi Enterprise for future success.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CrouselCustom />
      <Mission />
      <GeographicalPresence />
      <ScoreCard title="About People, Places and Planet" data={data} />
      <Footer />
    </div>
  );
};

export default About;
