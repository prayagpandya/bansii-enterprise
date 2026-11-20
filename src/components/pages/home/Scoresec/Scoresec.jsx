import ScoreCard from "@/components/compnent/scorecard/ScoreCard";
import React from "react";
const scoreCardData = [
  { label: "Employees", value: "2000+" },
  { label: "Cities", value: "100+" },
  { label: "Clients", value: "250+" },
  { label: "Years", value: "25+" },
];

const Scoresec = () => {
  return (
    <>
      <ScoreCard title="About People Places and Planet" data={scoreCardData} />
    </>
  );
};

export default Scoresec;
