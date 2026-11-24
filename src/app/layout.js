import React from "react";
import MobileMenu from "@/components/compnent/navbar/mobileNavbar";
import Navbar from "@/components/compnent/navbar/Navbar";
import ClientProviders from "@/components/compnent/ClientProviders/ClientProviders";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://bansi-enterprise.in"),
  title: "Bansi Enterprise",
  description:
    "Integrated Facility Management, Skilled Manpower Outsourcing, and Mechanised Cleaning Solutions across India since 1999.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&family=Rubik:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap"
        />
      </head>
      <body>
        <main>
          <Navbar />
          <MobileMenu />
          <div id="smooth-content" className="relative">
            <div
              id="nav-scroll-sentinel"
              aria-hidden="true"
              className="pointer-events-none absolute top-0 left-0 h-3 w-full"
            />
            {children}
          </div>
          <ClientProviders />
        </main>
      </body>
    </html>
  );
}
