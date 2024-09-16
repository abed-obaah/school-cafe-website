import React from 'react';
import Card from './cards/index'; 
import Delsu from '../assets/delsu.png'; // Adjust the path if Card.js is in a different directory
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
    // Add more card data objects as needed
  ];

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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 mx-auto">
            {cardDataArray.map((cardData, index) => (
              <Card
                key={index}
                imageSrc={cardData.imageSrc}
                title={cardData.title}
                details={cardData.details}
                featured={cardData.featured}
                views={cardData.views}
                rating={cardData.rating}
                location={cardData.location}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnotherComponent;
