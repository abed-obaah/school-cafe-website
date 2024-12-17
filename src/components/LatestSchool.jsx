import React, { useRef, useState } from 'react';
import Card from './cards/featCard'; 
import Delsu from '../assets/delsu.png';
import { Link } from 'react-router-dom';



const AnotherComponent = () => {
  // Array of card data
  const cardDataArray = [
    {
      imageSrc: Delsu,
      title: 'Delta State University',
      details: 'SUPPLEMENTARY FORM FOR UTME CANDIDATES FOR ADMISSION INTO THE DELTA STATE UNIVERSITY Read More.........',
      featured: false,
    //  location: 'Los Angeles, CA'
    },
    {
        imageSrc: Delsu,
      title: 'Delta State University',
      details: 'SUPPLEMENTARY FORM FOR UTME CANDIDATES FOR ADMISSION INTO THE DELTA STATE UNIVERSITY Read More.........',
      featured: false,
    //   location: 'Los Angeles, CA'
    },
    {
      imageSrc: Delsu,
      title: 'Delta State University',
      details: 'SUPPLEMENTARY FORM FOR UTME CANDIDATES FOR ADMISSION INTO THE DELTA STATE UNIVERSITY Read More.........',
      featured: false,
    //   location: 'Los Angeles, CA'
    },
  ];



  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Start the dragging
  const startDrag = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  // Stop the dragging
  const stopDrag = () => {
    setIsDragging(false);
  };

  // Handle the scroll while dragging
  const dragScroll = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 3; // The multiplier controls the speed of the scroll
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };




  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8">
      <div className="flex justify-center">
        <div className="max-w-screen-xl w-full">
          <div className="flex justify-between items-center">
          <h2 className="text-black text-2xl font-bold mb-4">Latest School News</h2>
          <h3 className="text-black">View all</h3>
        </div>
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 mx-auto">
            {cardDataArray.map((cardData, index) => (
              <Card
                key={index}
                imageSrc={cardData.imageSrc}
                title={cardData.title}
                details={cardData.details}
                featured={cardData.featured}
                // location={cardData.location}
              />
            ))}
          </div> */}

<div
  ref={scrollContainerRef}
  className="mt-12 overflow-x-auto overflow-y-hidden flex gap-5 py-4 lg:gap-8 cursor-grab scrollbar-hide lg:justify-center lg:mx-auto"
  onMouseDown={startDrag}
  onMouseUp={stopDrag}
  onMouseLeave={stopDrag}
  onMouseMove={dragScroll}
>
  {cardDataArray.map((cardData, index) => (
    <div key={index} className="flex-none w-80 sm:w-96 "> {/* w-80 for mobile, w-96 for larger screens */}
    <Link to={"/comingSoon"}>
    <Card
        key={index}
        imageSrc={cardData.imageSrc}
        title={cardData.title}
        details={cardData.details}
        featured={cardData.featured}
        // location={cardData.location}
      />
    </Link>
     
    </div>
  ))}
</div>


        </div>
      </div>
    </div>
  );
};

export default AnotherComponent;
