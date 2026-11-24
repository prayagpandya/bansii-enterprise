"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import navlogo from "@/assets/01navbarLogo.webp";
import Menu from "./menu";

const Navbar = () => {
  const pathname = usePathname();
  const normalizedPath = (pathname || "/").toLowerCase();
  const isHomePage = normalizedPath === "/";
  const [isScroll, setIsScroll] = useState(false);

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

  // Transparent-until-scroll applies only on Home page; inner pages always have the colored navbar.
  const hasColoredBg = !isHomePage || isScroll;

  const isRouteActive = (href) => {
    const target = href.toLowerCase();
    if (target === "/") return normalizedPath === "/";
    return normalizedPath === target || normalizedPath.startsWith(`${target}/`);
  };

  const getNavLinkProps = (active) => {
    if (active) {
      return {
        className: `inline-flex items-center px-3.5 py-2 text-sm font-bold tracking-wide whitespace-nowrap rounded-md shadow-sm transition-colors duration-200 ${
          hasColoredBg
            ? "bg-[#0E2E71] text-white hover:bg-[#0d9cd4]"
            : "bg-[#0d9cd4] text-white ring-1 ring-white/40"
        }`,
        style: { color: "#ffffff" },
      };
    }

    return {
      className:
        "inline-flex items-center px-3 py-2 text-sm font-bold tracking-wide whitespace-nowrap rounded-md hover-underline-animation transition-colors duration-200",
      style: hasColoredBg
        ? { color: "#0E2E71" }
        : { color: "#ffffff", textShadow: "0 2px 6px rgba(0, 0, 0, 0.85)" },
    };
  };

  return (
    <header
      style={{
        backgroundColor: hasColoredBg ? "#e8f1ff" : "transparent",
        color: hasColoredBg ? "#0E2E71" : "#ffffff",
      }}
      className={
        hasColoredBg
          ? "fixed top-0 left-0 right-0 z-50 hidden lg:block bg-[#e8f1ff] text-[#0E2E71] shadow-md border-b border-blue-200/80 transition-all duration-300"
          : "fixed top-0 left-0 right-0 z-50 hidden lg:block bg-transparent text-white transition-all duration-300"
      }
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-8 py-2.5">
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src={navlogo}
            width={96}
            height={96}
            alt="Bansi Enterprise Logo"
            className="object-contain w-20 h-20 xl:w-24 xl:h-24"
            priority
          />
        </Link>

        <ul className="flex items-center gap-2 xl:gap-4 uppercase">
          <li className="flex items-center">
            <Link
              prefetch
              href="/"
              aria-current={isRouteActive("/") ? "page" : undefined}
              {...getNavLinkProps(isRouteActive("/"))}
            >
              Home
            </Link>
          </li>
          <li className="flex items-center">
            <Link
              prefetch
              href="/Services"
              aria-current={isRouteActive("/Services") ? "page" : undefined}
              {...getNavLinkProps(isRouteActive("/Services"))}
            >
              Services
            </Link>
          </li>
          <li className="flex items-center">
            <Link
              prefetch
              href="/clients"
              aria-current={isRouteActive("/clients") ? "page" : undefined}
              {...getNavLinkProps(isRouteActive("/clients"))}
            >
              Our Clients
            </Link>
          </li>
          <li className="flex items-center">
            <Menu
              Title="Events"
              isLight={!hasColoredBg}
              isActive={normalizedPath.startsWith("/events")}
              activePath={normalizedPath}
              SubTitles={["Events And Updates", "Awards And Achievements"]}
              Links={[
                "/Events/eventsAndUpdates",
                "/Events/awardsAndAchievements",
              ]}
            />
          </li>
          <li className="flex items-center">
            <Link
              prefetch
              href="/aboutus"
              aria-current={isRouteActive("/aboutus") ? "page" : undefined}
              {...getNavLinkProps(isRouteActive("/aboutus"))}
            >
              About Us
            </Link>
          </li>
          <li className="flex items-center">
            <Link
              prefetch
              href="/contactus"
              aria-current={isRouteActive("/contactus") ? "page" : undefined}
              {...getNavLinkProps(isRouteActive("/contactus"))}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
