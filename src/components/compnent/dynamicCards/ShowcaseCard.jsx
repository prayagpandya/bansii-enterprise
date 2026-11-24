import Image from "next/image";
import Link from "next/link";
import React from "react";

/**
 * Shared two-column alternating card layout used across Home and Sector pages
 * so spacing, image framing, and typography remain consistent site-wide.
 */
const ShowcaseCard = ({
  img,
  title,
  description,
  link,
  mediaPosition = "left",
  containMedia = false,
  clsimgdiv = "",
  classnm = "",
  cltitle = "",
  cldesc = "",
}) => {
  const mediaFirst = mediaPosition === "left";

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white rounded-2xl border border-slate-100 shadow-sm p-5 sm:p-8 lg:p-10">
        <div
          className={`lg:col-span-6 ${
            mediaFirst ? "lg:order-1" : "lg:order-2"
          } ${clsimgdiv}`}
        >
          <div
            className={
              containMedia
                ? "relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 mx-auto bg-white rounded-2xl p-2 flex items-center justify-center"
                : "relative w-full aspect-[16/10] overflow-hidden rounded-xl bg-slate-100 shadow-sm"
            }
          >
            <Image
              src={img}
              alt={title ? title.trim() : "Bansi Enterprise Service"}
              width={containMedia ? 320 : 720}
              height={containMedia ? 320 : 450}
              loading="lazy"
              decoding="async"
              className={
                containMedia
                  ? `w-full h-full object-contain ${classnm}`
                  : `w-full h-full object-cover object-top ${classnm}`
              }
            />
          </div>
        </div>

        <div
          className={`lg:col-span-6 flex flex-col gap-5 ${
            mediaFirst ? "lg:order-2" : "lg:order-1"
          }`}
        >
          <h3
            className={`text-2xl sm:text-3xl font-bold text-[#0b2f6a] leading-snug ${cltitle}`}
          >
            {title}
          </h3>
          <p
            className={`text-base sm:text-lg text-slate-600 text-justify leading-relaxed whitespace-pre-line ${cldesc}`}
          >
            {description}
          </p>
          {link && (
            <div className="pt-2">
              <Link
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold bg-[#0b2f6a] text-white rounded-lg border border-[#0b2f6a] hover:bg-white hover:text-[#0b2f6a] transition-colors duration-200"
                href={link}
              >
                Learn more
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ShowcaseCard;
