import React from "react";

const ContactHero = ({ img, title, classnameContainer = "" }) => {
  return (
    <section className="relative w-full min-h-[300px] md:min-h-[380px] flex items-center justify-center pt-32 pb-10 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#0E2E71]">
      <div
        className={`absolute inset-0 bg-cover bg-center md:bg-top ${classnameContainer}`}
        style={{ backgroundImage: `url(${img.src})` }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[#0E2E71]/65"
        aria-hidden="true"
      />
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h1 className="text-white tracking-wide text-3xl sm:text-4xl lg:text-5xl font-bold">
          {title}
        </h1>
      </div>
    </section>
  );
};

export default ContactHero;
