import React from "react";
import Image from "next/image";
import manpowerTeam1 from "@/assets/Home/about-manpower-1.webp";
import manpowerTeam2 from "@/assets/Home/about-manpower-2.webp";

const AboutCard = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-widest text-[#0d9cd4]">
              Workforce &amp; Manpower Outsourcing
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight font-bold text-[#0E2E71] leading-tight">
              About Bansi Enterprise
            </h2>
            <div className="w-20 h-1 bg-[#0d9cd4] rounded-full" />
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed text-justify">
              Bansi Enterprise is a premier manpower outsourcing and integrated
              facility management company committed to deploying disciplined,
              verified, and well-trained personnel across India. With more than
              25 years of operational expertise since 1999, we bridge critical
              workforce needs by providing skilled, semi-skilled, and support
              staff tailored to hospitals, universities, municipal authorities,
              corporate campuses, and industrial facilities.
            </p>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed text-justify">
              From mechanized housekeeping teams, paramedical and patient-care
              assistants, and uniformed security guards to technical maintenance
              supervisors, firefighting crews, and lift attendants, our workforce
              operates under strict statutory compliance, structured on-site
              training, and continuous quality supervision.
            </p>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5 items-center">
            <div className="overflow-hidden rounded-2xl shadow-md border border-slate-100 bg-slate-50 aspect-[4/5]">
              <Image
                src={manpowerTeam1}
                alt="Trained Bansi Enterprise manpower team in corporate lobby"
                width={600}
                height={750}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-md border border-slate-100 bg-slate-50 aspect-[4/5] sm:mt-8">
              <Image
                src={manpowerTeam2}
                alt="Bansi Enterprise technical manpower supervisors conducting inspection"
                width={600}
                height={750}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCard;
