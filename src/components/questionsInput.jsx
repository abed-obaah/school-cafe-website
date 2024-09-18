import React from 'react';
import { AiOutlineUser } from 'react-icons/ai'; // Example icon, replace with the desired one

export default function SearchBar() {
  return (
    <div className="flex justify-center my-10 ">
      <div className="relative w-full max-w-7xl lg:w-2/8">
        <input
          type="text"
          placeholder="Input Your Question Here"
          className="w-full pl-12 pr-28 p-4 border border-[#B3B3B3] rounded-md"
        />
        <AiOutlineUser className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-500" />
        
        {/* Button inside the search bar */}
        <button className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
        Ask Your Question
        </button>
      </div>
    </div>
  );
}
