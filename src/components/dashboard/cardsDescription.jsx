import React from 'react';
import { Link } from 'react-router-dom';
import QuestionSelect from "./questionSelect";
import { ArrowCircleLeft, ArrowCircleRight } from 'iconsax-react';

export default function CourseSelection() {
  return (
    <div className="flex items-center justify-center mb-20">
      {/* Container */}
      <div className="bg-[#DBEFFF] rounded-xl p-10 lg:p-20 max-w-5xl w-full text-left">
        {/* Title */}
        <div className="flex justify-start mb-5">
          <QuestionSelect />
        </div>
        <div className="mb-10">
          <p className=" text-lg mb-12 font-bold">This is a question, this is a about the course, all past questions have been put together after being properly examined and documented from 1999 till 2024?</p>
          <h4 className="text-md font-normal text-[#888888] leading-tight">
          Choose Answer
          </h4>


          <div className='mb-5 mt-2'>
            <span className="inline-flex items-center gap-x-1.5 rounded-md px-2 py-1 text-lg font-medium text-gray-900 ring-1 ring-inset ring-gray-500 mr-5">
                (A) Charles Anthony
            </span>
            <span className="inline-flex items-center gap-x-1.5 rounded-md px-2 py-1 text-lg font-medium text-gray-900 ring-1 ring-inset ring-gray-500">
            (B) Charles Anthony
            </span>
          </div>

          <div >
          <span className="inline-flex items-center gap-x-1.5 rounded-md px-2 py-1 text-lg font-medium text-gray-900 ring-1 ring-inset ring-gray-500 mr-5">
        
                (C) Charles Anthony
            </span>
                <span className="inline-flex items-center gap-x-1.5 rounded-md px-2 py-1 text-lg font-medium text-gray-900 ring-1 ring-inset ring-gray-500">
                (D) Charles Anthony
                </span>
          </div>

          
        </div>

        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 items-center justify-center">
  {/* Transparent Button */}
  <button className="flex items-center justify-center bg-transparent text-gray-800 border-2 border-[#1D7BC7] py-2 px-10 sm:px-20 md:px-32 lg:px-40 w-full sm:w-auto md:w-[300px] lg:w-[400px] rounded">
    {/* Arrow Icon */}
    <ArrowCircleLeft className="mr-2" />
    {/* Button Text */}
    <span className="text-sm text-center whitespace-nowrap">Go Back</span>
  </button>

  {/* Colored Button */}
  <button className="flex items-center justify-center bg-[#1D7BC7] text-white border-2 border-[#1D7BC7] py-2 px-10 sm:px-20 md:px-32 lg:px-40 w-full sm:w-auto md:w-[300px] lg:w-[400px] rounded">
    {/* Arrow Icon */}
    {/* Button Text */}
    <span className="text-sm text-center whitespace-nowrap">Next</span>
    <ArrowCircleRight className="ml-2" />
  </button>
</div>



      </div>
    </div>
  );
}
