"use client";
import React, { useState } from "react";
import Link from "next/link";

const MobileMenuComponent = ({
  Title,
  SubTitles,
  Links,
  onClose,
  isActive = false,
  activePath = "",
}) => {
  const [open, setOpen] = useState(isActive);

  return (
    <div className="w-full">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        className={`w-full flex items-center justify-between px-4 py-3 text-sm font-semibold rounded-md transition-colors ${
          isActive
            ? "bg-[#e8f1ff] text-[#0E2E71]"
            : "text-[#0E2E71] hover:bg-slate-50"
        }`}
      >
        <span>{Title}</span>
        <span className="material-symbols-outlined text-[20px] leading-none">
          {open ? "expand_less" : "expand_more"}
        </span>
      </button>
      {open && (
        <ul className="pl-6 pr-4 pb-3 pt-1 space-y-1.5 text-sm text-slate-600">
          {SubTitles.length > 0 ? (
            SubTitles.map((subTitle, index) => {
              const href = Links[index];
              const subActive =
                activePath &&
                (activePath === href.toLowerCase() ||
                  activePath.startsWith(`${href.toLowerCase()}/`));

              return (
                <li key={href || index}>
                  <Link
                    href={href}
                    onClick={onClose}
                    aria-current={subActive ? "page" : undefined}
                    className={`block px-3 py-1.5 rounded-md ${
                      subActive
                        ? "bg-[#0E2E71] text-white font-semibold"
                        : "hover:text-[#0d9cd4]"
                    }`}
                  >
                    {subTitle}
                  </Link>
                </li>
              );
            })
          ) : (
            <li>
              <Link href={Links[0]} onClick={onClose} className="block py-1">
                {Title}
              </Link>
            </li>
          )}
        </ul>
      )}
    </div>
  );
};

export default MobileMenuComponent;
