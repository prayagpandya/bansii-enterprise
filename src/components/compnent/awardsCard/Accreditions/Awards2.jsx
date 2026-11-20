import Image from "next/image";
import React from "react";

const Awards2 = ({ img, Title, Disc, customClass }) => {
  return (
    <div className={`${customClass} w-full border border-[#112C76] `}>
      <div className="lg:w-1/3 w-1/2 bg-transparent">
        <Image
          src={img}
          alt={Title}
          width={300}
          height={300}
          className="rounded-lg object-contain mix-blend-multiply"
        />
      </div>
      <div className=" bg-transparent  mt-4 md:mt-0 md:pl-8 text-center md:text-left">
        <h2 className="text-base lg:text-xl xl:text-2xl font-bold mb-4 bg-transparent">
          {Title}
        </h2>
        {Array.isArray(Disc) ? (
          Disc.map((item, index) => (
            <p
              key={index}
              className="text-sm lg:text-lg xl:text-xl mb-2 bg-transparent"
            >
              {item}
            </p>
          ))
        ) : (
          <p className="text-sm lg:text-base xl:text-xl text-gray-500 bg-transparent">
            {Disc}
          </p>
        )}
      </div>
    </div>
  );
};

export default Awards2;
