"use client";
import React, { useState } from "react";
import Link from "next/link";
import "./style.css"; // Create this file for custom styles

const Menu = ({ Title, SubTitles, Links }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="menu-container bg-transparent"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <button className="menu-title font-bold hover-underline-animation hover:">
        {Title}{" "}
        <span className="material-symbols-outlined bg-transparent">
          expand_more
        </span>
      </button>
      {isHovered && (
        <div className="menu-content">
          <ul className="menu-list bg-transparent ">
            {SubTitles.map((subtitle, index) => (
              <li
                key={index}
                className="menu-item hover-underline-animation bg-transparent"
              >
                <Link className="bg-transparent font-bold" href={Links[index]}>
                  {subtitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Menu;
