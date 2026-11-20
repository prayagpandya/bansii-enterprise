import React from "react";

const SectorHero = ({ img, title, description }) => {
  return (
    <>
      <div className="relative h-[80vh]">
        <div
          className="absolute top-0 left-0 w-full h-[80%] bg-cover bg-center md:bg-top"
          style={{
            backgroundImage: `url(${img.src})`,
            backgroundSize: "cover",
          }}
        ></div>
        <div className="absolute z-[8] bg-[#ffffffe0]  md:space-y-4 md:p-6 md:pb-12 lg:p-8 lg:pb-14 xl:p-10 xl:pb-16 md:w-2/5 h-fit md:left-20 xl:top-32 lg:top-24 md:top-24  px-8 py-10 top-[13%] w-[90%] md:mx-0 md:my-0 mx-4 my-8">
          <p className="bg-transparent -ml-3 -mt-3 md:mt-0 md:ml-0 text-2xl mb-4 font-bold  lg:text-3xl text-[#0b2f6a]">
            {title}
          </p>
          <p className="bg-transparent xl:text-xl md:text-justify -ml-4 md:ml-0 ">
            {description}
          </p>
        </div>
      </div>
    </>
  );
};

export default SectorHero;
