import Image from "next/image";
import React from "react";
import b1 from "@/assets/Blogs/01.webp";
import b2 from "@/assets/Blogs/02.webp";
import b3 from "@/assets/Blogs/03.webp";
import Link from "next/link";
import "./style.css";

const BlogCard = ({ image, category, date, title, link }) => (
  <Link href={link}>
    <div className="flex flex-col lg:flex-row col-span-1 w-full border rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <div className="relative overflow-hidden bg-cover bg-no-repeat w-full">
        <Image
          src={image}
          className="transition-transform duration-300 ease-in-out transform group-hover:scale-110 w-full h-auto"
          alt={title}
        />
      </div>
      <div className="p-4 space-y-4">
        <p className="text-blue-500 font-semibold hover-underline-animation">
          {category}
        </p>
        <p className="text-gray-500 text-sm">{date}</p>
        <h2 className="text-xl lg:text-2xl font-bold mt-2 hover:text-blue-600 duration-500 transition-all">
          {title}
        </h2>
        {/* Wrapping content inside the Link component */}
        <span className="text-blue-500 mt-4 inline-block border-b py-1 border-black hover:text-pink-500 hover:text-lg transition-all duration-300 hover:-translate-y-2">
          Read More
        </span>
      </div>
    </div>
  </Link>
);

const Blogs = () => {
  const blogData = [
    {
      image: b1,
      category: "Facility Management",
      date: "By BVG INDIA / January 18, 2024",
      title:
        "The Facility Management Boom: A Surge of Efficiency, Sustainability, and Innovation",
    },
    {
      image: b2,
      category: "Environmental Services",
      date: "By BVG INDIA / February 10, 2024",
      title:
        "Innovations in Environmental Services: Leading the Way to a Greener Future",
    },
    {
      image: b3,
      category: "Healthcare Management",
      date: "By BVG INDIA / March 5, 2024",
      title:
        "Advancements in Healthcare Management: Ensuring Better Patient Outcomes",
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:px-20 py-10">
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
  );
};

export default Blogs;
