"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import bgImg from "@/assets/HOME PAGE.webp";
import "./style.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
  useGSAP(() => {
    gsap.from("#hero-text", {
      y: 40,
      opacity: 0,
      duration: 0.8,
      delay: 0.1,
      ease: "power4.out",
    });
  });

  return (
    <section className="bgpic">
      <Image src={bgImg} alt="Hero Image" className="hero-img" priority />
      <div className="overlay" aria-hidden="true"></div>
      <div className="text-container">
        <div
          id="hero-text"
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center"
        >
          <h1 className="font-extrabold text-transparent text-2xl sm:text-5xl lg:text-6xl xl:text-7xl bg-clip-text bg-gradient-to-b from-neutral-100 via-slate-50 to-zinc-500 border-b-2 border-white pb-3 tracking-tight">
            ABOUT PEOPLE PLACES &amp; PLANET
          </h1>
          <p className="max-w-2xl mt-5 text-sm sm:text-lg lg:text-xl text-slate-100 font-normal leading-relaxed">
            Integrated Facility Management, Skilled Manpower Outsourcing, and
            Mechanised Cleaning Solutions across India since 1999.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
            <Link
              href="/Services"
              className="px-6 py-3 rounded-lg bg-[#0d9cd4] hover:bg-[#0b84b4] text-white font-semibold text-sm sm:text-base transition-colors shadow-lg"
            >
              Explore Our Services
            </Link>
            <Link
              href="/clients"
              className="px-6 py-3 rounded-lg bg-white/15 hover:bg-white/25 border border-white/50 text-white font-semibold text-sm sm:text-base transition-colors"
            >
              Our Clients
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
