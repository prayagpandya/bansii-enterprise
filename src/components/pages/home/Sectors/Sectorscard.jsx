import Link from "next/link";
import React from "react";
import "./style.css";
const GridCardsLink = () => {
  return (
    <div className="flex flex-col xl:mt-20 mt-40 gap-4 p-5 flex-wrap">
      <div className="row-span-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 h-[1000px] md:h-[700px] lg:h-[600px] xl:h-[350px] xl:grid-cols-3 gap-4">
        <Link
          href={"/sectors"}
          className="h-full px-3 flex flex-col justify-center gap-4 bg-[#0E2E71] "
        >
          <span className="bg-transparent underline text-white text-left text-xl  italic">
            Take a Tour
          </span>
          <span className="border-b bg-transparent text-white border-blue-400 text-4xl xl:text-[40px] xl:leading-[50px]">
            SECTORS WE WORK IN
          </span>
        </Link>
        <div className="h-full   rounded-xl flex flex-col justify-end pb-3 items-center bgimg2">
          <div className="px-5 py-2">
            <Link
              className="inline-block px-4 py-3 text-lg md:text-base bg-[#0E2E71] text-white hover:bg-blue-300 ease-in duration-300 hover:rounded-xl hover:text-blue-500"
              href={"/sectors/healthCareAndLifeServices"}
            >
              Healthcare and Life Services
            </Link>
          </div>
        </div>
        <div className="h-full  rounded-xl flex flex-col justify-end pb-7 items-center bgimg4">
          <Link
            className="inline-block px-3 py-3 text-lg md:text-base bg-[#0E2E71] text-white hover:bg-blue-300 ease-in duration-300 hover:rounded-xl hover:text-blue-500"
            href={"/sectors/education"}
          >
            Education
          </Link>
        </div>
      </div>
      <div className="row-span-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 h-[1000px] md:h-[700px] lg:h-[600px] xl:h-[350px] xl:grid-cols-3 gap-4">
        <div className="h-full   rounded-xl flex flex-col justify-end pb-7 items-center bgimg5">
          <Link
            className="inline-block px-3 py-3 text-lg md:text-base bg-[#0E2E71] text-white hover:bg-blue-300 ease-in duration-300 hover:rounded-xl hover:text-blue-500"
            href={"/sectors/ities"}
          >
            IT/ITES
          </Link>
        </div>
        <div className=" h-full  rounded-xl flex flex-col justify-end pb-7 items-center bgimg6">
          <Link
            className="inline-block px-3 py-3 text-lg md:text-base bg-[#0E2E71] text-white hover:bg-blue-300 ease-in duration-300 hover:rounded-xl hover:text-blue-500"
            href={"/sectors/hospitality"}
          >
            Hospitality
          </Link>
        </div>
        <div className="h-full   rounded-xl flex flex-col justify-end pb-7 items-center bgimg7">
          <Link
            className="inline-block px-3 py-3 text-lg md:text-base bg-[#0E2E71] text-white hover:bg-blue-300 ease-in duration-300 hover:rounded-xl hover:text-blue-500"
            href={"/sectors/bankingAndFinance"}
          >
            Banking and Finance
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GridCardsLink;
