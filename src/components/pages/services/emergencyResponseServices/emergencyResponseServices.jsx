import GridCards from "@/components/compnent/GridCards/GridCards";
import SectorHero from "@/components/compnent/dynamiSectorhero/SectorHero";
import React from "react";
import s1 from "@/assets/Services/emergencyResponseServices/01.webp";
import s2 from "@/assets/Services/emergencyResponseServices/02.webp";
import s3 from "@/assets/Services/emergencyResponseServices/03.webp";

import Contact from "@/components/compnent/Contact/ContactPage";
import ScoreCard from "@/components/compnent/scorecard/ScoreCard";
import Footer from "@/components/compnent/Footer/Footer";

const EmergencyResponseServices = () => {
  const scoreCardData1 = [
    { label: "Total Airports Served", value: "24+" },
    { label: "Years of Experience", value: "9+" },
    { label: "Sq.ft Area Managed", value: "8+ Lakhs" },
    { label: "Manpower", value: "8000+" },
  ];
  const cardData = [
    {
      image: s1,
      title: "Manual/Mechanised and Robotic Cleaning",
      description: `In response to the continually changing hygiene requirements of our urbanized society, mechanized cleaning and maintenance have become crucial facilities. This method minimizes manual labor and effort, ensuring comprehensive cleanliness through the incorporation of intelligent technology. BVG India provides advanced housekeeping and maintenance services to a diverse range of facilities, including commercial complexes, IT parks, hospitals, educational institutions, government offices, hotels, railway stations, roads, malls, and more.`,
    },
    {
      image: s2,
      title: "Sanitization Solutions",
      description: `Maintaining clinical hygiene is of paramount significance to ensure the well-being and safety of patients, staff, and visitors. Recognizing this imperative, BVG India extends its cleaning services to hospitals of diverse scales throughout India. Our approach involves deploying trained and qualified cleaning professionals, utilizing sound-free cleaning equipment, and employing safe cleaning solutions. This meticulous process ensures elevated standards of sanitation and hygiene within healthcare facilities.


      `,
    },
    {
      image: s3,
      title: "Parking Management",
      description: `The transparency of glass panes and the appearance of building facades significantly contribute to the overall impression of any structure, attracting the attention of passers-by. Maintaining cleanliness not only enhances a company's reputation but also reflects its commitment to hygiene and presentation. BVG India takes pride in employing skilled personnel and high-quality cleaning equipment to ensure the pristine condition of your glass and facades, eliminating dust, dirt, and debris effectively.`,
    },
  ];
  return (
    <>
      <SectorHero
        title="Emergency Response Services"
        img={require("@/assets/Services/s2.webp").default}
        description="
        At BVG, we provide robust emergency response solutions to swiftly address any unexpected situations and ensure the safety and security of our clients and their assets."
      />
      <p className="text-xl px-4 text-justify lg:text-2xl lg:px-24">
        Life-threatening emergencies demand immediate and decisive action. BVG
        India understands this criticality and has established a network of
        dedicated emergency response teams across Madhya Pradesh, Maharashtra,
        Jammu and Kashmir, Ladakh, and expanding rapidly to other regions in
        India.
      </p>
      <p className="text-center text-2xl lg:text-3xl mt-20">
        Always ready to save lives when every second matters
      </p>
      <p className="text-lg px-4 lg:text-2xl lg:px-24 mt-8">
        We specialize in three crucial areas:
      </p>
      <div>
        <GridCards cardData={cardData} />
      </div>
      <Contact />
      <ScoreCard
        title="Manufacturing and Industrial in numbers"
        data={scoreCardData1}
        ClassCustom="mt-20"
      />
      <Footer />
    </>
  );
};

export default EmergencyResponseServices;
