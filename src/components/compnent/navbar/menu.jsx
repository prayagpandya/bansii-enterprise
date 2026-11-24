"use client";
import React, { useState } from "react";
import Link from "next/link";
import "./style.css";

const Menu = ({
  Title,
  SubTitles,
  Links,
  isLight = false,
  isActive = false,
  activePath = "",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const buttonClass = isActive
    ? `menu-title inline-flex items-center gap-1 px-3.5 py-2 text-sm font-bold uppercase tracking-wide whitespace-nowrap rounded-md shadow-sm transition-colors duration-200 ${
        isLight
          ? "bg-[#0d9cd4] text-white ring-1 ring-white/40"
          : "bg-[#0E2E71] text-white hover:bg-[#0d9cd4]"
      }`
    : "menu-title inline-flex items-center gap-1 px-3 py-2 text-sm font-bold uppercase tracking-wide whitespace-nowrap rounded-md hover-underline-animation transition-colors duration-200";

  const buttonStyle = isActive
    ? { color: "#ffffff" }
    : isLight
      ? { color: "#ffffff", textShadow: "0 2px 6px rgba(0, 0, 0, 0.85)" }
      : { color: "#0E2E71" };

  return (
    <div
      className="menu-container relative inline-flex items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button
        type="button"
        onClick={() => setIsHovered((prev) => !prev)}
        style={buttonStyle}
        className={buttonClass}
      >
        <span>{Title}</span>
        <span className="material-symbols-outlined text-[18px] leading-none">
          expand_more
        </span>
      </button>

      {/* Keep dropdown links mounted cleanly so Next.js prefetches dropdown routes before click */}
      <div
        className={`menu-content transition-opacity duration-150 ${
          isHovered
            ? "opacity-100 visible pointer-events-auto"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <ul className="menu-list">
          {SubTitles.map((subtitle, index) => {
            const href = Links[index];
            const subActive =
              activePath &&
              (activePath === href.toLowerCase() ||
                activePath.startsWith(`${href.toLowerCase()}/`));

            return (
              <li key={href || index} className="menu-item">
                <Link
                  prefetch
                  onClick={() => setIsHovered(false)}
                  aria-current={subActive ? "page" : undefined}
                  className={`block w-full px-4 py-2.5 text-sm font-semibold rounded-lg transition-colors duration-150 normal-case tracking-normal ${
                    subActive
                      ? "bg-[#0E2E71] text-white"
                      : "text-[#0E2E71] hover:bg-[#0d9cd4] hover:text-white"
                  }`}
                  href={href}
                >
                  {subtitle}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
