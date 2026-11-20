import Image from "next/image";
import React from "react";

const Awards = ({ img, Title, Disc, customClass }) => {
  return (
    <div className={`${customClass} w-full`}>
      <div className="w-full bg-transparent flex justify-center">
        <Image
          src={img}
          alt={Title}
          width={300}
          height={300}
          className="rounded-lg md:w-full w-1/2 object-cover mix-blend-multiply"
        />
      </div>
      <div className="w-full bg-transparent  mt-4 md:mt-0 md:pl-8 text-center md:text-left">
        <h2 className="text-base font-bold mb-4 bg-transparent">{Title}</h2>
        {Array.isArray(Disc) ? (
          Disc.map((item, index) => (
            <p key={index} className="text-sm mb-2 bg-transparent">
              {item}
            </p>
          ))
        ) : (
          <p className="text-sm text-gray-500 bg-transparent">{Disc}</p>
        )}
      </div>
    </div>
  );
};

export default Awards;
