// NewsSection.js
// import React from "react";
import gradCap from "../../assets/Subheading.svg"; // Ensure the image exists in /src
// import arrow from '../../assets/arrow-circle-left.svg';
import home from '../../assets/home.svg';

const NewsSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between bg-blue-100 p-8 lg:p-10 rounded-xl max-w-7xl mx-auto mt-10 mb-20">
      <div className="max-w-xl px-4 lg:px-10 mt-5 space-y-6 lg:order-first order-2">
        <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-4">
          You Are A Step Away From Becoming One Of Our 1%er
        </h2>
        <p className="text-base lg:text-lg text-gray-600 leading-relaxed mb-10">
          Providing the support, tools, and guidance you need to thrive, so you can focus on learning and building your future with confidence.
        </p>
        <div className="mt-4 flex items-center gap-x-4">
          <a
            href="https://forms.gle/nu2Bc6tWr4qrKRQy8"
            className="flex items-center justify-center space-x-2 rounded-md bg-[#1D7BC7] px-8 lg:px-16 py-2 lg:py-4 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <span className='text-lg'>Join Waitlist</span>
            <img src={home} alt="Join Waitlist" className="h-5 w-5 lg:h-6 lg:w-6" />
          </a>
        </div>
      </div>
      <div className="w-64 h-64 lg:w-80 lg:h-80 mt-6 lg:mt-0 lg:order-last order-1 mb-5">
        <img src={gradCap} alt="Graduation Cap" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default NewsSection;
