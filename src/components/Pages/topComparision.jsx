import React from "react";
import Rec from '../../assets/communityRec.svg';
import {ArrowRight} from 'iconsax-react'
import Aro from '../../assets/arow.svg'

import DelsuLogo2 from '../../assets/compare1.svg';
import DelsuLogo from '../../assets/compare2.png'; 
import { FaStar } from 'react-icons/fa'; // FontAwesome star icon
import { ShareIcon } from '@heroicons/react/24/outline'; 
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div className="bg-white rounded-lg border max-w-3xl  p-4">
  {/* Recommended Tag */}
  <div className="flex justify-between">
    <span className="bg-green-500 text-white text-sm font-semibold px-2 py-1 rounded-full">
      Recommended
    </span>
  </div>

  {/* University Logos */}
  <div className="relative mt-4">
    <div className="flex justify-between">
      <div className="flex-1 mr-4">
        <div className="p-4 border-2 border-gray-300 rounded-md">
          <img 
            src={DelsuLogo2} 
            alt={DelsuLogo} 
            className="w-54 h-32 mx-auto" 
          />
        </div>
       <div className="flex items-center justify-between mt-2">
  <h3 className="text-md font-semibold">Wasyo</h3>
  <p className="text-gray-600 flex items-center">
    <FaStar className="text-yellow-500" />
    <span className="ml-1">Wasyo Rating</span>
  </p>
</div>

      </div>

      <div className="absolute -mt-20 inset-y-0 left-1/2 transform -translate-x-1/2 flex items-center justify-center">
        <span className="text-lg font-semibold text-white rounded-full bg-black px-4 py-2">
          VS
        </span>
      </div>

      <div className="flex-1">
        <div className="p-4 border-2 border-gray-300 rounded-md">
          <img 
            src={DelsuLogo2} 
            alt={DelsuLogo2} 
            className="w-54 h-32 mx-auto" 
          />
        </div>
        <div className="flex items-center justify-between mt-2">
  <h3 className="text-md font-semibold">University2</h3>
  <p className="text-gray-600 flex items-center">
    <FaStar className="text-yellow-500" />
    <span className="ml-1">University2 Rating</span>
  </p>
</div>

      </div>
    </div>
  </div>

  {/* Buttons */}
  <div className="flex justify-between mt-6">
    <Link to={'/school[id]'}>
          <button className="mt-4 sm:mt-0 bg-[#1D7BC7] text-white px-8 py-2 rounded min-w-[250px] mr-2">
            Compare
          </button>
    </Link>
   
    <button className="bg-white py-2 px-4 rounded-lg font-medium hover:bg-gray-300 flex items-center border-2 border-[#1D7BC7]">
      <ShareIcon className="h-5 w-5 text-[#1D7BC7] mr-1" /> Share
    </button>
  </div>
</div>


//   <div className="border rounded-lg  p-4 bg-[#FAFDFF]  max-w-xl">
//   {/* Header Section */}
//   <div className="flex justify-between">
//     <span className="bg-green-500 text-white text-sm font-semibold px-2 py-1 rounded-full">
//       Recommended
//     </span>
//   </div>

//   {/* Content Section */}
//   <div className="flex justify-between  mt-4">
//     <div className="flex-1">
//       {/* Left University Card */}
//       <div className="p-4 border-2 border-gray-300 rounded-md">
//         <img 
//           src={DelsuLogo2} 
//           alt="Delsu Logo 1" 
//           className="w-54 h-32 mx-auto" 
//         />
//       </div>
//       <h3 className="mt-2 text-md font-semibold ">Wasyo</h3>
//       <p className="text-gray-600 flex items-center justify-center mt-1">
//         <FaStar className="text-yellow-500" />
//         <span className="ml-1">Wasyo Rating</span>
//       </p>
//     </div>

//     {/* VS Icon */}
//     <div className="relative">
//       <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 text-lg font-semibold text-white bg-black px-4 py-2 rounded-full">
//         VS
//       </span>
//     </div>

//     <div className="flex-1">
//       {/* Right University Card */}
//       <div className="p-4 border-2 border-gray-300 rounded-md">
//         <img 
//           src={DelsuLogo2} 
//           alt="Delsu Logo 2" 
//           className="w-54 h-32 mx-auto" 
//         />
//       </div>
//       <div className="flex justify-between items-center mt-2">
//   <h3 className="text-md font-semibold">Delsu</h3>
//   <div className="flex items-center">
//     <FaStar className="text-yellow-500" />
//     <span className="ml-1 text-gray-600">Delsu Rating</span>
//   </div>
// </div>

//     </div>
//   </div>

//   {/* Buttons Section */}
//   <div className="flex justify-between mt-6">
//     <button className="bg-[#1D7BC7] text-white px-8 py-2 rounded-lg min-w-[120px] sm:min-w-[250px] mr-2">
//       Compare
//     </button>
//     <button className="bg-white py-2 px-4 rounded-lg font-medium hover:bg-gray-300 flex items-center border-2 border-[#1D7BC7]">
//       <ShareIcon className="h-5 w-5 text-[#1D7BC7] mr-1" /> Share
//     </button>
//   </div>
// </div>

  );
};

const Aside = () => {
  return (
    <aside className="w-full lg:w-1/4 p-4 max-h-[300px]">
      {/* FAQ Section */}
      <div className="mb-6 bg-[#DBEFFF] p-2 rounded-lg">
        <h3 className="text-lg font-semibold mb-2 text-gray-800 ml-2 border-b border-gray-300 pb-2">
  What students ask/say about schools
</h3>

       <ul className="ml-4 text-[#1D7BC7] text-sm space-y-3">
        <li>Is UNILAG better than UI?</li>
        <li>BIU is the top private uni.</li>
        <li>DESU is the best school.</li>
      </ul>

        <a href="#" className="text-[#1D7BC7] text-xs underline block mt-4 ml-2">
          View More &gt;
        </a>
      </div>

      {/* Community Section */}
      <div className="p-4 bg-[#DBEFFF] rounded-lg">
  <img 
    src={Rec} 
    alt="" 
    className="w-full h-auto mb-4 rounded-lg"
  />
  <h3 className="text-lg font-semibold mb-2 text-gray-800">Join Our Community</h3>
  <p className="text-sm text-gray-600">
  Connect with like minds, have fun, share your opinions, get scholarship access, job opportunities & lots more
  </p>
  <a href="#" className="text-blue-600 text-sm mt-2 flex items-center">
  Click here 
  <div className="rotate-[-40] ml-1">
  <img 
    src={Aro} 
    alt="" 
    className="w-3"
  />
  </div>
</a>

</div>

    </aside>
  );
};

const Layout = () => {
  return (
    <div className="bg-[#FAFDFF] min-h-screen p-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Top Comparisons</h1>
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Main Content */}
        <div className="w-full lg:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>

        {/* Aside Section */}
        <Aside />
      </div>
    </div>
  );
};

export default Layout;
