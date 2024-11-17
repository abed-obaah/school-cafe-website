import React from 'react';
import phone from '../assets/phone.svg';
import arrow from '../assets/arrow.png';
import playstore from '../assets/mage_playstore.svg';
import appstore from '../assets/u_apple.svg';

export default function Example() {
  return (
    <div className="bg-white max-w-7xl mx-auto mb-20">
      <div className="bg-blue-50 max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 rounded-md flex flex-col lg:flex-row items-center justify-between">
        
        {/* Text and Buttons Section */}
        <div className="lg:w-1/2 text-center lg:text-left pt-8 sm:pt-10 md:pt-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Get School Cafe App</h2>
          <p className="text-gray-700 mb-6 text-2xl">Download App to get Updates on Student & NYSC News</p>
          
          <div className="flex flex-col items-center lg:flex-row lg:justify-start gap-4 mb-6">
                <button className="bg-black text-white px-8 py-3 rounded-lg flex items-center w-full lg:w-auto justify-center">
                  <img src={playstore} alt="Play Store" className="h-5 mr-2" />
                  Get on Play Store
                </button>
                <button className="bg-black text-white px-8 py-3 rounded-lg flex items-center w-full lg:w-auto justify-center">
                  <img src={appstore} alt="App Store" className="h-5 mr-2" />
                  Get on App Store
                </button>
              </div>
              <p className="text-gray-500 text-center lg:text-left">Join 1M+ School Cafe Subscribers</p>

        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 mt-32 lg:mt-24 flex justify-center lg:justify-end items-center space-x-4">
          {/* Hidden on small screens and above */}
          <img
            src={arrow}
            alt="Arrow" 
            className="hidden lg:block w-full lg:max-w-md" // Hidden on small screens
          />
          {/* Always visible, centered on small screens */}
          <img
            src={phone}
            alt="Phone" 
            className="w-full lg:max-w-md" // Adjust the size for responsiveness
          />
        </div>

      </div>
    </div>
  );
}
