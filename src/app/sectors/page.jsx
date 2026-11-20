import React from "react";

import ContactHero from "@/components/compnent/Contact/sector private/ContactHero";
import Footer from "@/components/compnent/Footer/Footer";
import GridCardsLink from "@/components/pages/home/Sectors/Sectorscard";
import Scoresec from "@/components/pages/home/Scoresec/Scoresec";
import heroImg from "@/assets/Sectors/03Manufacturing.webp";

const SectorsPage = () => {
  return (
    <div className="overflow-x-hidden">
      <ContactHero
        img={heroImg}
        title="Sectors We Work In"
        classnameContainer="bg-cover bg-center"
      />
      <GridCardsLink />
      <Scoresec />
      <Footer />
    </div>
  );
};

export default SectorsPage;
