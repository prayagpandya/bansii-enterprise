"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const RightCard = ({ img, title, description, link }) => {
  // const cardRef = useRef(null);

  // useEffect(() => {
  //   if (!cardRef.current) return;

  //   const images = cardRef.current.querySelectorAll(".right-card-image");

  //   images.forEach((image) => {
  //     const tl = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: image,
  //         scrub: 2,
  //         start: "top 100%",
  //         end: "top 0%",
  //       },
  //     });

  //     tl.fromTo(image, { translateX: 200 }, { translateX: -20, duration: 2 });
  //   });
  // }, []);

  return (
    <section
      // ref={cardRef}
      className="flex lg:flex-row flex-col w-full p-5 lg:ml-16 gap-6 lg:gap-0"
    >
      <div className="lg:w-1/2  lg:ml-14 flex flex-col gap-4 lg:gap-8">
        <p className="text-[22px] -ml-3 lg:ml-0 lg:text-3xl lg:px-0 px-4 text-[#0b2f6a] font-medium">
          {title}
        </p>
        <p className="w-11/12 text-justify ml-1 lg:ml-0 text-lg text-[#778491]">
          {description}
        </p>
        <Link
          className="px-6 w-40 py-3 text-xl bg-[#0b2f6a] text-white hover:bg-white hover:border hover:border-[#0b2f6a] ease-in duration-300 hover:rounded-xl hover:text-[#0b2f6a] ml-2 lg:ml-0"
          href={link}
        >
          Learn more
        </Link>
      </div>
      <div className="lg:w-1/2 right-card-image">
        <Image
          src={img}
          alt={title}
          width={500}
          height={300}
          className="lg:w-[65%] mr-20 px-1 rounded-md"
        />
      </div>
    </section>
  );
};

export default RightCard;
