// NewsSection.js
import React from "react";
import gradCap from "../../assets/Subheading.svg"; // Ensure the image exists in /src
import arrow from '../../assets/arrow-circle-left.svg'
import home from '../../assets/home.svg'


const NewsSection = () => {
  return (
    <div className="flex items-center justify-between bg-blue-100 p-10 rounded-xl max-w-7xl mx-auto mt-10">
        
      <div className="max-w-xl px-10 space-y-10">
    
        <h2 className="text-5xl font-bold text-gray-800 mb-6">
        You Are A Step Away From Becoming One Of Our 1%er
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-40">
        Providing the support, tools, and guidance you need to thrive, so you can focus on learning and building your future with confidence.
        </p>
        <div className="mt-10 flex items-center gap-x-6">
            <a
                        href="#"
                        className="flex items-center justify-center space-x-2 rounded-md bg-[#1D7BC7] px-16 py-4 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                             <span className='text-lg ml-2'>Join Waitlist</span>
                        <img src={home} alt="App Store" className="h-6 w-6 text-white"  />
                       
                        </a>
            </div>
      </div>
      <div className="w-80 h-80 mr-20">
        <img src={gradCap} alt="Graduation Cap" className="w-full h-full" />
      </div>
    </div>
  );
};

export default NewsSection;
