import Image from "next/image";
import React from "react";
import img1 from "@/assets/About/Directors/01.webp";
import img2 from "@/assets/About/Directors/02.webp";
import img3 from "@/assets/About/Directors/03.webp";
import img4 from "@/assets/About/Directors/04.webp";
import img5 from "@/assets/About/Directors/05.webp";
import img6 from "@/assets/About/Directors/06.webp";

const Executives = () => {
  return (
    <div className="w-full px-4 md:px-16 py-4">
      {" "}
      {/* Adjusted padding */}
      <h5 className="text-3xl font-bold text-[#0E2E71] py-5">
        Senior Management
      </h5>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-6">
        {" "}
        {/* Adjusted gaps */}
        {[img1, img2, img3, img4, img5, img6].map((img, i) => (
          <div
            key={i}
            className="bg-white col-span-1 rounded-md p-4 hover:border-b-8 hover:border-blue-500 ease-in-out duration-300" // Adjusted padding
          >
            <Image src={img} alt={`image${i + 1}`} width={400} height={400} />{" "}
            {/* Adjusted image size */}
            <div className="bg-transparent mt-2 space-y-2">
              {" "}
              {/* Adjusted margin and spacing */}
              <p className="text-2xl font-bold bg-transparent">
                {
                  [
                    "Mr. Chandrakant N. Dalvi",
                    "Mr. Prabhakar D. Karandikar",
                    "(Retd.) Lt Gen Rajendra Nimbhorkar PVSM, UYSM, AVSM, SM, VSM",
                    "Mr. Umesh G. Mane",
                    "Dr. Swapnali D. Gaikwad",
                    "Mr. Pankaj Dhingra",
                  ][i]
                }
              </p>
              <p className="bg-transparent">
                {
                  [
                    "Independent Director",
                    "Independent Director",
                    "Independent Director",
                    "Non-Executive Director",
                    "Non-Executive Director (Woman Director)",
                    "Non-Executive Director",
                  ][i]
                }
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Executives;
