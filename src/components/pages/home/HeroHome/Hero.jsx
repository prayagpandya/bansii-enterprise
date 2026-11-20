"use client";
import React from "react";
import Image from "next/image";
import bgImg from "@/assets/HOME PAGE.webp";
import "./style.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
  useGSAP(() => {
    gsap.from("#hero-text", {
      y: 100,
      opacity: 0,
      autoAlpha: 0,
      duration: 3,
      delay: 1,
      ease: "power4.out",
      stagger: 1.4,
    });
  });
  return (
    <>
      <div className="bgpic">
        <Image src={bgImg} alt="Hero Image" className="hero-img" priority />
        <div className="overlay"></div>
        <div className="text-container">
          <h1
            className="font-extrabold text-transparent text-xl md:whitespace-nowrap md:text-7xl mt-40 bg-clip-text bg-gradient-to-b from-neutral-100 to-zinc-600 ml-[20%] via-slate-50 border-b-2 border-white opacity-100"
            id="hero-text"
          >
            ABOUT PEOPLE PLACES & PLANET
          </h1>
        </div>
      </div>
    </>
  );
};

export default Hero;
