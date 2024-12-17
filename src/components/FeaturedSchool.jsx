import React, { useRef, useState } from 'react';
import Card from './cards/index'; 
import Delsu from '../assets/delsu.png'; // Adjust the path if Card.js is in a different directory
import { Link } from 'react-router-dom';
// import AnotherImage from '../assets/anotherImage.png'; // Add other images as needed

const AnotherComponent = () => {
  // Array of card data
  const cardDataArray = [
    {
      imageSrc: Delsu,
      title: 'Delta State University',
      details: 'Delta State University with the cognomen DELSU is a fast growing University located in Abraka with a lot of attractive tourist sites including the alluring blue coloured River Ethiope acclaimed to be the depest Inland Waterway in Africa.',
      featured: true,
      views: 123,
      rating: 4,
      location: 'New York, NY'
    },
    {
        imageSrc: Delsu,
      title: 'Delta State University',
      details: 'Delta State University with the cognomen DELSU is a fast growing University located in Abraka with a lot of attractive tourist sites including the alluring blue coloured River Ethiope acclaimed to be the depest Inland Waterway in Africa.',
      featured: true,
      views: 456,
      rating: 5,
      location: 'San Francisco, CA'
    },
    {
      imageSrc: Delsu,
      title: 'Delta State University',
      details: 'Delta State University with the cognomen DELSU is a fast growing University located in Abraka with a lot of attractive tourist sites including the alluring blue coloured River Ethiope acclaimed to be the depest Inland Waterway in Africa.',
      featured: true,
      views: 789,
      rating: 3,
      location: 'Los Angeles, CA'
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
      {/* Center the grid container with flex */}
      <div className="flex justify-center">
        
        <div className="max-w-screen-xl w-full">
          {/* Add margin to the grid container to center it and create spacing */}
          <div className="flex justify-between items-center">
          <h2 className="text-black text-2xl font-bold mb-4">Featured Schools</h2>
          <h3 className="text-black">View all</h3> {/* Add text color if needed */}
        </div>
        <div
      ref={scrollContainerRef}
      className="mt-12 overflow-x-auto overflow-y-hidden flex gap-5 py-4 lg:gap-8 cursor-grab scrollbar-hide lg:justify-center lg:mx-auto"
      onMouseDown={startDrag}
      onMouseUp={stopDrag}
      onMouseLeave={stopDrag}
      onMouseMove={dragScroll}
    >
      {cardDataArray.map((cardData, index) => (
        <div key={index} className="flex-none w-80 sm:w-96 ">
          {/* <Link to={"/comingSoon"}> */}
          <Link to={"/feature-school"}>
          <Card
            imageSrc={cardData.imageSrc}
            title={cardData.title}
            details={cardData.details}
            featured={cardData.featured}
            views={cardData.views}
            rating={cardData.rating}
            location={cardData.location}
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
