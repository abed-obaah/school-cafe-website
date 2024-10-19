// NewsSection.js
import React from "react";
import gradCap from "../../assets/grad-cap.png"; // Ensure the image exists in /src
import arrow from '../../assets/arrow-circle-left.svg';

const NewsSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between bg-blue-100 p-8 lg:p-10 rounded-xl max-w-7xl mx-auto mt-10">
      <div className="max-w-xl px-4 lg:px-20 space-y-10">
        <div className="flex items-center space-x-2 mb-6">
          <img src={arrow} alt="Arrow" className="w-6 h-6" />
          <p className="text-lg">What are we bringing?</p>
        </div>

        <p className="text-2xl">1 out of 5</p>
        <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-4">
          Latest School News Updates
        </h2>
        <p className="text-base lg:text-xl text-gray-600 leading-relaxed mb-16">
          Providing the tools, resources, and guidance you need to thrive, so you can focus on learning and building your future with confidence.
        </p>
        
        <div className="mt-6 flex space-x-2">
          {[1, 2, 3, 4, 5].map((number) => (
            <span
              key={number}
              className={`w-10 h-10 flex items-center justify-center border-[#B3B3B3] border-2 rounded-full cursor-pointer ${
                number === 1 ? 'bg-[#B3B3B34F] text-white' : ''
              }`}
            >
              {number}
            </span>
          ))}
        </div>
      </div>
      <div className="w-64 h-64 lg:w-80 lg:h-80 mt-6 lg:mt-0">
        <img src={gradCap} alt="Graduation Cap" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default NewsSection;
