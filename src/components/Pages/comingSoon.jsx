import React from "react";
import Notif from '../../assets/notif.jpg';

const ComingSoonPage = () => {
  return (
    <div className="flex flex-col h-screen justify-center bg-gray-900 text-white">
      {/* Main content */}
      <div className="flex flex-col items-center">
        {/* Responsive image container */}
        <div className="mb-6">
          <div className="w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-lg overflow-hidden flex items-center justify-center">
            <img
              src={Notif}
              alt="Graduation Cap"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <h1 className="text-2xl font-semibold mb-2">Coming soon</h1>
        <p className="text-center text-gray-400 max-w-xs">
          We are trying very hard to complete it as soon as possible, but you
          can always use our other cool features.
        </p>
      </div>
    </div>
  );
};

export default ComingSoonPage;
