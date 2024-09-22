import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa'; // FontAwesome icons for stars
import { EyeIcon, ShareIcon } from '@heroicons/react/24/outline'; // Import ShareIcon
import { Link } from 'react-router-dom';

const Card = ({ imageSrc, title, details, featured, views, rating, location }) => {
  return (
    <div className="relative flex flex-col overflow-hidden rounded-lg border bg-white max-w-lg w-full mx-auto min-h-[200px]"> {/* Minimum height */}
      <div className="p-6 flex flex-col h-full"> {/* Make inner container flex column and full height */}
        <h3 className="text-md font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-sm text-gray-600 mb-2 flex-grow">{details}</p> {/* Allow details to grow and take remaining space */}
        <Link
          to="/contact"
          className="mt-auto bg-[#1D7BC7] text-white px-3 py-2 rounded-sm text-sm w-44 text-center"
        >
          Access
        </Link>

      </div>
    </div>
  );
};

export default Card;
