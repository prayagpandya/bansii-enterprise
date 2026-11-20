import SectorHero from "@/components/compnent/dynamiSectorhero/SectorHero";
import React from "react";
import imgLand from "@/assets/Sectors/AviationServices/01.webp";
import RightCardNoLink from "@/components/compnent/dynamicCards/rightcard/RightcardSector";
import LeftCardNoLink from "@/components/compnent/dynamicCards/LeftCard/LeftCardNoLink";
import L01 from "@/assets/Sectors/Education/left/L01.webp";
import L02 from "@/assets/Sectors/Education/left/L02.webp";
import L03 from "@/assets/Sectors/Education/left/L03.webp";

import R01 from "@/assets/Sectors/Education/right/R01.webp";
import R02 from "@/assets/Sectors/Education/right/R02.webp";
import R03 from "@/assets/Sectors/Education/right/R03.webp";
import R04 from "@/assets/Sectors/Education/right/R04.webp";

import ScoreCard from "@/components/compnent/scorecard/ScoreCard";
import Contact from "@/components/compnent/Contact/ContactPage";
import Footer from "@/components/compnent/Footer/Footer";
const scoreCardData1 = [
  { label: "Total Airports Served", value: "24+" },
  { label: "Years of Experience", value: "9+" },
  { label: "Sq.ft Area Managed", value: "8+ Lakhs" },
  { label: "Manpower", value: "8000+" },
];
const scoreCardData2 = [
  { label: "Employees", value: "2000+" },
  { label: "Cities", value: "100+" },
  { label: "Clients", value: "250+" },
  { label: "Years", value: "25+" },
];
const Education = () => {
  return (
    <div className="overflow-x-hidden">
      <SectorHero
        img={require("@/assets/Sectors/04Education.webp").default}
        title="Education and Industrial"
        description="At Bansi Enterprise, we specialize in facility management tailored for educational institutions. Our solutions prioritize optimal learning environments, encompassing cleanliness, safety, and support for the educational mission."
      />
      <RightCardNoLink
        title="Creating ideal learning environments through specialized solutions"
        description="Bansi Enterprise provides comprehensive services tailored for educational institutions. From seamless employee transitions to strategic recruitment and continuous staff development, we enhance the educational environment. Our commitment extends to robust health and safety protocols, streamlined reporting, and efficient facility management across various areas, ensuring cleanliness, maintenance, and safety."
        img={R01}
      />
      {/* <ScoreCard
        title="Education and Industrial in numbers"
        data={scoreCardData1}
        ClassCustom="mt-20"
      /> */}
      <LeftCardNoLink
        title="Employee Transition & Mobilization Process"
        description="Smooth transition processes ensure minimal disruptions during staff changes, while mobilization strategies efficiently integrate new employees into the educational institution’s culture and operations.

Smooth transition processes for staff, ensuring minimal disruptions during changes.
Mobilization strategies to efficiently integrate new employees into the educational institution’s culture and operations."
        img={L01}
      />
      <RightCardNoLink
        title="Recruitment Process"
        description="Strategic recruitment solutions identify and attract top talent in the education sector, utilizing customized hiring processes that match the institution’s specific needs and goals.

Strategic recruitment solutions to identify and attract top talent in the education sector.
Customized hiring processes to match the institution’s specific needs and goals."
        img={R02}
      />
      <LeftCardNoLink
        title="Employee Training & Skill Development"
        description="Targeted training programs enhance the skills and knowledge of educational staff, with continuous development initiatives keeping educators abreast of the latest pedagogical techniques and technologies.

Targeted training programs designed to enhance the skills and knowledge of educational staff.
Continuous development initiatives to keep educators abreast of the latest pedagogical techniques and technologies."
        img={L02}
      />
      <RightCardNoLink
        title="Continuous Improvement Plan - Workplace Health & Safety"
        description="Robust health and safety protocols create a secure learning environment for students and staff, supported by ongoing assessments and improvement plans to address emerging safety concerns and maintain compliance with industry standards.

Robust health and safety protocols to create a secure learning environment for students and staff.
Ongoing assessments and improvement plans to address emerging safety concerns and maintain compliance with industry standards."
        img={R03}
      />
      <LeftCardNoLink
        title="Administrative and Operational Reporting"
        description="Streamlined reporting mechanisms handle administrative and operational activities, providing regular reporting on key performance indicators to enable educational institutions to make informed decisions.

Streamlined reporting mechanisms for administrative and operational activities.
Regular reporting on key performance indicators, allowing educational institutions to make informed decisions."
        img={L03}
      />
      <RightCardNoLink
        title="Facility Management for Various Areas"
        description="Bansi Enterprise ensures seamless operations and cleanliness in diverse areas, from dining facilities to multipurpose rooms, conducting regular checks and maintenance for lifts and other crucial spaces like sick rooms, store rooms, and pantries.

Drainage Spouts, Different Dustbins for Garbage Collections: Efficient waste management solutions.
Male/Female/Physically Challenged Person’s Toilets: Ensuring hygiene and accessibility.
Water Supply Fittings/Sanitary Fittings and Other Fittings in Toilets: Regular checks and maintenance for uninterrupted services."
        img={R04}
      />

      {/* <Contact /> */}
      <ScoreCard title="About People Places and Planet" data={scoreCardData2} />
      <Footer />
    </div>
  );
};

export default Education;
