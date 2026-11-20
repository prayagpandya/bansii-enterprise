const Contact = lazy(() => import("@/components/compnent/Contact/ContactPage"));
import Locations from "@/components/compnent/Contact/Locations/page";
import React, { lazy } from "react";
import LocationsInPage from "./LocationsInPage";
import Scoresec from "@/components/pages/home/Scoresec/Scoresec";
import Footer from "@/components/compnent/Footer/Footer";

const page = () => {
  return (
    <>
      <Contact />
      {/* <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-medium text-[#0b2f6a]">
          Visit Our Location
        </h2>
        <p className="mt-4  text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div> */}
      {/* <LocationsInPage /> */}
      <Scoresec />
      <Footer />
    </>
  );
};

export default page;
