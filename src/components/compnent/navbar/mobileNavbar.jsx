"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import MobileMenuComponent from "./mobileMenu";
import logo from "@/assets/01navbarLogo.webp";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
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

  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header
      className={
        isScroll || isOpen
          ? `flex items-center bg-white w-full fixed z-10 justify-between px-6 py-3 lg:hidden text-black shadow-md`
          : `flex items-center  w-full bg-transparent fixed z-10 justify-between px-6 py-3 lg:hidden text-white`
      }
    >
      <Link href="/" className="bg-transparent">
        <Image
          src={logo}
          width={50}
          height={50}
          alt="logo"
          className="rounded-full bg-inherit w-14 h-14"
        />
      </Link>
      <div className="bg-transparent">
        <div onClick={toggleMenu} className="bg-transparent">
          <span className="bg-transparent">
            {isOpen ? (
              <span className="bg-transparent material-symbols-outlined">
                close
              </span>
            ) : (
              <span className="material-symbols-outlined bg-transparent">
                menu
              </span>
            )}
          </span>
        </div>

        {isOpen && (
          <nav
            ref={menuRef}
            className="z-20 w-full absolute left-0 text-center top-16 px-5"
          >
            <div className="w-full">
              <div>
                <span>
                  <Link
                    className="text-left flex ml-6 py-4 text-gray-600"
                    href="/"
                    onClick={closeMenu}
                  >
                    Home
                  </Link>
                </span>
              </div>
              <MobileMenuComponent
                Title="Sectors"
                SubTitles={[
                  "HealthCare And LifeServices",
                  "Education",
                  "IT/ITES",
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
                onClose={closeMenu}
              />
              <div>
                <span>
                  <Link
                    className="text-left flex ml-4 py-4 text-gray-600"
                    href="/Services"
                    onClick={closeMenu}
                  >
                    Services
                  </Link>
                </span>
              </div>
              <MobileMenuComponent
                Title="Events"
                SubTitles={["Events And Updates", "Awards And Achievements"]}
                Links={[
                  "/Events/eventsAndUpdates",
                  "/Events/awardsAndAchievements",
                ]}
                onClose={closeMenu}
              />
              <div>
                <span>
                  <Link
                    className="text-left flex ml-4 py-4 text-gray-600"
                    href="/aboutus"
                    onClick={closeMenu}
                  >
                    About Us
                  </Link>
                </span>
              </div>
              <div>
                <span>
                  <Link
                    className="text-left flex ml-4 py-4 text-gray-600"
                    href="/contactus"
                    onClick={closeMenu}
                  >
                    Contact Us
                  </Link>
                </span>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default MobileMenu;
