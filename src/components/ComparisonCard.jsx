import React from 'react';
import { FaStar } from 'react-icons/fa'; // FontAwesome star icon
import { ShareIcon } from '@heroicons/react/24/outline'; // Heroicon for Share

const ComparisonCard = ({ university1, university2 }) => {
  return (
    <div className="bg-white rounded-lg border max-w-lg mx-auto p-2">
      {/* Recommended Tag */}
      <div className="flex justify-between">
        <span className="bg-green-500 text-white text-sm font-semibold px-2 py-1 rounded-full">
          Recommended
        </span>
      </div>

      {/* University Logos */}
      <div className="relative mt-4">
        <div className="flex justify-between">
          <div className="flex-1 mr-4">
            <div className="p-4 border-2 border-gray-300 rounded-md">
              <img 
                src={university1.logo} 
                alt={university1.name} 
                className="w-54 h-32 mx-auto" 
              />
            </div>
            <h3 className="mt-2 text-md font-semibold">{university1.name}</h3>
            <p className="text-gray-600 flex  items-center mt-1">
              <FaStar className="text-yellow-500" />
              <span className="ml-1">{university1.rating} Rating</span>
            </p>
          </div>

          <div className="absolute -mt-20 inset-y-0 left-1/2 transform -translate-x-1/2 flex items-center justify-center">
            <span className="text-lg font-semibold text-white rounded-full bg-black px-4 py-2">
              VS
            </span>
          </div>

          <div className="flex-1">
            <div className="p-4 border-2 border-gray-300 rounded-md">
              <img 
                src={university2.logo} 
                alt={university2.name} 
                className="w-54 h-32 mx-auto" 
              />
            </div>
            <h3 className="mt-2 text-md font-semibold ">{university2.name}</h3>
            <p className="text-gray-600 flex  items-center mt-1">
              <FaStar className="text-yellow-500" />
              <span className="ml-1">{university2.rating} Rating</span>
            </p>
          </div>
        </div>
      </div>



      {/* Buttons */}
      <div className="flex justify-between mt-6">
        <button className="mt-4 sm:mt-0 bg-[#1D7BC7] text-white px-8 py-2 rounded min-w-[250px] mr-2">
              Compare
            </button>
            <button className="bg-white py-2 px-4 rounded-lg font-medium hover:bg-gray-300 flex items-center border-2 border-[#1D7BC7]">
              <ShareIcon className="h-5 w-5 text-[#1D7BC7] mr-1" /> Share
            </button>

      </div>
    </div>
  );
};

export default ComparisonCard;
