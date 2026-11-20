import React from "react";

const ContactHero = ({ img, title, classnameContainer }) => {
  return (
    <>
      <div className="relative h-[35vh] z-0">
        <div
          className={`absolute top-0 bg-bottom left-0 w-full h-[100%] md:bg-top ${classnameContainer}`}
          style={{ backgroundImage: `url(${img.src})` }}
        ></div>
        <div className=" absolute flex justify-center items-center z-10 bg-transparent w-full h-full">
          <h1 className="bg-transparent text-white tracking-wider text-center text-3xl lg:text-4xl xl:text-5xl font-bold px-20 mt-14">
            {title}
          </h1>
        </div>
      </div>
    </>
  );
};

export default ContactHero;
