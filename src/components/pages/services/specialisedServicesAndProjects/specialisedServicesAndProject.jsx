import GridCards from "@/components/compnent/GridCards/GridCards";
import SectorHero from "@/components/compnent/dynamiSectorhero/SectorHero";
import React from "react";
import heroImg from "@/assets/Services/s3.webp";
import eWasteImg from "@/assets/Services/e-waste-garbage-management.webp";
import horticultureImg from "@/assets/Services/horticulture-landscaping.webp";
import roadBeachImg from "@/assets/Services/road-sweeping-beach-cleaning.webp";
import manualsMachineryImg from "@/assets/Services/manuals-machinery.webp";
import emergencyResponseImg from "@/assets/Services/emergency-response.webp";
import sanitationImg from "@/assets/Services/sanitation.webp";

import ScoreCard from "@/components/compnent/scorecard/ScoreCard";
import Footer from "@/components/compnent/Footer/Footer";

const SpecialisedServicesAndProjects = () => {
  const scoreCardData1 = [
    { label: "Employees", value: "2000+" },
    { label: "Cities", value: "100+" },
    { label: "Clients", value: "250+" },
    { label: "Years", value: "25+" },
  ];

  const cardData = [
    {
      image: eWasteImg,
      title: "E-Waste / Garbage Management",
      description:
        "Efficient collection, segregation, and disposal of waste to maintain cleanliness.\nImplementation of sustainable waste reduction practices.\nRecycling initiatives for environmentally responsible waste management.",
    },
    {
      image: roadBeachImg,
      title: "Road Sweeping & Beach Cleaning",
      description:
        "Well-maintained roads not only reflect the cleanliness of a country but also showcase the progressive mindset of its citizens. Bansi Enterprise India is dedicated to upholding road hygiene, providing qualified teams for road sweeping and cleaning to municipal corporations, councils, and large manufacturing campuses across India. Our utilization of mechanized equipment ensures thorough and extensive cleaning of the roads.",
    },
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
      image: sanitationImg,
      title: "Sanitation Services",
      description:
        "Our comprehensive approach includes thorough cleaning, disinfection, and waste management to ensure optimal sanitation standards. From regular cleaning schedules to specialized treatments, we tailor our services to meet the unique needs of each facility. With a focus on health and safety, Bansi Enterprise’s sanitation service provides peace of mind to our clients and promotes a healthier environment for all.",
    },
    {
      image: emergencyResponseImg,
      title: "Emergency Response — Fire / Lift / Technical",
      description:
        "Our team of trained professionals conducts thorough inspections, installs and maintains firefighting equipment, and develops comprehensive fire safety plans tailored to each facility’s unique needs. With a proactive approach to fire prevention and mitigation, we help minimize the impact of fire emergencies and protect lives and property.",
    },
  ];

  return (
    <div className="overflow-x-clip">
      <SectorHero
        title="Waste Management & Specialised Projects"
        img={heroImg}
        description="Bansi Enterprise delivers sustainable e-waste and garbage management, coastal and road sweeping, horticulture development, and specialised field operations for government bodies and large campuses across India."
      />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <p className="text-base sm:text-lg lg:text-xl text-slate-600 text-justify leading-relaxed bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8">
          Bansi Enterprise provides specialised environmental, municipal, and
          campus project services across Gujarat, Maharashtra, Union Territories,
          and NCR. Our dedicated field fleets and trained supervisors execute
          door-to-door garbage collection, beach cleaning, large-scale
          horticulture maintenance, and emergency technical readiness with
          measurable service accountability.
        </p>
      </section>
      <GridCards cardData={cardData} />
      <ScoreCard title="About People, Places and Planet" data={scoreCardData1} />
      <Footer />
    </div>
  );
};

export default SpecialisedServicesAndProjects;
