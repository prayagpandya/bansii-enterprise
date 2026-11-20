"use client";
import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
// Register ScrollTrigger plugin

const RightCardNoLink = ({
  img,
  title,
  description,
  classnm,
  cltitle,
  cldesc,
}) => {
  // useEffect(() => {
  //   const leftCardImages = document.querySelectorAll(".right-card-image");

  //   leftCardImages.forEach((image) => {
  //     const tl = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: image,
  //         scrub: 2,
  //         // markers: true,
  //         start: "top 100%",
  //         end: "top 0%",
  //       },
  //     });

  //     tl.to(image, {
  //       translateX: -20,
  //       duration: 2,
  //     });

  //     gsap.from(image, {
  //       translateX: 200,
  //     });
  //   });
  // }, []);
  return (
    <>
      <section className="flex -mt-5 lg:flex-row flex-col w-full p-5 lg:ml-16 gap-6 lg:gap-0 gap-y-4 ">
        <div className="lg:w-1/2 lg:ml-12 flex flex-col gap-4 lg:pr-8 lg:gap-11">
          <p
            className={`text-[22px] lg:text-3xl lg:px-0 text-[#0b2f6a] font-medium ${cltitle}`}
          >
            {title}
          </p>
          <p
            className={`w-full text-justify lg:ml-0 ml-[1%] text-base md:text-lg text-[#778491] md:ml-0 ${cldesc} lg:pr-24`}
          >
            {description}
          </p>
        </div>
        <div className="lg:w-1/2 right-card-image">
          <Image
            src={img}
            alt={title}
            width={500}
            height={300}
            className={`lg:w-[80%] object-cover object-top max-h-80 min-h-80 md:w-full object-cover lg:mr-20 rounded-md ${classnm}`}
          />
        </div>
      </section>
    </>
  );
};

export default RightCardNoLink;
