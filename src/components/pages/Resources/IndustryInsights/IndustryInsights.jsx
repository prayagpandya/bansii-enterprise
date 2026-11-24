import Image from "next/image";
import React from "react";
import insight from "@/assets/Resources/insight.webp";
import in2 from "@/assets/Resources/02.webp";
import ScoreCard from "@/components/compnent/scorecard/ScoreCard";
import Footer from "@/components/compnent/Footer/Footer";

const IndustryInsights = () => {
  const scoreCardData1 = [
    { label: "Employees", value: "2000+" },
    { label: "Cities", value: "100+" },
    { label: "Clients", value: "250+" },
    { label: "Years", value: "25+" },
  ];

  return (
    <div className="overflow-x-clip">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 space-y-10 text-center">
        <div className="space-y-3 max-w-3xl mx-auto">
          <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-widest text-[#0d9cd4]">
            Insights &amp; Highlights
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#0E2E71]">
            Industry Insights
          </h1>
          <div className="w-20 h-1 bg-[#0d9cd4] mx-auto rounded-full" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <Image
            className="w-full h-auto rounded-2xl shadow-md object-cover"
            src={insight}
            width={800}
            height={500}
            alt="Bansi Enterprise Industry Insights"
          />
          <Image
            className="w-full h-auto rounded-2xl shadow-md object-cover"
            src={in2}
            width={800}
            height={500}
            alt="Bansi Enterprise Operational Excellence"
          />
        </div>
      </section>
      <ScoreCard title="About People, Places and Planet" data={scoreCardData1} />
      <Footer />
    </div>
  );
};

export default IndustryInsights;
