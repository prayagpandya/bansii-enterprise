import GridCards from "@/components/compnent/GridCards/GridCards";
import SectorHero from "@/components/compnent/dynamiSectorhero/SectorHero";
import React from "react";
import heroImg from "@/assets/Services/s3.webp";
import horticultureImg from "@/assets/Services/horticulture-landscaping.webp";
import roadBeachImg from "@/assets/Services/road-sweeping-beach-cleaning.webp";
import manualsMachineryImg from "@/assets/Services/manuals-machinery.webp";
import sanitationImg from "@/assets/Services/sanitation.webp";

import ScoreCard from "@/components/compnent/scorecard/ScoreCard";
import Footer from "@/components/compnent/Footer/Footer";

const CivilAndHorticulture = () => {
  const scoreCardData1 = [
    { label: "Employees", value: "2000+" },
    { label: "Cities", value: "100+" },
    { label: "Clients", value: "250+" },
    { label: "Years", value: "25+" },
  ];

  const cardData = [
    {
      image: horticultureImg,
      title: "Horticulture / Landscaping",
      description:
        "Bansi Enterprise’s horticulture and landscaping service is dedicated to creating and maintaining vibrant outdoor spaces that enhance the aesthetic appeal and functionality of our clients’ properties. Our team of skilled horticulturists and landscapers designs bespoke landscapes tailored to each client’s preferences and needs. From initial planning and installation to ongoing maintenance, we ensure that gardens, lawns, and green spaces thrive throughout the seasons.",
    },
    {
      image: manualsMachineryImg,
      title: "Manual/Mechanised and Robotic Cleaning",
      description:
        "In response to the continually changing hygiene requirements of our urbanized society, mechanized cleaning and maintenance have become crucial facilities. This method minimizes manual labor and effort, ensuring comprehensive cleanliness through the incorporation of intelligent technology. Bansi Enterprise India provides advanced housekeeping and maintenance services to a diverse range of facilities, including commercial complexes, IT parks, hospitals, educational institutions, government offices, hotels, railway stations, roads, malls, and more.",
    },
    {
      image: roadBeachImg,
      title: "Road Sweeping & Beach Cleaning",
      description:
        "Well-maintained roads not only reflect the cleanliness of a country but also showcase the progressive mindset of its citizens. Bansi Enterprise India is dedicated to upholding road hygiene, providing qualified teams for road sweeping and cleaning to municipal corporations, councils, and large manufacturing campuses across India. Our utilization of mechanized equipment ensures thorough and extensive cleaning of the roads.",
    },
    {
      image: sanitationImg,
      title: "Sanitation Services",
      description:
        "Our comprehensive approach includes thorough cleaning, disinfection, and waste management to ensure optimal sanitation standards. From regular cleaning schedules to specialized treatments, we tailor our services to meet the unique needs of each facility. With a focus on health and safety, Bansi Enterprise’s sanitation service provides peace of mind to our clients and promotes a healthier environment for all.",
    },
  ];

  return (
    <div className="overflow-x-clip">
      <SectorHero
        title="Civil & Horticulture"
        img={heroImg}
        description="Bansi Enterprise delivers structured civil maintenance, land sweeping, landscape beautification, and garden development solutions across Gujarat, Maharashtra, Union Territories, and NCR."
      />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <p className="text-base sm:text-lg lg:text-xl text-slate-600 text-justify leading-relaxed bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8">
          Bansi Enterprise provides civil infrastructure upkeep, landscape and
          gardening maintenance, water-supply upkeep, and grounds sweeping
          services backed by trained supervisors and field machinery.
        </p>
      </section>
      <GridCards cardData={cardData} />
      <ScoreCard title="About People, Places and Planet" data={scoreCardData1} />
      <Footer />
    </div>
  );
};

export default CivilAndHorticulture;
