import React from 'react';
import { HomeIcon, UserCircleIcon, CogIcon } from '@heroicons/react/24/outline';

const BottomNavigation = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-lg">
      <div className="flex justify-between px-6 py-2">
        {/* Home */}
        <button className="flex flex-col items-center text-gray-600 hover:text-blue-500">
          <HomeIcon className="h-6 w-6" />
          <span className="text-xs">Home</span>
        </button>
        {/* Profile */}
        <button className="flex flex-col items-center text-gray-600 hover:text-blue-500">
          <UserCircleIcon className="h-6 w-6" />
          <span className="text-xs">Profile</span>
        </button>
        {/* Settings */}
        <button className="flex flex-col items-center text-gray-600 hover:text-blue-500">
          <CogIcon className="h-6 w-6" />
          <span className="text-xs">Settings</span>
        </button>
      </div>
    </div>
  );
};

export default BottomNavigation;
