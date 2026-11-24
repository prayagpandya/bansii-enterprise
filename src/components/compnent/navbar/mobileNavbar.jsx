"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import MobileMenuComponent from "./mobileMenu";
import logo from "@/assets/01navbarLogo.webp";

const MobileMenu = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [isOpen, setIsOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const checkScroll = (event) => {
      const target = event?.target;
      const targetTop =
        target && target !== document && typeof target.scrollTop === "number"
          ? target.scrollTop
          : 0;
      const sentinel = document.getElementById("nav-scroll-sentinel");
      const sentinelOut = sentinel
        ? sentinel.getBoundingClientRect().top < -5
        : false;
      const scrollTop = Math.max(
        window.scrollY || 0,
        window.pageYOffset || 0,
        document.documentElement?.scrollTop || 0,
        document.body?.scrollTop || 0,
        targetTop
      );
      setIsScroll(scrollTop > 10 || sentinelOut);
    };

    checkScroll();

    let observer;
    const sentinel = document.getElementById("nav-scroll-sentinel");
    if (sentinel && typeof IntersectionObserver !== "undefined") {
      observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          if (entry) {
            setIsScroll(!entry.isIntersecting);
          }
        },
        { threshold: 0 }
      );
      observer.observe(sentinel);
    }

    window.addEventListener("scroll", checkScroll, { passive: true });
    document.addEventListener("scroll", checkScroll, {
      passive: true,
      capture: true,
    });
    return () => {
      if (observer) observer.disconnect();
      window.removeEventListener("scroll", checkScroll);
      document.removeEventListener("scroll", checkScroll, { capture: true });
    };
  }, [pathname]);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const hasColoredBg = !isHomePage || isScroll || isOpen;
  const normalizedPath = (pathname || "/").toLowerCase();

  const isRouteActive = (href) => {
    const target = href.toLowerCase();
    if (target === "/") return normalizedPath === "/";
    return normalizedPath === target || normalizedPath.startsWith(`${target}/`);
  };

  const mobileLinkClass = (href) =>
    `px-4 py-3.5 text-sm font-semibold rounded-md transition-colors ${
      isRouteActive(href)
        ? "bg-[#0E2E71] text-white"
        : "text-[#0E2E71] hover:bg-slate-50"
    }`;

  return (
    <header
      ref={menuRef}
      style={{
        backgroundColor: hasColoredBg ? "#e8f1ff" : "transparent",
        color: hasColoredBg ? "#0E2E71" : "#ffffff",
      }}
      className={
        hasColoredBg
          ? "fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-[#e8f1ff] px-5 py-3 text-[#0E2E71] shadow-md border-b border-blue-200/80 lg:hidden transition-all duration-300"
          : "fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-transparent px-5 py-3 text-white lg:hidden transition-all duration-300"
      }
    >
      <Link href="/" className="flex items-center" onClick={closeMenu}>
        <Image
          src={logo}
          width={64}
          height={64}
          alt="Bansi Enterprise Logo"
          className="object-contain w-16 h-16"
          priority
        />
      </Link>

      <button
        type="button"
        onClick={toggleMenu}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        style={
          hasColoredBg
            ? { color: "#0E2E71" }
            : { color: "#ffffff", textShadow: "0 2px 6px rgba(0, 0, 0, 0.85)" }
        }
        className="p-2 rounded-lg focus:outline-none"
      >
        <span className="material-symbols-outlined text-3xl leading-none">
          {isOpen ? "close" : "menu"}
        </span>
      </button>

      {isOpen && (
        <nav className="absolute top-full left-0 right-0 bg-white text-slate-700 shadow-xl border-t border-slate-100 max-h-[80vh] overflow-y-auto px-4 py-4 z-50">
          <div className="flex flex-col divide-y divide-slate-100">
            <Link
              className={mobileLinkClass("/")}
              href="/"
              aria-current={isRouteActive("/") ? "page" : undefined}
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              className={mobileLinkClass("/Services")}
              href="/Services"
              aria-current={isRouteActive("/Services") ? "page" : undefined}
              onClick={closeMenu}
            >
              Services
            </Link>
            <Link
              className={mobileLinkClass("/clients")}
              href="/clients"
              aria-current={isRouteActive("/clients") ? "page" : undefined}
              onClick={closeMenu}
            >
              Our Clients
            </Link>
            <div className="py-1">
              <MobileMenuComponent
                Title="Events"
                isActive={normalizedPath.startsWith("/events")}
                activePath={normalizedPath}
                SubTitles={["Events And Updates", "Awards And Achievements"]}
                Links={[
                  "/Events/eventsAndUpdates",
                  "/Events/awardsAndAchievements",
                ]}
                onClose={closeMenu}
              />
            </div>
            <Link
              className={mobileLinkClass("/aboutus")}
              href="/aboutus"
              aria-current={isRouteActive("/aboutus") ? "page" : undefined}
              onClick={closeMenu}
            >
              About Us
            </Link>
            <Link
              className={mobileLinkClass("/contactus")}
              href="/contactus"
              aria-current={isRouteActive("/contactus") ? "page" : undefined}
              onClick={closeMenu}
            >
              Contact Us
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default MobileMenu;
