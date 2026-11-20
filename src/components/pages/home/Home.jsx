import Navbar from "@/components/compnent/navbar/Navbar";
import React from "react";
import Hero from "./HeroHome/Hero";
import AboutCard from "./AboutCard/AboutCard";
import GridCardsLink from "./Sectors/Sectorscard";
import ServicesSection from "./ServicesSection/ServicesSection";
import ContactPage from "@/components/compnent/Contact/ContactPage";
import Scoresec from "./Scoresec/Scoresec";
import Footer from "@/components/compnent/Footer/Footer";
import TestimonialCarousel, {
  Testimonial,
} from "@/components/compnent/Testimonials/Testimonials";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <AboutCard />
      <GridCardsLink />
      <ServicesSection />
      <TestimonialCarousel />
      <Scoresec />
      <Footer />
    </div>
  );
};

export default Home;
