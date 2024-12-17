import React, { useRef, useState } from 'react';
import ComparisonCard from './ComparisonCard';
import DelsuLogo2 from '../assets/compare1.svg';
import DelsuLogo from '../assets/compare2.png'; 
import { FaSearch, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { AiOutlineUser } from 'react-icons/ai';
import { Link } from 'react-router-dom';


const MainComponent = () => {
  // Example universities
  const university1 = {
    logo: DelsuLogo,
    name: 'Delta State University',
    rating: 4.5
  };

  const university2 = {
    logo: DelsuLogo2,
    name: 'University of Lagos',
    rating: 4.5
  };
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  
  const scrollContainerRef = useRef(null); // Use ref to reference the scroll container

  const startDrag = (e) => {
    setIsDragging(true);
    setStartX(e.clientX); // Capture the initial mouse position
    setScrollLeft(scrollContainerRef.current.scrollLeft); // Get the initial scroll position
  };
  
  const stopDrag = () => {
    setIsDragging(false); // Disable dragging
  };
  
  const dragScroll = (e) => {
    if (!isDragging) return; // Only scroll when dragging

    const x = e.clientX; // Get the current mouse position
    const scroll = scrollLeft - (x - startX); // Calculate the scroll position based on mouse movement
    scrollContainerRef.current.scrollLeft = scroll; // Apply the calculated scroll position
  };
  return (
   

          <div className="py-10 px-2 sm:px-2 lg:px-2">
            <div className="flex justify-center">
              <div className="max-w-screen-xl w-full">
              <div className="max-w-screen-xl w-full px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          {/* Left Section */}
          <div className="mb-4 sm:mb-0">
            <h2 className="text-black text-2xl sm:text-3xl font-bold">
              Popular School Comparison
            </h2>
            <p className="text-[#888888] text-base sm:text-lg">
              Find out the school that suits you
            </p>
            <p className="text-[#888888] text-base sm:text-lg">
              best before buying your form.
            </p>
          </div>

          {/* Right Section */}
          <Link to={"/school-compare"}>
          <button className="bg-[#1D7BC7] text-white px-6 sm:px-8 py-2 sm:py-3 rounded w-full sm:w-auto flex items-center justify-center gap-2">
            <FaSearch className="text-white text-sm sm:text-base" />
            <span className="text-sm sm:text-base">Compare Schools</span>
          </button>
          </Link>
          
        </div>
    </div>


          <div
      ref={scrollContainerRef} // Attach the ref to the container
      className="mt-12 overflow-x-auto overflow-y-hidden flex gap-8 py-4 cursor-grab scrollbar-hide"
      onMouseDown={startDrag}
      onMouseUp={stopDrag}
      onMouseLeave={stopDrag}
      onMouseMove={dragScroll}
    >

      <Link to={"/school-compare"}>
      <ComparisonCard university1={university1} university2={university2} />
      
      </Link>
      <Link to={"/school-compare"}>
      <ComparisonCard university1={university1} university2={university2} />
      
      </Link>
      <Link to={"/school-compare"}>
      <ComparisonCard university1={university1} university2={university2} />
      
      </Link>
      {/* <ComparisonCard university1={university1} university2={university2} />
      <ComparisonCard university1={university1} university2={university2} /> */}
     
    </div>

        </div>
      </div>
    </div>
  );
};

export default MainComponent;
