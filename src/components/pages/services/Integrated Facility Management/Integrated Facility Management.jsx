import React from "react";

import Footer from "@/components/compnent/Footer/Footer";
import GridCards from "@/components/compnent/GridCards/GridCards";
import ScoreCard from "@/components/compnent/scorecard/ScoreCard";
import SectorHero from "@/components/compnent/dynamiSectorhero/SectorHero";

import homeImg from "@/assets/Services/integreted management system/home.webp";
import s07 from "@/assets/Services/integreted management system/07.webp";
import s08 from "@/assets/Services/integreted management system/08.webp";

import eWasteImg from "@/assets/Services/e-waste-garbage-management.webp";
import emergencyResponseImg from "@/assets/Services/emergency-response.webp";
import guestHouseImg from "@/assets/Services/guest-house-management.webp";
import horticultureImg from "@/assets/Services/horticulture-landscaping.webp";
import manualsMachineryImg from "@/assets/Services/manuals-machinery.webp";
import roadBeachImg from "@/assets/Services/road-sweeping-beach-cleaning.webp";
import sanitationImg from "@/assets/Services/sanitation.webp";
import securityImg from "@/assets/Services/security.webp";

import elevatingHealthImg from "@/assets/Sectors/HealthCareAndLifeServices/right/R01.webp";
import healthSanitationSprayImg from "@/assets/Sectors/HealthCareAndLifeServices/right/R02.webp";

