import CardTitle from "@/components/compnent/dynamicCards/cardSectionTitles/CardTitle";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import img1 from "../../../../assets/Home/LeftCardImgsHome/L01.webp";
import eWasteImg from "@/assets/Services/e-waste-garbage-management.webp";
import securityImg from "@/assets/Services/security.webp";

const FEATURED_SERVICES = [
  {
    img: img1,
    title: "Integrated Facility Management",
    description:
      "At Bansi Enterprise, we offer comprehensive integrated facility management solutions to streamline operations and optimize performance for businesses of all sizes.",
    link: "/Services/integratedFacilityManagement",
  },
  {
    img: eWasteImg,
    title: "E-Waste / Garbage Management",
    description:
      "Efficient collection, segregation, and disposal of waste to maintain cleanliness, backed by sustainable waste reduction and environmentally responsible recycling initiatives.",
    link: "/Services/specialisedServicesAndProjects",
  },
  {
    img: securityImg,
    title: "Security & Safety",
    description:
      "Our trained security personnel and structured safety protocols ensure round-the-clock protection for people, assets, and facilities across healthcare, corporate, and institutional campuses.",
    link: "/Services",
  },
];

const ServicesSection = () => {
  return (
    <section>
      <CardTitle
        title={"Our Services"}
        flagLine={
          "Find out below how our services can meet your organisation’s needs."
        }
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {FEATURED_SERVICES.map((service) => (
            <article
              key={service.title}
              className="group bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full"
            >
              <div className="relative w-full aspect-[16/10] bg-slate-100 overflow-hidden">
                <Image
                  src={service.img}
                  alt={service.title}
                  width={640}
                  height={400}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="p-6 flex flex-col flex-1 justify-between gap-5">
                <div className="space-y-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0b2f6a] leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 text-justify leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="pt-1">
                  <Link
                    prefetch
                    href={service.link}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold bg-[#0b2f6a] text-white rounded-lg border border-[#0b2f6a] hover:bg-[#0d9cd4] hover:border-[#0d9cd4] transition-colors duration-200"
                  >
                    <span>Learn more</span>
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-14 text-center">
        <Link
          prefetch
          href="/Services"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold bg-[#0E2E71] text-white rounded-xl border border-[#0E2E71] hover:bg-[#0d9cd4] hover:border-[#0d9cd4] shadow-md hover:shadow-lg transition-all duration-200"
        >
          <span>Explore More Services</span>
          <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </section>
  );
};

export default ServicesSection;
