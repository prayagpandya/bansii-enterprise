import React from "react";
import BlogPost from "@/components/pages/Resources/blogs/dynablogPage";
import Footer from "@/components/compnent/Footer/Footer";
import imgUrl from "@/assets/Blogs/Dyna/03.webp";

const page = () => {
  return (
    <div className="pt-28 overflow-x-clip">
      <BlogPost
        imageUrl={imgUrl}
        title="Advancements in Healthcare Management: Ensuring Better Patient Outcomes"
        paragraphs={[
          "Clinical hygiene, infection control, and responsive support staffing are fundamental to safe hospital care for patients, clinicians, and visitors.",
          "Bansi Enterprise supports government and medical institutions with ICU and isolation ward sanitization, equipment disinfection, bio-medical waste handling, security, and patient-care assistance aligned with strict institutional protocols.",
          "Through regular staff training and dependable round-the-clock deployment, healthcare facilities maintain clean, well-organized clinical environments every day.",
        ]}
        categories={[
          "Healthcare Management",
          "Sanitation Services",
          "Infection Control",
        ]}
      />
      <Footer />
    </div>
  );
};

export default page;
