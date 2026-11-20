import Image from "next/image";
import React from "react";
import logo from "@/assets/01navbarLogo.webp";
import Link from "next/link";
import { VscMail } from "react-icons/vsc";
import { TbPhoneCall } from "react-icons/tb";

const Footer = () => {
  return (
    <footer className="bg-white text-[#0c2f73]">
      <div className="container mx-auto py-6 px-4 lg:px-10">
        <div className="flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-row items-start lg:items-start mt-6 lg:justify-between gap-4">
          <div className="flex flex-col items-center lg:items-start">
            <div>
              <Image src={logo} alt="Logo" width="100" height="100" />
              <p className="text-3xl font-bold">Bansi Enterprise</p>
              <p className="xl:max-w-xs lg:max-w-xl ">
                Bansi Enterprise based in Gujarat. We offer unrivaled Manpower
                Outsourcing Services, Mechanised Cleaning services
                to public & private sectors in India.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-y-2">
            <h4 className="font-bold text-2xl">Useful Links</h4>
            <div className="max-w-2xl flex gap-10 text-sm">
              <div className="flex flex-col gap-y-2 mt-4 lg:mt-0">
                <Link href="/">Home</Link>
                <Link href="/Services">Services</Link>
                <Link href="/sectors/healthCareAndLifeServices">
                  Health Care And Life Services
                </Link>
                <Link href="/sectors/education">Education</Link>
              </div>
              <div className="flex flex-col gap-y-2 mt-4 lg:mt-0">
                <Link href="/sectors/ities">It/Ies</Link>
                <Link href="/sectors/hospitality">Hospitality</Link>
                <Link href="/sectors/bankingAndFinance">
                  Banking And Finance
                </Link>
                <Link href="/Events/eventsAndUpdates">Events And Updates</Link>
                <Link href="/Events/awardsAndAchievements">
                  Awards And Achievements
                </Link>
                <Link href="/aboutus">About Us</Link>
                <Link href="/contactus">Contact Us</Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col ">
            <h4 className="font-bold text-xl">Contact Info</h4>
            <div>
              <p className="flex items-center gap-2">
                <VscMail />
                bansienterprise1999@gmail.com
              </p>
              <p className="flex items-center gap-2">
                <TbPhoneCall />
                +91 7890000076
              </p>
              {/* <div>
                <ul className="flex items-center icons pt-10 gap-6 lg:mt-0">
                  <li className="scale-150">
                    <FaFacebook />
                  </li>
                  <li className="scale-150">
                    <FaInstagram />
                  </li>
                  <li className="scale-150">
                    <FaLinkedin />
                  </li>
                </ul>
              </div> */}
            </div>
          </div>

          {/* <div className="flex flex-col gap-y-2">
            <h4 className="text-xl font-bold">Facebook</h4>
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D61558433937480&tabs=timeline&width=250&height=300&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId"
              width="250"
              height="300"
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              frameBorder="0"
              allowFullscreen="true"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          </div> */}
        </div>
        <div className="border-t border-gray-700 mt-6 pt-4 text-gray-600 text-xl text-center">
          <p>
            Copyright © 2026 BANSI ENTERPRISES INDIA LIMITED | All Rights
            Reserved. Powered by <a href="https://festiviya.com" target="_blank" rel="noopener noreferrer" className="hover:underline">festiviya.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
