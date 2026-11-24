import React from "react";
import ContactHero from "@/components/compnent/Contact/sector private/ContactHero";
import Blogs from "@/components/pages/Resources/blogs/Blogs";
import Footer from "@/components/compnent/Footer/Footer";
import heroImg from "@/assets/Blogs/01.webp";

const page = () => {
  return (
    <div className="overflow-x-clip">
      <ContactHero img={heroImg} title="Blogs & Insights" />
      <Blogs />
      <Footer />
    </div>
  );
};

export default page;
