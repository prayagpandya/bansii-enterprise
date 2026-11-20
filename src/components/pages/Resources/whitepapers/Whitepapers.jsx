import Link from "next/link";
import React from "react";

const Whitepapers = () => {
  return (
    <div className="w-full px-40 space-y-8 mt-40">
      <p>Industry Trends Driving the Future of Facilities Management in 2024</p>
      <p>
        As we kick off 2024, the FM industry will undergo some exciting changes
        that will shape how customers will manage and maintain their buildings.
        From the rise of smart technology to the increasing emphasis on
        sustainability, the coming years promise to be a period of
        transformation for facility management professionals.{" "}
      </p>
      <p>
        In this report, we will highlight 5 key trends that will shape the FM
        industry in 2024.
      </p>
      <button>
        <Link
          href="/whitepapers"
          className="bgwhite hover:bg-blue-700 text-blue-700 border border-blue-700 hover:border-white  font-bold py-4 px-6 rounded hover:text-white  "
        >
          Download Report
        </Link>
      </button>
    </div>
  );
};

export default Whitepapers;
