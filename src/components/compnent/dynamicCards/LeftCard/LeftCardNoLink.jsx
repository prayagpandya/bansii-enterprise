"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const LeftCardNoLink = ({ img, title, description, clsimgdiv }) => {
  // useEffect(() => {
  //   const leftCardImages = document.querySelectorAll(".left-card-image");

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
  //       translateX: 20,
  //       duration: 2,
  //     });

  //     gsap.from(image, {
  //       translateX: -200,
  //     });
  //   });
  // }, []);
  return (
    <>
      <div className="hidden lg:block">
        <section className="flex lg:flex-row flex-col w-full p-5 ">
          <div
            className={`lg:w-1/2 ${clsimgdiv} bg-transparent left-card-image`}
          >
            <Image
              src={img}
              alt={title}
              width={500}
              height={500}
              className="lg:w-[70%] object-cover object-top max-h-80 min-h-80 md:w-full object-cover lg:ml-20 rounded-md"
            />
          </div>
          <div className="lg:w-1/2 lg:-ml-16 flex flex-col gap-11">
            <p className="text-3xl text-[#0b2f6a] font-medium">{title}</p>
            <p className="w-11/12 text-justify text-lg text-[#778491]">
              {description}
            </p>
          </div>
        </section>
      </div>
      <div className="lg:hidden block">
        <section className="flex lg:flex-row flex-col gap-y-4 lg:gap-y-0 w-full p-5 ">
          <div className="lg:w-1/2 lg:-ml-16 flex flex-col gap-4">
            <p className="text-[22px] px-4 text-[#0b2f6a] font-medium -ml-4 lg:ml-0 ">
              {title}
            </p>
            <p className="w-full text-justify lg:ml-0 ml-[1%] md:ml-0 text-base md:text-lg text-[#778491]">
              {description}
            </p>
          </div>
          <div className={`lg:w-1/2 ${clsimgdiv} bg-transparent`}>
            <Image
              src={img}
              alt={title}
              width={500}
              height={500}
              className="lg:w-[65%] md:w-full object-cover lg:mr-20 rounded-md"
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default LeftCardNoLink;
