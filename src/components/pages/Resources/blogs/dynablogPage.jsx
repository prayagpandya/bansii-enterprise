import Image from "next/image";
import React from "react";

const BlogPost = ({ imageUrl, title, paragraphs, categories }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        <div className="lg:col-span-8 space-y-6">
          <div className="overflow-hidden rounded-2xl shadow-md">
            <Image
              width={900}
              height={500}
              src={imageUrl}
              alt={title || "Featured Image"}
              className="w-full h-72 sm:h-96 object-cover"
            />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#0E2E71] leading-tight">
            {title}
          </h1>
          <div className="space-y-4">
            {paragraphs.map((paragraph, index) => (
              <p key={index} className="text-slate-600 leading-relaxed text-justify">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        <aside className="lg:col-span-4">
          <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl space-y-4">
            <h3 className="text-lg font-bold text-[#0E2E71]">Categories</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              {categories.map((category, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#0d9cd4]" />
                  <span>{category}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default BlogPost;
