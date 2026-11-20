"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import navlogo from "@/assets/01navbarLogo.webp";
import Menu from "./menu";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={
        isScroll
          ? `px-9 fixed w-full bg-[#fff] text-[#0E2E71] duration-200 transition-all top-0 z-50 hidden lg:block`
          : `px-9 fixed w-full bg-transparent duration-200 text-white transition-all top-0 z-50 hidden lg:block`
      }
    >
      <nav className="flex bg-transparent pr-10 items-center py-4  space-x-14">
        <div className="bg-transparent">
          <Link href={"/"} className="bg-transparent">
            <Image
              src={navlogo}
              width={80}
              height={80}
              alt="logo"
              className="rounded-full bg-inherit  xl:scale-100 lg:scale-100 "
            />
          </Link>
        </div>
        <div className="bg-transparent ">
          <ul className="flex z-20 bg-transparent gap-6 uppercase py-3">
            <li className="flex bg-transparent items-center About-Menu-Title hover:text-[#0E2E71] hover:font-bold hover-underline-animation focus:text-[#0E2E71] active:text-[#0E2E71] z-20">
              <Link className="bg-transparent font-bold" href="/">
                Home
              </Link>
            </li>
            <li className="text-md flex bg-transparent items-center About-Menu-Title hover:text-[#0E2E71] hover:font-bold hover-underline-animation focus:text-[#0E2E71] active:text-[#0E2E71] z-20">
              <Link className="bg-transparent font-bold" href="/Services">
                Services
              </Link>
            </li>
            <li className="text-md flex bg-transparent items-center">
              <Menu
                Title="Sectors"
                SubTitles={[
                  "HealthCare And LifeServices",
                  "Education",
                  "It/Ies",
                  "Hospitality",
                  "Banking And Finance",
                ]}
                Links={[
                  "/sectors/healthCareAndLifeServices",
                  "/sectors/education",
                  "/sectors/ities",
                  "/sectors/hospitality",
                  "/sectors/bankingAndFinance",
                ]}
              />
            </li>
            {/* <li className="text-md flex bg-transparent items-center">
              <Menu
                Title="Services"
                SubTitles={[
                  "Integrated Facility Management",
                  "Specialised Services And Projects",
                ]}
                Links={[
                  "/Services/integratedFacilityManagement",
                  "/Services/specialisedServicesAndProjects",
                ]}
              />
            </li> */}
            <li className="text-md flex bg-transparent items-center">
              <Menu
                Title="Events"
                SubTitles={["Events And Updates", "Awards And Achievements"]}
                Links={[
                  "/Events/eventsAndUpdates",
                  "/Events/awardsAndAchievements",
                ]}
              />
            </li>
            <li className="text-md flex bg-transparent items-center About-Menu-Title hover:text-[#0E2E71] hover:font-bold hover-underline-animation focus:text-[#0E2E71] active:text-[#0E2E71] z-20 text-nowrap">
              <Link className="bg-transparent font-bold" href="/aboutus">
                About Us
              </Link>
            </li>
            <li className="text-md flex bg-transparent items-center About-Menu-Title hover:text-[#0E2E71] hover:font-bold hover-underline-animation focus:text-[#0E2E71] active:text-[#0E2E71] z-20 text-nowrap">
              <Link className="bg-transparent font-bold" href="/contactus">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
