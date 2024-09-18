import React from 'react';
import Card from './cards/featCard'; 
import Delsu from '../assets/delsu.png';


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

  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8">
      <div className="flex justify-center">
        <div className="max-w-screen-xl w-full">
          <div className="flex justify-between items-center">
          <h2 className="text-black text-2xl font-bold mb-4">Latest School News</h2>
          <h3 className="text-black">View all</h3>
        </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 mx-auto">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnotherComponent;
