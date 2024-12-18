import React from 'react';
import {Link } from 'react-router-dom'


export default function CourseSelection() {
  return (
    <div className=" flex items-center justify-center mb-20 ">
      {/* Container */}
      <div className="bg-[#DBEFFF] rounded-xl p-10 lg:p-20 max-w-7xl w-full text-center ">
        {/* Title */}
        <div className="mb-10">
          <p className="text-gray-500 text-lg mb-1">What Are You Studying?</p>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            Select Your Course <br /> Faculty Of Study
          </h1>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-6">
        <span className="inline-flex items-center rounded-full bg-[#1D7BC7] px-8 py-1 text-md font-bold text-white ring-1 ring-inset ring-red-600/10">
        Management Science
        </span>
        <span className="inline-flex items-center rounded-full bg-[#1D7BC7] px-8 py-1 text-md font-bold text-white ring-1 ring-inset ring-red-600/10">
        Engineering
        </span>
        <span className="inline-flex items-center rounded-full bg-[#1D7BC7] px-8 py-1 text-md font-bold text-white ring-1 ring-inset ring-red-600/10">
        Science
        </span>
        <Link to={'/courses[id]'}>
        <span className="inline-flex items-center rounded-full bg-[#1D7BC7] px-8 py-1 text-md font-bold text-white ring-1 ring-inset ring-red-600/10">
        Art
        </span>
        </Link>
       
        </div>

        <div className="flex flex-wrap justify-center gap-6 mt-10">
              <span className="inline-flex items-center rounded-full bg-[#1D7BC7] px-8 py-1 text-md font-bold text-white ring-1 ring-inset ring-red-600/10">
              Social Science
              </span>
              <span className="inline-flex items-center rounded-full bg-[#1D7BC7] px-8 py-1 text-md font-bold text-white ring-1 ring-inset ring-red-600/10">
              Clinical Science
              </span>
              <span className="inline-flex items-center rounded-full bg-[#1D7BC7] px-8 py-1 text-md font-bold text-white ring-1 ring-inset ring-red-600/10">
              Pharmacy
              </span>
         
        </div>


        <div className="flex flex-wrap justify-center gap-6 mt-10">
                  <span className="inline-flex items-center rounded-full bg-[#1D7BC7] px-8 py-1 text-md font-bold text-white ring-1 ring-inset ring-red-600/10">
                   Law
                  </span>
              <span className="inline-flex items-center rounded-full bg-[#1D7BC7] px-8 py-1 text-md font-bold text-white ring-1 ring-inset ring-red-600/10">
                     Basic Medical Science
              </span>
         
        </div>
      </div>
    </div>
  );
}
