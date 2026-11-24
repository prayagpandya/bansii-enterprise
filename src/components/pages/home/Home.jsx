import React from "react";
import Hero from "./HeroHome/Hero";
import AboutCard from "./AboutCard/AboutCard";
import GridCardsLink from "./Sectors/Sectorscard";
import GeographicalPresence from "@/components/compnent/GeographicalPresence/GeographicalPresence";
import TestimonialCarousel from "@/components/compnent/Testimonials/Testimonials";
import Scoresec from "./Scoresec/Scoresec";
import Footer from "@/components/compnent/Footer/Footer";

const Home = () => {
  return (
    <div className="overflow-x-clip">
      <Hero />
      <AboutCard />
      <GridCardsLink />
      <GeographicalPresence />
      <TestimonialCarousel />
      <Scoresec />
      <Footer />
    </div>
  );
};

export default Home;
