do it here 'import delsuLogo from '../../assets/compare1.svg';
import { FaSearch,FaCaretUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import BackgroundImage from '../../assets/contact-us.png'
import Image from '../../assets/flex.svg'

import Buttons from '../../components/scrollButtons'
import Jobs  from '../../components/jobPostings'
import Courses from "./Courses";
import Fees from "./Fees";
import Reviews from "./Reviews";
import Events from "./Events";
import News from "./News";


const profile = {
  name: 'Delta State University, Abraka',
  email: 'ricardo.cooper@example.com',
  avatar: delsuLogo,
  backgroundImage:
  BackgroundImage,
  fields: [
    ['Phone', '(555) 123-4567'],
    ['Email', 'ricardocooper@example.com'],
    ['Title', 'Senior Front-End Developer'],
    ['Team', 'Product Development'],
    ['Location', 'San Francisco'],
    ['Sits', 'Oasis, 4th floor'],
    ['Salary', '$145,000'],
    ['Birthday', 'June 8, 1990'],
  ],
};


export default function Example() {
  return (
    <div className="relative">
      <div className="bg-white">
        <img alt="" src={profile.backgroundImage} className="h-64 w-full object-cover lg:h-96 bg-blue-500" />
        {/* Floating Search Input with Icon */}
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
          <div className="flex items-center border border-gray-300 bg-white rounded-lg shadow-md">
            <div className="flex items-center p-3">
              <FaSearch className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </div>
            <input
              type="text"
              placeholder="Search about school"
              className="w-full p-3 rounded-lg focus:outline-none"
            />
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
          <div className="flex -ml-4 flex-col"> {/* Flex column added */}
            <img alt="" src={profile.avatar} className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32" />
            <h1 className="mt-2 text-xl font-bold text-gray-900">{profile.name}</h1>
            <div className='flex'>
                <p className=' text-sm'>Abraka, Delta State, Nigeria. 330105 </p>
                <span  className='px-1  text-sm'> | </span>
                <p className=' text-sm'>4.5 Rating</p>
            </div>
            
          </div>
          <div className="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
          
            <div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Link
                to="/contact"
                className="mt-4 sm:mt-0 bg-[#1D7BC7] text-white px-8 py-2 rounded"
              >
               Apply Now
             </Link>
            </div>
          </div>
        </div>

        <div className="bg-white">
              <div className="py-24 sm:py-32 -mt-24 -ml-4"> {/* Added negative margin-left */}
                <h2 className="text-xl font-bold tracking-tight text-[#B3B3B3] sm:text-3xl">
                Overview
                </h2>
                <div className="mt-1.5 flex items-center gap-x-4">
                <span className="inline-flex items-center rounded-sm bg-gray-400/10 px-2 py-0.5 text-xs font-medium text-gray-400 ring-1 ring-inset ring-gray-400/20">
                EST. 1997
                      </span>
                      <span className="inline-flex items-center rounded-sm bg-gray-400/10 px-2 py-0.5 text-xs font-medium text-gray-400 ring-1 ring-inset ring-gray-400/20">
                      2 Campuses
                      </span>
                </div>
                  <p className='text-[#00172A] font-light'>
                  Delta State University with the cognomen DELSU is a fast growing University located in Abraka with a lot of attractive tourist sites including the alluring blue coloured River Ethiope acclaimed to be the depest Inland Waterway in Africa. Delta State University with the cognomen DELSU is a fast growing University located in Abraka with a lot of attractive tourist sites including the alluring blue coloured River Ethiope acclaimed to be the depest Inland Waterway in Africa.
                  </p>
              </div>
          </div>



        <div className="mt-6 hidden min-w-0 flex-1 sm:block md:hidden">
          <h1 className="truncate text-2xl font-bold text-gray-900">{profile.name}</h1>
        </div>
        <Buttons/>
        <Jobs/>
    
      </div>
    </div>
  );
}'