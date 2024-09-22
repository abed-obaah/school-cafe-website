import React from 'react';
import Card from '../Pages/offerCard'; 
import Delsu from '../../assets/delsu.png';


const AnotherComponent = () => {
  // Array of card data
  const cardDataArray = [
    {
      imageSrc: Delsu,
      title: 'School News',
      details: 'Stay updated with the latest happenings in universities, colleges, and polytechnics. From exam timetables to event coverage, we keep you informed.',
      featured: false,
    //  location: 'Los Angeles, CA'
    },
    {
        imageSrc: Delsu,
      title: 'NYSC News',
      details: 'Get all the essential details about NYSC postings, PPA (Place of Primary Assignment) tips, CDS (Community Development Service), and more.',
      featured: false,
    //   location: 'Los Angeles, CA'
    },
    {
      imageSrc: Delsu,
      title: 'Academic Resources',
      details: 'From study tips to scholarship opportunities, we offer content that helps you succeed academically and financially.',
      featured: false,
    //   location: 'Los Angeles, CA'
    },
    {
      imageSrc: Delsu,
      title: 'Lifestyle & Wellness',
      details: 'We cover a range of topics, including mental health, fitness, and student lifestyle, to help you maintain balance during your studies.',
      featured: false,
    //   location: 'Los Angeles, CA'
    },
    {
      imageSrc: Delsu,
      title: 'Career Guidance',
      details: 'Prepare for life after school with our career guides, entrepreneurship tips, and advice on building a successful future.',
      featured: false,
    //   location: 'Los Angeles, CA'
    },
    {
      imageSrc: Delsu,
      title: 'School & NYSC Tools',
      details: 'Find essential tools and resources to help you navigate school and NYSC processes with ease.',
      featured: false,
    //   location: 'Los Angeles, CA'
    },
  ];

  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8">
      <div className="flex justify-center">
        <div className="max-w-screen-xl w-full">
        <div className="mx-auto max-w-2xl lg:text-center mb-10">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          What We Offer
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          At School Cafe, we’re dedicated to bringing you the latest news, insights, and stories that matter most to students and NYSC members across the country. 
          </p>
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
