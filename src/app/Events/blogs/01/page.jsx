import React from "react";
import BlogPost from "@/components/pages/Resources/blogs/dynablogPage";
import Footer from "@/components/compnent/Footer/Footer";
import imgUrl from "@/assets/Blogs/Dyna/01.webp";

const page = () => {
  return (
    <div className="pt-28 overflow-x-clip">
      <BlogPost
        imageUrl={imgUrl}
        title="The Facility Management Boom: A Surge of Efficiency, Sustainability, and Innovation"
        paragraphs={[
          "Modern institutions, hospitals, educational campuses, and public infrastructure rely on integrated facility management to maintain seamless operations while controlling overhead.",
          "At Bansi Enterprise, trained manpower, structured checklists, preventive electro-mechanical upkeep, and mechanized cleaning systems work together to elevate hygiene, safety, and operational continuity across every site.",
          "By combining disciplined workforce supervision with measurable service-level standards, organizations can focus on their core mission while trusting day-to-day facility care to experienced specialists.",
        ]}
        categories={[
          "Facility Management",
          "Manpower Solutions",
          "Operational Efficiency",
        ]}
      />
      <Footer />
    </div>
  );
};

export default page;
