import GridCards from "@/components/compnent/GridCards/GridCards";
import SectorHero from "@/components/compnent/dynamiSectorhero/SectorHero";
import React from "react";
import s1 from "@/assets/Services/civilHorticulture/01.webp";
import s2 from "@/assets/Services/civilHorticulture/02.webp";
import s3 from "@/assets/Services/civilHorticulture/03.webp";
import s4 from "@/assets/Services/civilHorticulture/04.webp";
import s5 from "@/assets/Services/civilHorticulture/05.webp";
import s6 from "@/assets/Services/civilHorticulture/06.webp";
import s7 from "@/assets/Services/civilHorticulture/07.webp";
import s8 from "@/assets/Services/civilHorticulture/08.webp";
import s9 from "@/assets/Services/civilHorticulture/09.webp";
import s10 from "@/assets/Services/civilHorticulture/10.webp";

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
    {
      image: s4,
      title: "Manual/Mechanised and Robotic Cleaning",
      description: `In response to the continually changing hygiene requirements of our urbanized society, mechanized cleaning and maintenance have become crucial facilities. This method minimizes manual labor and effort, ensuring comprehensive cleanliness through the incorporation of intelligent technology. BVG India provides advanced housekeeping and maintenance services to a diverse range of facilities, including commercial complexes, IT parks, hospitals, educational institutions, government offices, hotels, railway stations, roads, malls, and more.`,
    },
    {
      image: s5,
      title: "Sanitization Solutions",
      description: `Maintaining clinical hygiene is of paramount significance to ensure the well-being and safety of patients, staff, and visitors. Recognizing this imperative, BVG India extends its cleaning services to hospitals of diverse scales throughout India. Our approach involves deploying trained and qualified cleaning professionals, utilizing sound-free cleaning equipment, and employing safe cleaning solutions. This meticulous process ensures elevated standards of sanitation and hygiene within healthcare facilities.
  
  
        `,
    },
    {
      image: s6,
      title: "Parking Management",
      description: `The transparency of glass panes and the appearance of building facades significantly contribute to the overall impression of any structure, attracting the attention of passers-by. Maintaining cleanliness not only enhances a company's reputation but also reflects its commitment to hygiene and presentation. BVG India takes pride in employing skilled personnel and high-quality cleaning equipment to ensure the pristine condition of your glass and facades, eliminating dust, dirt, and debris effectively.`,
    },
    {
      image: s7,
      title: "Manual/Mechanised and Robotic Cleaning",
      description: `In response to the continually changing hygiene requirements of our urbanized society, mechanized cleaning and maintenance have become crucial facilities. This method minimizes manual labor and effort, ensuring comprehensive cleanliness through the incorporation of intelligent technology. BVG India provides advanced housekeeping and maintenance services to a diverse range of facilities, including commercial complexes, IT parks, hospitals, educational institutions, government offices, hotels, railway stations, roads, malls, and more.`,
    },
    {
      image: s8,
      title: "Sanitization Solutions",
      description: `Maintaining clinical hygiene is of paramount significance to ensure the well-being and safety of patients, staff, and visitors. Recognizing this imperative, BVG India extends its cleaning services to hospitals of diverse scales throughout India. Our approach involves deploying trained and qualified cleaning professionals, utilizing sound-free cleaning equipment, and employing safe cleaning solutions. This meticulous process ensures elevated standards of sanitation and hygiene within healthcare facilities.
  
  
        `,
    },
    {
      image: s9,
      title: "Parking Management",
      description: `The transparency of glass panes and the appearance of building facades significantly contribute to the overall impression of any structure, attracting the attention of passers-by. Maintaining cleanliness not only enhances a company's reputation but also reflects its commitment to hygiene and presentation. BVG India takes pride in employing skilled personnel and high-quality cleaning equipment to ensure the pristine condition of your glass and facades, eliminating dust, dirt, and debris effectively.`,
    },
    {
      image: s10,
      title: "Parking Management",
      description: `The transparency of glass panes and the appearance of building facades significantly contribute to the overall impression of any structure, attracting the attention of passers-by. Maintaining cleanliness not only enhances a company's reputation but also reflects its commitment to hygiene and presentation. BVG India takes pride in employing skilled personnel and high-quality cleaning equipment to ensure the pristine condition of your glass and facades, eliminating dust, dirt, and debris effectively.`,
    },
  ];
  return (
    <>
      <SectorHero
        title="Civil & Horticulture"
        img={require("@/assets/Services/s3.webp").default}
        description="
        A Civil Horticulture division is one of the prestigious department which includes land development, Residential Building , industrial construction, industrial piping, Landscape beautification, Lake beautification, Garden development and maintenance water supply Irrigation"
      />
      <p className="text-xl px-4 text-justify lg:text-2xl lg:px-24">
        At present we provide Civil Horticulture Services in Maharashtra, Gujrat
        Assam Tripura. It includes Civil infrastructure residential building,
        truck terminal, Landscape and Gardening development with Design and
        Drawing. BVG has experience in Projects of several different Contractual
        concepts including Engineering, Procurement Contracts i e EPC.
      </p>

      <div>
        <GridCards cardData={cardData} />
      </div>
      {/* <Contact /> */}
      {/* <ScoreCard
        title="Manufacturing and Industrial in numbers"
        data={scoreCardData1}
        ClassCustom="mt-20"
      /> */}
      <Footer />
    </>
  );
};

export default EmergencyResponseServices;
