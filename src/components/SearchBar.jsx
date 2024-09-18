import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { AiOutlineUser, } from 'react-icons/ai'; // Example icon, replace with the desired one

export default function SearchBar() {
  return (
    <div className="flex justify-center mt-8">
      <div className="relative w-full max-w-7xl lg:w-2/8">
        <input
          type="text"
          placeholder="Search For Student, University, JAMB, WAEC, NYSC info"
          className="w-full pl-12 pr-12 p-4 border border-[#B3B3B3] rounded-md"
        />
        <AiOutlineUser className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-500" />
        <FaSearch className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500" />
      </div>
    </div>
  );
}
