"use client";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const LeftCard = ({ img, title, description, link }) => {
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
    <div>
      <div className="lg:block hidden">
        <section className=" flex lg:flex-row flex-col w-full p-5">
          <div className="lg:w-1/2 bg-transparent left-card-image">
            <Image
              src={img}
              alt={title}
              width={500}
              height={300}
              className="lg:w-[65%] lg:ml-20 rounded-md"
            />
          </div>
          <div className="lg:w-1/2 lg:-ml-16 flex flex-col gap-11">
            <p className="text-3xl text-[#0b2f6a] font-medium">{title}</p>
            <p className="w-4/5 text-justify text-lg text-[#778491]">
              {description}
            </p>

            <Link
              className="px-6 w-40 py-3 text-xl bg-[#0b2f6a] text-white hover:bg-white hover:border hover:border-[#0b2f6a] ease-in duration-300 hover:rounded-xl hover:text-[#0b2f6a]"
              href={link || "/Services"}
            >
              Learn more
            </Link>
          </div>
        </section>
      </div>
      <div className="lg:hidden block">
        <section className=" flex lg:flex-row flex-col gap-6 w-full p-2">
          <div className="lg:w-1/2 lg:-ml-16 flex flex-col gap-11">
            <p className="text-[22px] px-4 text-[#0b2f6a] font-medium">
              {title}
            </p>
            <p className="w-11/12 text-justify  ml-[4%] text-lg text-[#778491]">
              {description}
            </p>

            <Link
              className="px-6 w-40 py-3 text-xl bg-[#0b2f6a] text-white hover:bg-white hover:border hover:border-[#0b2f6a] ease-in duration-300 hover:rounded-xl hover:text-[#0b2f6a] ml-4"
              href={link}
            >
              Learn more
            </Link>
          </div>
          <div className="lg:w-1/2 bg-transparent">
            <Image
              src={img}
              alt={title}
              width={500}
              height={300}
              className="lg:w-[65%] lg:ml-20 w-full px-4 rounded-md left-card-image"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default LeftCard;
