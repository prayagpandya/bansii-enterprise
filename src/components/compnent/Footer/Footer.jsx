import Image from "next/image";
import React from "react";
import logo from "@/assets/01navbarLogo.webp";
import Link from "next/link";
import { VscMail } from "react-icons/vsc";
import { TbPhoneCall } from "react-icons/tb";

const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 text-[#0c2f73]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3.5">
              <Image
                src={logo}
                alt="Bansi Enterprise Logo"
                width={96}
                height={96}
                className="rounded-full object-contain w-24 h-24"
              />
              <span className="text-2xl font-bold text-[#0E2E71]">
                Bansi Enterprise
              </span>
            </Link>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed text-justify">
              Bansi Enterprise is based in Gujarat, offering unrivaled Manpower
              Outsourcing and Mechanised Cleaning Services to public &amp;
              private sectors across India.
            </p>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <h4 className="font-bold text-lg text-[#0E2E71] tracking-wide uppercase">
              Useful Links
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5 text-sm sm:text-base text-slate-600">
              <div className="flex flex-col gap-2.5">
                <Link className="hover:text-[#0d9cd4] transition-colors" href="/">
                  Home
                </Link>
                <Link
                  className="hover:text-[#0d9cd4] transition-colors"
                  href="/Services"
                >
                  Services
                </Link>
                <Link
                  className="hover:text-[#0d9cd4] transition-colors"
                  href="/clients"
                >
                  Clients
                </Link>
                <Link
                  className="hover:text-[#0d9cd4] transition-colors"
                  href="/Events/eventsAndUpdates"
                >
                  Events &amp; Updates
                </Link>
              </div>
              <div className="flex flex-col gap-2.5">
                <Link
                  className="hover:text-[#0d9cd4] transition-colors"
                  href="/Events/awardsAndAchievements"
                >
                  Awards &amp; Achievements
                </Link>
                <Link
                  className="hover:text-[#0d9cd4] transition-colors"
                  href="/aboutus"
                >
                  About Us
                </Link>
                <Link
                  className="hover:text-[#0d9cd4] transition-colors"
                  href="/contactus"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-bold text-lg text-[#0E2E71] tracking-wide uppercase">
              Contact Info
            </h4>
            <div className="space-y-3 text-sm sm:text-base text-slate-600">
              <a
                href="mailto:bansienterprise1999@gmail.com"
                className="flex items-center gap-3 hover:text-[#0d9cd4] transition-colors break-all"
              >
                <VscMail className="shrink-0 text-lg text-[#0E2E71]" />
                <span>bansienterprise1999@gmail.com</span>
              </a>
              <a
                href="tel:+917890000076"
                className="flex items-center gap-3 hover:text-[#0d9cd4] transition-colors"
              >
                <TbPhoneCall className="shrink-0 text-lg text-[#0E2E71]" />
                <span>+91 7890000076</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 mt-10 pt-6 text-slate-600 text-sm sm:text-base text-center">
          <p>
            Copyright &copy; 2026 BANSI ENTERPRISES INDIA LIMITED | All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
