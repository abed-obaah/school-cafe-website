import React from 'react';
import ComparisonCard from './ComparisonCard';
import DelsuLogo2 from '../assets/compare1.svg';
import DelsuLogo from '../assets/compare2.png'; 

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

  return (
    // <div className="py-10 px-4 sm:px-6 lg:px-8">
    //   <h2 className="text-2xl font-bold mb-4">Popular School Comparison</h2>
    //   <p className=" text-gray-600 mb-8">
    //     Find out the school that suits you best before buying your form.
    //   </p>

    //   {/* Reduced gap between cards */}
    //   <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
    //     <ComparisonCard university1={university1} university2={university2} />
    //     <ComparisonCard university1={university1} university2={university2} />
    //     <ComparisonCard university1={university1} university2={university2} />
    //   </div>
    // </div>

    <div className="py-10 px-2 sm:px-2 lg:px-2">
      <div className="flex justify-center">
        <div className="max-w-screen-xl w-full">
                  <div className="flex justify-between items-center">
                    <div className='mb-4'>
                        <h2 className="text-black text-3xl font-bold">Popular School Comparison</h2>
                        <p className='text-[#888888] text-lg'>Find out the school that suits you</p>
                        <p className='text-[#888888] text-lg'> best before buying your form.</p>
                    </div>
            
            <button className="mt-4 sm:mt-0 bg-[#1D7BC7] text-white px-8 py-2 rounded min-w-[250px]">
              Access Now
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 mx-auto">
          <ComparisonCard university1={university1} university2={university2} />
            <ComparisonCard university1={university1} university2={university2} />
            <ComparisonCard university1={university1} university2={university2} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
