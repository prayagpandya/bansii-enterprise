import Image from "next/image";
import React from "react";

const BlogPost = ({ imageUrl, title, paragraphs, categories }) => {
  return (
    <div className="flex flex-wrap justify-between">
      <div className="w-full md:w-8/12 px-4 mb-8">
        <Image
          width={500}
          height={300}
          src={imageUrl}
          alt="Featured Image"
          className="w-full h-64 object-cover rounded"
        />
        <h2 className="text-4xl font-bold mt-4 mb-2">{title}</h2>
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="text-gray-700 mb-4">
            {paragraph}
          </p>
        ))}
      </div>
      <div className="w-full md:w-4/12 px-4 mb-8">
        <div className="bg-gray-100 px-4 py-6 rounded">
          <h3 className="text-lg font-bold mb-2">Categories</h3>
          <ul className="list-disc list-inside">
            {categories.map((category, index) => (
              <li key={index}>
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  {category}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