const cardData = [
  {
    image: s08,
    title: "Integrated Facility Management (IFM)",
    description:
      "Comprehensive management of various facilities, including workspace planning, security, and maintenance, is at the core of Bansi Enterprise’s Integrated Facility Management (IFM) services, offering customized solutions to enhance operational efficiency and reduce downtime.\n\nComprehensive management of various facilities, including workspace planning, security, and maintenance.\nCustomized solutions to enhance operational efficiency and reduce downtime. We do Carpet AMC, Duct Cleaning, BMS & Server / Utilities, Toilets & Cafeteria.",
  },
  {
    image: eWasteImg,
    title: "E-Waste / Garbage Management",
    description:
      "Efficient collection, segregation, and disposal of waste to maintain cleanliness.\nImplementation of sustainable waste reduction practices.\nRecycling initiatives for environmentally responsible waste management.",
  },
  {
    image: elevatingHealthImg,
    title:
      "Elevating facility management for Healthcare and Life Services companies",
    description:
      "Our services include rigorous cleaning protocols, waste management, and infection control to maintain the highest hygiene standards. We prioritize a patient-centric environment with well-maintained spaces, comply with regulatory standards, implement security measures, optimize operations, promote sustainability, and integrate technology for efficient facility management in the healthcare sector.",
  },
  {
    image: securityImg,
    title: "Security & Safety",
    description:
      "Our trained security personnel contribute to a secure environment, ensuring the well-being of patients, staff, and visitors.\n\nAdvanced security measures for physical assets and sensitive patient information.\nTrained security personnel contributing to a secure environment.\nEnsuring the well-being of patients, staff, and visitors.",
  },
  {
    image: manualsMachineryImg,
    title: "Manual/Mechanised and Robotic Cleaning",
    description:
      "In response to the continually changing hygiene requirements of our urbanized society, mechanized cleaning and maintenance have become crucial facilities. This method minimizes manual labor and effort, ensuring comprehensive cleanliness through the incorporation of intelligent technology. Bansi Enterprise India provides advanced housekeeping and maintenance services to a diverse range of facilities, including commercial complexes, IT parks, hospitals, educational institutions, government offices, hotels, railway stations, roads, malls, and more.",
  },
  {
    image: sanitationImg,
    title: "Sanitation Solutions",
    description:
      "Our comprehensive approach includes thorough cleaning, disinfection, and waste management to ensure optimal sanitation standards. From regular cleaning schedules to specialized treatments, we tailor our services to meet the unique needs of each facility. With a focus on health and safety, Bansi Enterprise’s sanitation service provides peace of mind to our clients and promotes a healthier environment for all.",
  },
  {
    image: s07,
    title: "Religious Establishment Management",
    description:
      "Temples, integral to our country's spiritual fabric, require meticulous upkeep, and Bansi Enterprise India takes pride in fulfilling this rightful duty. We provide high-quality cleaning instruments for maintaining the cleanliness of temple premises and surroundings. Our Temple maintenance services create a clean and hygienic environment, fostering an atmosphere for devotees to worship with peace of mind.",
  },
  {
    image: roadBeachImg,
    title: "Road Sweeping & Beach Cleaning",
    description:
      "Well-maintained roads not only reflect the cleanliness of a country but also showcase the progressive mindset of its citizens. Bansi Enterprise India is dedicated to upholding road hygiene, providing qualified teams for road sweeping and cleaning to municipal corporations, councils, and large manufacturing campuses across India. Our utilization of mechanized equipment ensures thorough and extensive cleaning of the roads.",
  },
  {
    image: healthSanitationSprayImg,
    title: "Comprehensive Pest Control Solutions",
    description:
      "Creating a pest-free environment is essential to prevent the uncontrolled growth of insects and rodents, addressing potential health concerns. Bansi Enterprise India offers Pest Control services that employ eco-friendly pest control, fumigation, and sterilization techniques, ensuring the safety and hygiene of both residential and commercial spaces.",
  },
  {
    image: horticultureImg,
    title: "Horticulture / Landscaping",
    description:
      "Bansi Enterprise’s horticulture and landscaping service is dedicated to creating and maintaining vibrant outdoor spaces that enhance the aesthetic appeal and functionality of our clients’ properties. Our team of skilled horticulturists and landscapers designs bespoke landscapes tailored to each client’s preferences and needs. From initial planning and installation to ongoing maintenance, we ensure that gardens, lawns, and green spaces thrive throughout the seasons.",
  },
  {
    image: guestHouseImg,
    title: "Guest House Management",
    description:
      "Guest house management: Under guest house management we provide Security Services to ensure the safety of guests and the property. Housekeeping: We provide housekeeping services to maintain the cleanliness and hygiene of guest rooms and common areas. Maintenance and Repairs: We also handle general maintenance and repairs within the guest house, ensuring everything is in good working order.",
  },
  {
    image: emergencyResponseImg,
    title: "Emergency Response — Fire / Lift / Technical",
    description:
      "Our team of trained professionals conducts thorough inspections, installs and maintains firefighting equipment, and develops comprehensive fire safety plans tailored to each facility’s unique needs. With a proactive approach to fire prevention and mitigation, we help minimize the impact of fire emergencies and protect lives and property.\n\nOur courteous and well-trained attendants ensure smooth and safe operation of the lifts, assisting passengers with entering and exiting, and providing guidance as needed. With a focus on customer service and safety, our lift attendants enhance the overall experience for building occupants while helping to prevent accidents and disruptions.\n\nThrough proactive maintenance programs, Bansi Enterprise ensures the smooth functioning of equipment and machinery, conducting timely inspections and repairs to prevent downtime and maintain peak operational efficiency.",
  },
];

const IntegratedFacilityManagement = () => {
  const scoreCardData1 = [
    { label: "Employees", value: "2000+" },
    { label: "Cities", value: "100+" },
    { label: "Clients", value: "250+" },
    { label: "Years", value: "25+" },
  ];

  return (
    <div className="overflow-x-clip">
      <SectorHero
        title="Our Services"
        img={homeImg}
        description="At Bansi Enterprise, we offer comprehensive integrated facility management, sanitation, security, landscaping, waste management, and specialized manpower solutions to optimize performance for institutions and businesses of all sizes."
      />
      <GridCards cardData={cardData} />
      <ScoreCard title="About People, Places and Planet" data={scoreCardData1} />
      <Footer />
    </div>
  );
};

export default IntegratedFacilityManagement;
