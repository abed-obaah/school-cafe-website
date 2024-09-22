import React from 'react';
import Card from './contactCard'; 
import Delsu from '../../assets/delsu.png';


const AnotherComponent = () => {
  // Array of card data
  const cardDataArray = [
    {
      imageSrc: Delsu,
      title: 'General Inquiries',
      details: 'If you have any general questions or need more information about our content, feel free to email or call us. Our team is available Monday to Friday from 9 AM to 5 PM.',
      featured: false,
    //  location: 'Los Angeles, CA'
    },
    {
        imageSrc: Delsu,
      title: 'Editorial Team',
      details: 'Have a story idea, feedback on an article, or want to contribute? Contact our editorial team directly. We’re always on the lookout for fresh perspectives and engaging content.',
      featured: false,
    //   location: 'Los Angeles, CA'
    },
    {
      imageSrc: Delsu,
      title: 'Advertising & Partnerships',
      details: 'Interested in advertising with us or exploring partnership opportunities? We’d love to discuss how we can work together to reach our audience of students and NYSC members.',
      featured: false,
    //   location: 'Los Angeles, CA'
    },
    {
      imageSrc: Delsu,
      title: 'Technical Support',
      details: 'Encountering technical issues with the site? Let us know, and we’ll assist you in resolving any problems.',
      featured: false,
    //   location: 'Los Angeles, CA'
    },
    {
      imageSrc: Delsu,
      title: 'Social Media',
      details: 'Have a story idea, feedback on an article, or want to contribute? Contact our editorial team directly. We’re always on the lookout for fresh perspectives and engaging content.',
      featured: false,
    //   location: 'Los Angeles, CA'
    },
    {
      imageSrc: Delsu,
      title: 'Visit Us',
      details: 'Have a story idea, feedback on an article, or want to contribute? Contact our editorial team directly. We’re always on the lookout for fresh perspectives and engaging content.',
      featured: false,
    //   location: 'Los Angeles, CA'
    },
  ];

  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8">
      <div className="flex justify-center">
        <div className="max-w-screen-xl w-full">
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
