import React from 'react';
import phone from '../assets/phone.svg';
import arrow from '../assets/arrow.png';
import playstore from '../assets/mage_playstore.svg';
import appstore from '../assets/u_apple.svg';

// const AppDownloadSection = () => {
//   return (
//     <div className="bg-blue-50 py-6">
//       <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between">
        
//         {/* Text and Buttons Section */}
//         <div className="lg:w-1/2 text-center lg:text-left">
//           <h2 className="text-2xl font-bold text-gray-900 mb-4">Get School Cafe App</h2>
//           <p className="text-gray-700 mb-6">Download App to get Updates on Student & NYSC News</p>
          
//           <div className="flex justify-center lg:justify-start gap-4 mb-6">
//             <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center">
//               Get on Play Store
//             </button>
//             <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center">
//               Get on App Store
//             </button>
//           </div>

//           <p className="text-gray-500">Join 1M + School Cafe Subscribers</p>
//         </div>

//         {/* Image Section */}
//         <div className="lg:w-1/2 mt-32 lg:mt-24 flex justify-center lg:justify-end items-center space-x-4">
//           <img
//             src={arrow}
//             alt="Arrow" 
//             className="w-full lg:max-w-md" // Adjust the size as needed
//           />
//           <img
//             src={phone}
//             alt="Phone" 
//             className="w-full lg:max-w-md" // Adjust the size for responsiveness
//           />
//         </div>

//       </div>
//     </div>
//   );
// };

// export default AppDownloadSection;

export default function Example() {
    return (
      <div className="bg-white max-w-7xl mx-auto mb-20">
       

<div className=" bg-blue-50 max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 rounded-md flex flex-col lg:flex-row items-center justify-between">
        
        {/* Text and Buttons Section */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Get School Cafe App</h2>
          <p className="text-gray-700 mb-6 text-2xl">Download App to get Updates on Student & NYSC News</p>
          
          <div className="flex justify-center lg:justify-start gap-4 mb-6">
          <button className="bg-black text-white px-16 py-3 rounded-lg flex items-center">
            <img src={playstore} alt="App Store" className="h-5 mr-2" />
              Get on Play Store
            </button>
             <button className="bg-black text-white px-16 py-3 rounded-lg flex items-center">
            <img src={appstore} alt="App Store" className="h-5 mr-2" />
            Get on App Store
            </button>
          </div>
          <p className="text-gray-500">Join 1M + School Cafe Subscribers</p>
        </div>



        {/* Image Section */}
        <div className="lg:w-1/2 mt-32 lg:mt-24 flex justify-center lg:justify-end items-center space-x-4">
          <img
            src={arrow}
            alt="Arrow" 
            className="w-full lg:max-w-md" // Adjust the size as needed
          />
          <img
            src={phone}
            alt="Phone" 
            className="w-full lg:max-w-md" // Adjust the size for responsiveness
          />
        </div>

      </div>
      </div>
    )
  }
  
