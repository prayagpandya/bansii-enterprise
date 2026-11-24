import Link from "next/link";
import React from "react";

const Whitepapers = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-20 space-y-6">
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm space-y-5">
        <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-widest text-[#0d9cd4]">
          Research &amp; Reports
        </span>
        <h1 className="text-2xl sm:text-3xl font-bold text-[#0E2E71]">
          Industry Trends Driving the Future of Facilities Management
        </h1>
        <p className="text-base text-slate-600 leading-relaxed text-justify">
          Facilities management continues to evolve rapidly as institutions
          adopt mechanized cleaning, sustainable waste workflows, digital
          monitoring, and structured safety compliance across workplaces and
          public infrastructure.
        </p>
        <p className="text-base text-slate-600 leading-relaxed text-justify">
          Bansi Enterprise remains focused on workforce training, disciplined
          supervision, and responsive on-ground service delivery across India.
        </p>
        <div className="pt-2">
          <Link
            href="/contactus"
            className="inline-flex items-center px-6 py-3 bg-[#0E2E71] hover:bg-[#0d9cd4] text-white font-semibold rounded-lg transition-colors"
          >
            Request More Information
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Whitepapers;
