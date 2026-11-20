import Image from "next/image";
import React from "react";

const AboutCard = () => {
  return (
    <section className="bg-white dark:bg-gray-900 mt-[44%] md:mt-[18%] lg:mt-[15%] xl:mt-[12%] 2xl:mt-[10%]">
      <h1 className="text-center text-3xl md:text-4xl text-nowrap lg:text-[43px] xl:text-5xl font-bold text-[#0b2f6a]">
        About Bansi Enterprise
      </h1>
      <div className="gap-16 items-center px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <p className="mb-4">
            Established in 1999, Bansi Enterprise is a leading manpower service provider dedicated to delivering reliable staffing and workforce solutions across multiple industries. With over 25 years of experience, we specialize in providing skilled, semi-skilled, and unskilled manpower tailored to our clients&apos; operational needs.
          </p>
          <p>
            Our commitment to quality, transparency, and customer satisfaction has made us a trusted partner for businesses seeking dependable workforce solutions. We focus on building lasting relationships by delivering the right people at the right time, ensuring efficiency, productivity, and success for every client.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <Image
            className="w-full h-auto rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
            width={500}
            height={600}
            unoptimized
            alt="office content 1"
          />
          <Image
            className="mt-4 w-full h-auto lg:mt-10 rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
            width={500}
            height={600}
            unoptimized
            alt="office content 2"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutCard;
