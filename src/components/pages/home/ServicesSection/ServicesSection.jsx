import CardTitle from "@/components/compnent/dynamicCards/cardSectionTitles/CardTitle";
import LeftCard from "@/components/compnent/dynamicCards/LeftCard/LeftCard";
import RightCard from "@/components/compnent/dynamicCards/rightcard/Rightcard";
import React from "react";
import img1 from "../../../../assets/Home/LeftCardImgsHome/L01.webp";
import img4 from "../../../../assets/Home/RightCardImgs/waste mgt.webp";
// import img5 from "../../../../assets/Home/LeftCardImgsHome/L03.webp";

const ServicesSection = () => {
  return (
    <>
      <div>
        {" "}
        <CardTitle
          title={"Our Services"}
          flagLine={
            "Find out below how our services can meet your organisation’s needs."
          }
        />
        <LeftCard
          img={img1}
          title={"Integrated Facility Management"}
          description={
            "At Bansi Enterprise, we offer comprehensive integrated facility management solutions to streamline operations and optimize performance for businesses of all sizes."
          }
          link={"/Services/integratedFacilityManagement"}
        />
        <RightCard
          img={img4}
          title={"Waste Management"}
          description={
            "At Bansi Enterprise, we deliver efficient solid waste management solutions that prioritize sustainability and environmental responsibility while maintaining cleanliness and hygiene standards."
          }
          link={"/Services/specialisedServicesAndProjects"}
        />
        {/* <LeftCard
          img={img5}
          title={"Special Projects"}
          description={
            "Our Special Initiatives offer a unique chance to make significant contributions to society and the nation. Bansi Enterprise India has successfully executed key projects, including Smart City development, horticultural projects, and environmental conservation initiatives across India."
          }
          link={"/specialProjects"}
        /> */}
      </div>
    </>
  );
};

export default ServicesSection;
