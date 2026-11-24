import React from "react";
import BlogPost from "@/components/pages/Resources/blogs/dynablogPage";
import Footer from "@/components/compnent/Footer/Footer";
import imgUrl from "@/assets/Blogs/Dyna/02.webp";

const page = () => {
  return (
    <div className="pt-28 overflow-x-clip">
      <BlogPost
        imageUrl={imgUrl}
        title="Innovations in Environmental Services: Leading the Way to a Greener Future"
        paragraphs={[
          "Responsible solid waste, e-waste, and coastal cleanliness management require dedicated field execution backed by sustainable collection and segregation workflows.",
          "From municipal road sweeping and tourism beach cleaning to horticultural land development and waste disposal, Bansi Enterprise deploys trained teams and mechanized equipment designed for high-traffic public spaces.",
          "Consistent environmental stewardship not only keeps public venues welcoming, but also reduces ecological footprint and supports cleaner urban and institutional communities.",
        ]}
        categories={[
          "Environmental Services",
          "Waste Management",
          "Horticulture",
        ]}
      />
      <Footer />
    </div>
  );
};

export default page;
