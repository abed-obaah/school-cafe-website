// src/components/Header.js
import React from 'react';
import Logo from '../assets/snLogo.png';

export default function Header() {
  return (
    <header className="bg-[#E9F5FF] p-10 shadow-md flex flex-col sm:flex-row justify-between items-center">
      <div className="flex items-center">
        <img src={Logo} alt="Logo" className="h-10" />
      </div>
      {/* Spaced Navigation */}
      <nav className="mt-4 sm:mt-0 flex space-x-20">
        <a href="#home" className="text-gray-600 hover:text-blue-500 ">Home</a>
        <a href="#students" className="text-gray-600 hover:text-blue-500">Student News</a>
        <a href="#nysc" className="text-gray-600 hover:text-blue-500">NYSC News</a>
        <a href="#about" className="text-gray-600 hover:text-blue-500">Others</a>
        <a href="#about" className="text-gray-600 hover:text-blue-500">About Us</a>
      </nav>
      <button className="mt-4 sm:mt-0 bg-blue-500 text-white px-4 py-2 rounded">Contact Us</button>
    </header>
  );
}
