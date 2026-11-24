import GridCards from "@/components/compnent/GridCards/GridCards";
import SectorHero from "@/components/compnent/dynamiSectorhero/SectorHero";
import React from "react";
import heroImg from "@/assets/Services/s2.webp";
import emergencyImg from "@/assets/Services/emergency-response.webp";
import s07 from "@/assets/Services/integreted management system/07.webp";
import securityImg from "@/assets/Services/security.webp";

import Contact from "@/components/compnent/Contact/ContactPage";
import ScoreCard from "@/components/compnent/scorecard/ScoreCard";
import Footer from "@/components/compnent/Footer/Footer";

const EmergencyResponseServices = () => {
  const scoreCardData1 = [
    { label: "Employees", value: "2000+" },
    { label: "Cities", value: "100+" },
    { label: "Clients", value: "250+" },
    { label: "Years", value: "25+" },
  ];

  const cardData = [
    {
      image: emergencyImg,
      title: "Firefighting & Fire Safety Inspection",
      description:
        "Our team of trained professionals conducts thorough inspections, installs and maintains firefighting equipment, and develops comprehensive fire safety plans tailored to each facility’s unique needs. With a proactive approach to fire prevention and mitigation, we help minimize the impact of fire emergencies and protect lives and property.",
    },
    {
      image: s07,
      title: "Facility Technical Support & Lift Attendant",
      description:
        "Our courteous and well-trained attendants ensure smooth and safe operation of the lifts, assisting passengers with entering and exiting, and providing guidance as needed. Bansi Enterprise India boasts a dedicated and well-trained team of qualified individuals specializing in planned preventive and corrective technical maintenance support.",
    },
    {
      image: securityImg,
      title: "Security & Rapid Response Personnel",
      description:
        "Our trained security personnel contribute to a secure environment, ensuring the well-being of patients, staff, and visitors through vigilance, access control, and rapid coordination during critical incidents.",
    },
  ];

  return (
    <div className="overflow-x-clip">
      <SectorHero
        title="Emergency Response Services"
        img={heroImg}
        description="At Bansi Enterprise, we provide responsive fire safety, lift attendant, technical, and security readiness to safeguard clients, staff, visitors, and critical institutional assets."
      />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-4">
        <p className="text-base sm:text-lg lg:text-xl text-slate-600 text-justify leading-relaxed bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8">
          Critical incidents demand prepared personnel and decisive technical
          intervention. Bansi Enterprise deploys fire-safety trained teams, lift
          attendants, and rapid maintenance support across government campuses,
          hospitals, and commercial hubs.
        </p>
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-[#0E2E71] pt-6">
          Always ready to respond when every second matters
        </h2>
      </section>
      <GridCards cardData={cardData} />
      <Contact />
      <ScoreCard title="About People, Places and Planet" data={scoreCardData1} />
      <Footer />
    </div>
  );
};

export default EmergencyResponseServices;
