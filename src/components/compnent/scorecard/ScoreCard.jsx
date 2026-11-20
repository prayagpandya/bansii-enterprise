import React from "react";

const ScoreCard = ({ title, data, ClassCustom }) => {
  return (
    <div className={`${ClassCustom} w-full bg-[#0C2F73]`}>
      <div className="max-w-7xl mx-auto bg-transparent py-4 px-4 space-y-4 sm:px-6 lg:px-8">
        <div className="text-center bg-transparent">
          <h2 className="text-3xl font-medium text-white bg-transparent">
            {title}
          </h2>
        </div>
        <dl className="w-full bg-transparent grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 border border-[#8eb4ff] bg-transparent rounded-lg"
            >
              <dd className="text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-neutral-100 to-zinc-600 via-slate-50">
                {item.value}
              </dd>
              <dt className="mt-2 text-2xl leading-6 font-medium text-transparent bg-clip-text bg-gradient-to-b from-neutral-100 to-zinc-600 via-slate-50">
                {item.label}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default ScoreCard;
