import Image from "next/image";
import React from "react";
import insight from "@/assets/Resources/insight.webp";
import in2 from "@/assets/Resources/02.webp";
import ScoreCard from "@/components/compnent/scorecard/ScoreCard";
import Footer from "@/components/compnent/Footer/Footer";
const IndustryInsights = () => {
  const scoreCardData1 = [
    { label: "Total Airports Served", value: "24+" },
    { label: "Years of Experience", value: "9+" },
    { label: "Sq.ft Area Managed", value: "8+ Lakhs" },
    { label: "Manpower", value: "8000+" },
  ];
  return (
    <div className="w-full h-full flex flex-col items-center">
      <h1 className="text-3xl font-bold text-blue-600 py-20">
        Exclusive Leadership Insights from Mrs Rupal Sinha for Economic Times
      </h1>
      <Image
        className="w-4/5 "
        src={insight}
        width={800}
        height={400}
        alt="IndustryInsights"
      />
      <Image
        className="w-4/5 "
        src={in2}
        width={800}
        height={400}
        alt="IndustryInsights"
      />
      <ScoreCard
        title="Manufacturing and Industrial in numbers"
        data={scoreCardData1}
        ClassCustom="mt-20"
      />
      <Footer />
    </div>
  );
};

export default IndustryInsights;
