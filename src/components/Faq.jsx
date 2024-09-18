import React from 'react';
import Accordion from './Accordion';

export default function MainComponent() {
  // Function to return the appropriate class based on the status
  const getStatusStyle = (status) => {
    switch (status) {
      case 'Alumni':
        return 'inline-flex items-center rounded-full bg-black px-4 py-0.5  text-xs font-regular text-white ring-1 ring-inset ring-gray-500/10';
      case 'Student':
        return 'inline-flex items-center rounded-full bg-yellow-50 px-4 py-0.5 text-xs font-regulartext-yellow-800 ring-1 ring-inset ring-yellow-600/20';
      case 'Corper':
        return 'inline-flex items-center rounded-full bg-green-50 px-4 py-0.5  text-xs font-regular text-green-700 ring-1 ring-inset ring-green-600/20';
      default:
        return '';
    }
  };

  return (
    <div className="py-10 px-2 sm:px-2 lg:px-2">
      <div className="flex justify-center">
        <div className="max-w-screen-xl w-full">
          <div className="flex justify-between items-center">
            <div className="mb-4">
              <h2 className="text-black text-3xl font-bold">Frequently Asked Questions</h2>
              <p className="text-[#888888] text-lg">Here are popular questions ask about</p>
              <p className="text-[#888888] text-lg"> School Cafe</p>
            </div>
          </div>
          {/* Update the grid layout */}
          <Accordion/>
        </div>
      </div>
    </div>
  );
}
