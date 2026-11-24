import React from "react";
import missionIcon from "@/assets/About/icon-mission.webp";
import visionIcon from "@/assets/About/icon-vision.webp";
import valuesIcon from "@/assets/About/icon-values.webp";
import RightCardNoLink from "@/components/compnent/dynamicCards/rightcard/RightcardSector";
import LeftCardNoLink from "@/components/compnent/dynamicCards/LeftCard/LeftCardNoLink";

const Mission = () => {
  return (
    <section className="py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-4">
        <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-widest text-[#0d9cd4]">
          Core Values
        </span>
        <h2 className="text-3xl sm:text-4xl text-[#0E2E71] font-bold mt-2">
          Our Mission, Vision and Values
        </h2>
        <div className="w-20 h-1 bg-[#0d9cd4] mx-auto mt-3 rounded-full" />
      </div>

      <RightCardNoLink
        img={missionIcon}
        description="To help our customers build productive, safer, and healthier environments through a robust range of cleaning services, industry-leading standards, and sustainable business practices."
        title="Our Mission"
        containMedia
      />
      <LeftCardNoLink
        img={visionIcon}
        description="To provide services to 1,000+ government clients across India by 2040 with a turnover of ₹1,000 Cr."
        title="Our Vision"
        containMedia
      />
      <RightCardNoLink
        img={valuesIcon}
        description="We place immense importance on creating a positive difference in the lives of people, the planet, and the places we serve through our Humanity Ahead approach—the core values and purpose that drive every action."
        title="Our Values"
        containMedia
      />
    </section>
  );
};

export default Mission;
