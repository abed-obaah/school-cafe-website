import React from "react";
import { Eye,Like1,Dislike } from "iconsax-react";

const StatsSection = () => {
  return (
    <div className="flex justify-center items-center space-x-8 p-6 rounded-lg">
      {/* Views */}
      <div className="flex items-center space-x-2">
        <span className="text-2xl" role="img" aria-label="eye">
        <Eye
            size="32"
            color="#00172A"
            />
        </span>
        <span className="text-gray-700 font-semibold text-lg">20.8K views</span>
      </div>

      {/* Likes */}
      <div className="flex items-center space-x-2">
        <span className="text-2xl text-blue-500" role="img" aria-label="like">
        <Like1
            size="32"
            color="#1D7BC7"
            variant="Bold"
            />
        </span>
        <span className="text-gray-700 font-semibold text-lg">12.8K likes</span>
      </div>

      {/* Dislikes */}
      <div className="flex items-center space-x-2">
        <span className="text-2xl text-red-500" role="img" aria-label="dislike">
        <Dislike size="32"  color="#00172A" variant="Outline"/>
        </span>
        <span className="text-gray-700 font-semibold text-lg">2.8K dislikes</span>
      </div>
    </div>
  );
};

export default StatsSection;
