import Image from "next/image";
import React from "react";
import b1 from "@/assets/Blogs/01.webp";
import b2 from "@/assets/Blogs/02.webp";
import b3 from "@/assets/Blogs/03.webp";
import Link from "next/link";
import "./style.css";

const BlogCard = ({ image, category, date, title, link }) => (
  <Link href={link} className="block h-full">
    <article className="flex flex-col sm:flex-row h-full bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative overflow-hidden sm:w-2/5 aspect-[16/10] sm:aspect-auto shrink-0">
        <Image
          src={image}
          className="transition-transform duration-300 ease-in-out group-hover:scale-105 w-full h-full object-cover"
          alt={title}
        />
      </div>
      <div className="p-6 flex flex-col justify-between gap-4 flex-1">
        <div className="space-y-2">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#0d9cd4]">
            {category}
          </span>
          <p className="text-slate-500 text-xs sm:text-sm">{date}</p>
          <h2 className="text-lg sm:text-xl font-bold text-[#0E2E71] group-hover:text-[#0d9cd4] transition-colors leading-snug">
            {title}
          </h2>
        </div>
        <span className="text-[#0E2E71] font-semibold text-sm inline-flex items-center gap-1 border-b border-[#0E2E71] pb-0.5 w-fit">
          Read More &rarr;
        </span>
      </div>
    </article>
  </Link>
);

const Blogs = () => {
  const blogData = [
    {
      image: b1,
      category: "Facility Management",
      date: "By Bansi Enterprise / January 18, 2024",
      title:
        "The Facility Management Boom: A Surge of Efficiency, Sustainability, and Innovation",
    },
    {
      image: b2,
      category: "Environmental Services",
      date: "By Bansi Enterprise / February 10, 2024",
      title:
        "Innovations in Environmental Services: Leading the Way to a Greener Future",
    },
    {
      image: b3,
      category: "Healthcare Management",
      date: "By Bansi Enterprise / March 5, 2024",
      title:
        "Advancements in Healthcare Management: Ensuring Better Patient Outcomes",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {blogData.map((blog, index) => (
          <div key={index} className="group">
            <BlogCard
              link={`/Events/blogs/0${index + 1}`}
              image={blog.image}
              category={blog.category}
              date={blog.date}
              title={blog.title}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
