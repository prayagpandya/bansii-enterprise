import React from "react";
import visionImg from "@/assets/About/vision.webp";

const Vision = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flip">
        <div
          className="front"
          style={{
            backgroundImage: `url(${visionImg.src})`,
          }}
        >
          <h1 className="text-shadow">VISION</h1>
        </div>
        <div className="back">
          <h2>Bansi Enterprise</h2>
          <p>
            Delivering integrated facility management and reliable manpower
            solutions across India.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Vision;
