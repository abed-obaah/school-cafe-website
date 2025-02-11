import React, { useState } from "react";
import delsuLogo from '../../assets/logo-white.svg';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import BackgroundImage from '../../assets/contact-us.png';
import Buttons from '../../components/scrollButtons';
import Jobs from '../../components/jobPostings';
import Courses from "../../components/Courses";
import Fees from "../../components/Fees";
import Reviews from "../../components/Reviews";
import Events from "../../components/Events";
import News from "../../components/News";
import halfStar from '../../assets/halfstar.svg'
import location from '../../assets/indicator.svg'
import eclipses from '../../assets/eclipses.svg'

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
  // Define state to track the active tab
  const [activeTab, setActiveTab] = useState("Jobs");

  // Function to handle tab click
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  // Function to render the component based on the active tab
  const renderComponent = () => {
    switch (activeTab) {
      case "Jobs":
        return <Jobs />;
      case "Courses":
        return <Courses />;
      case "Fees":
        return <Fees />;
      case "Reviews":
        return <Reviews />;
      case "Events":
        return <Events />;
      case "News":
        return <News />;
      default:
        return <Jobs />;
    }
  };

  return (
    <div className="relative">
      <div className="bg-white">
        <img
          alt=""
          src={profile.backgroundImage}
          className="h-64 w-full object-cover lg:h-96 bg-blue-500"
        />
        {/* Floating Search Input with Icon */}
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-[90%] max-w-[900px] sm:w-[600px] md:w-[700px] lg:w-[900px]">
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

      

      <div className="mx-auto w-50 px-6 sm:px-8 lg:px-12 lg:mx-12">
      <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5 flex justify-between">
        <div className="flex -ml-4 flex-col">
          <div >
              <img
                  alt=""
                  src={profile.avatar}
                  className="h-32 w-32 rounded-full ring-4 ring-white sm:h-40 sm:w-40 md:h-48 md:w-48"
                />
          </div>
        
          <h1 className="mt-2 text-xl font-bold text-gray-900">{profile.name}</h1>
          <div className="flex items-center">
          <img src={location} alt="" className="h-3 w-3" />
            <p className="text-sm text-[#1D7BC7]">Abraka, Delta State, Nigeria. <span className="text-[#B3B3B3]">330105</span></p>
            <span className="px-1 text-sm">|</span>
            <img src={halfStar} alt="" className="h-3 w-3" />
            <p className="text-sm">4.5 Rating</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between">
  <button className="mt-4 sm:mt-0 bg-[#1D7BC7] text-white px-4 py-2 rounded mr-2">
    Apply Now
  </button>
  <img src={eclipses} alt="" className="mt-4 sm:mt-0" />
</div>

       
      </div>
      



  <div className="bg-white mt-8">
    <div className="py-24 sm:py-32 -mt-24 -ml-4">
      <h2 className="text-xl font-bold tracking-tight text-[#B3B3B3] sm:text-3xl">Overview</h2>
      <div className="mt-1.5 flex items-center gap-x-4">
        <span className="inline-flex items-center rounded-sm bg-gray-400/10 px-2 py-0.5 text-xs font-medium text-gray-400 ring-1 ring-inset ring-gray-400/20">
          EST. 1997
        </span>
        <span className="inline-flex items-center rounded-sm bg-gray-400/10 px-2 py-0.5 text-xs font-medium text-gray-400 ring-1 ring-inset ring-gray-400/20">
          2 Campuses
        </span>
      </div>
      <p className="text-[#00172A] font-light mt-4">
       Delta State University with the cognomen DELSU is a fast growing University located in Abraka with a lot of attractive tourist sites including the alluring blue coloured River Ethiope acclaimed to be the depest Inland Waterway in Africa. Delta State University with the cognomen DELSU is a fast growing University located in Abraka with a lot of attractive tourist sites including the alluring blue coloured River Ethiope acclaimed to be the depest Inland Waterway in Africa..
      </p>
    </div>
  </div>

  {/* Tab Navigation */}
  <div className="flex overflow-x-auto whitespace-nowrap justify-start gap-4 p-6 mt-8 scroll-smooth snap-x">
  <Link
    to="#"
    onClick={() => handleTabClick("Jobs")}
    className={`inline-block snap-start ${
      activeTab === "Jobs" ? "bg-[#1D7BC7]" : "bg-gray-200"
    } text-white px-8 py-2 rounded`}
  >
    Apply Now
  </Link>
  <Link
    to="#"
    onClick={() => handleTabClick("")}
    className={`inline-block snap-start ${
      activeTab === "Courses" ? "bg-[#1D7BC7]" : "bg-gray-200"
    } text-white px-8 py-2 rounded`}
  >
    Courses
  </Link>
  <Link
    to="#"
    onClick={() => handleTabClick("")}
    className={`inline-block snap-start ${
      activeTab === "Fees" ? "bg-[#1D7BC7]" : "bg-gray-200"
    } text-white px-8 py-2 rounded`}
  >
    Fees
  </Link>
  <Link
    to="#"
    onClick={() => handleTabClick("")}
    className={`inline-block snap-start ${
      activeTab === "Reviews" ? "bg-[#1D7BC7]" : "bg-gray-200"
    } text-white px-8 py-2 rounded`}
  >
    Reviews
  </Link>
  <Link
    to="#"
    onClick={() => handleTabClick("")}
    className={`inline-block snap-start ${
      activeTab === "Events" ? "bg-[#1D7BC7]" : "bg-gray-200"
    } text-white px-8 py-2 rounded`}
  >
    Upcoming Events
  </Link>
  <Link
    to="#"
    onClick={() => handleTabClick("")}
    className={`inline-block snap-start ${
      activeTab === "News" ? "bg-[#1D7BC7]" : "bg-gray-200"
    } text-white px-8 py-2 rounded`}
  >
    Latest News
  </Link>
</div>




  {/* Render the active component */}
  <div className="mt-8">{renderComponent()}</div>
</div>

    </div>
  );
}
