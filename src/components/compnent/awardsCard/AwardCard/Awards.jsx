import Image from "next/image";
import React from "react";

const Awards = ({ img, Title, Disc, customClass = "" }) => {
  return (
    <article className={`w-full flex flex-col sm:flex-row items-center gap-6 ${customClass}`}>
      <div className="w-36 shrink-0 flex justify-center">
        <Image
          src={img}
          alt={Title}
          width={200}
          height={200}
          className="rounded-lg w-full h-auto object-contain"
        />
      </div>
      <div className="flex-1 text-center sm:text-left space-y-2">
        <h2 className="text-lg font-bold text-[#0E2E71]">{Title}</h2>
        {Array.isArray(Disc) ? (
          Disc.map((item, index) => (
            <p key={index} className="text-sm text-slate-600">
              {item}
            </p>
          ))
        ) : (
          <p className="text-sm text-slate-500">{Disc}</p>
        )}
      </div>
    </article>
  );
};

export default Awards;
