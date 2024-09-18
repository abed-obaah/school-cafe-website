import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa'; // FontAwesome icons for stars
import { EyeIcon, ShareIcon } from '@heroicons/react/24/outline'; // Import ShareIcon

const Card = ({ imageSrc, title, details, featured, views, rating, location }) => {
  return (
    <div className="relative flex flex-col overflow-hidden rounded-lg border bg-white max-w-lg w-full mx-auto">
      <div className="relative w-full h-64">
        <div
          className="absolute inset-0 bg-center"
        //   style={{ backgroundImage: `url(${imageSrc})` }}
        >
            <div className='mb-10'>
            <img
                        alt="JAMB Logo"
                        src={imageSrc}
                        className="w-70 h-50 p-2 mb-3"
                      />
            </div>
          <div className="absolute inset-0 flex flex-col justify-between p-4">
            <div className="flex justify-between items-center">
              {featured && (
                <span className="bg-green-500 text-white text-xs px-4 py-2 rounded-full">
                  Featured
                </span>
              )}
             
            </div>
          </div>
        </div>
        
      </div>
      <div className="p-2 py-12">
      <p className="text-md text-gray-600 mb-2">
          {details.split('Read More').shift()}
          <span className="text-[#1D7BC7] cursor-pointer">Read More</span>
        </p>
      </div>
    </div>
  );
};

export default Card;
