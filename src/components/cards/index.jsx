import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa'; // FontAwesome icons for stars
import { EyeIcon, ShareIcon, } from '@heroicons/react/24/outline'; // Import ShareIcon

const Card = ({ imageSrc, title, details, featured, views, rating, location }) => {
  return (
    <div className="relative flex flex-col overflow-hidden rounded-lg border bg-white max-w-lg w-full mx-auto">
      <div className="relative w-full h-64">
        <div
          className="absolute inset-0 bg-cover bg-center rounded-t-lg"
          style={{ backgroundImage: `url(${imageSrc})` }}
        >
          <div className="absolute inset-0 flex flex-col justify-between p-4">
            <div className="flex justify-between items-center">
              {featured && (
                <span className="bg-green-500 text-white text-xs px-4 py-2 rounded-full">
                  Featured
                </span>
              )}
              <div className="flex items-center">
                <EyeIcon aria-hidden="true" className="h-8 w-8 text-white" />
                <span className="text-white text-lg ml-2">{views}</span>
              </div>
            </div>
            <div className="flex space-x-1  bg-opacity-60 px-3 py-2 rounded-md self-start">
              {[...Array(5)].map((_, i) => (
                i < rating ? (
                  <FaStar key={i} size={14} className="text-yellow-400" />
                ) : (
                  <FaRegStar key={i} size={14} className="text-yellow-400" />
                )
              ))}
            </div>
          </div>
        </div>
        {/* Floating Share Icon */}
        <div className="absolute top-60 right-4 bg-white p-3 rounded-full shadow-lg">
          <ShareIcon className="h-6 w-6 text-black" />
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-md text-gray-600 mb-2">{details}</p>
        <p className="text-lg text-gray-600">{location}</p>
      </div>
    </div>
  );
};

export default Card;
