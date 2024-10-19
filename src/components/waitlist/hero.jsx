// NewsSection.js
import React from "react";
import gradCap from "../../assets/grad-cap.png"; // Ensure the image exists in /src
import arrow from '../../assets/arrow-circle-left.svg'

const NewsSection = () => {
  return (
    <div className="flex items-center justify-between bg-blue-100 p-10 rounded-xl max-w-7xl mx-auto mt-10">
        
      <div className="max-w-xl px-20 space-y-10">
        <div className="flex space-x-2 mb-20">
         <img src={arrow} alt="Graduation Cap" className="w-6 h-6" />
         <p>What are we bringing?</p>
        </div>
       
        <p>1 out of 5</p>
        <h2 className="text-5xl font-bold text-gray-800 mb-6">
          Latest School News Updates
        </h2>
        <p className="text-xl text-gray-600 leading-relaxed mb-40">
          Providing the tools, resources, and guidance you need to thrive, so
          you can focus on learning and building your future with confidence.
        </p>
        <div className="mt-16 flex space-x-3">
          <span className="w-10 h-10 flex items-center justify-center bg-[#B3B3B34F] border-[#B3B3B3] border-2 text-white rounded-full cursor-pointer">
            1
          </span>
          <span className="w-10 h-10 flex items-center justify-center border-[#B3B3B3] border-2 rounded-full cursor-pointer ">
            2
          </span>
          <span className="w-10 h-10 flex items-center justify-center  border-[#B3B3B3] border-2 rounded-full cursor-pointer">
            3
          </span>
          <span className="w-10 h-10 flex items-center justify-center  border-[#B3B3B3] border-2 rounded-full cursor-pointer">
            4
          </span>
          <span className="w-10 h-10 flex items-center justify-center  border-[#B3B3B3] border-2 rounded-full cursor-pointer">
            5
          </span>
        </div>
      </div>
      <div className="w-80 h-80 mr-20">
        <img src={gradCap} alt="Graduation Cap" className="w-full h-full" />
      </div>
    </div>
  );
};

export default NewsSection;
