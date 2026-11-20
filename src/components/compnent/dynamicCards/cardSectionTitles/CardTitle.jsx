import React from "react";

const CardTitle = ({ title, flagLine }) => {
  return (
    <>
      <div className="p-6">
        <h1 className="text-3xl lg:text-5xl lg:ml-16 text-[#0b2f6a] font-medium">
          {title}
        </h1>
        <p className="lg:ml-60 mt-6 text-lg lg:text-2xl">{flagLine}</p>
      </div>
    </>
  );
};

export default CardTitle;
