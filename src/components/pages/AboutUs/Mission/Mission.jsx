import RightCard from "@/components/compnent/dynamicCards/rightcard/Rightcard";
import React from "react";
import mission from "@/assets/About/mission.webp";
import vision from "@/assets/About/vision.webp";
import purpose from "@/assets/About/purpose.webp";
import RightCardNoLink from "@/components/compnent/dynamicCards/rightcard/RightcardSector";
import LeftCardNoLink from "@/components/compnent/dynamicCards/LeftCard/LeftCardNoLink";
const Mission = () => {
  return (
    <div>
      <h5 className="text-3xl text-[#0E2E71] font-bold text-center mt-14">
        Our Mission Vision And Purpose
      </h5>
      <RightCardNoLink
        img={mission}
        description={
          "To Help Our Customers Have Productive, Safer, And Healthier Environments through a Robust Range of Cleaning Services, Industry-leading Standards, And Sustainable Business Practices"
        }
        title={"Our Mission"}
      />
      <LeftCardNoLink
        clsimgdiv={"bg-transperent bg-cover"}
        img={vision}
        description={
          "To Provide Services at 1000+ Government Clients through India by 2040 with Turnover of 1000 Cr."
        }
        title={"Our Vision"}
      />
      <RightCardNoLink
        clsimgdiv={"bg-transperent bg-cover"}
        img={purpose}
        description={
          "We place immense importance on creating a positive difference in the lives of people, planet and the places we serve by putting our Humanity Ahead approach. This is our core value and purpose that drives our actions"
        }
        title={"Our Purpose"}
      />
    </div>
  );
};

export default Mission;
