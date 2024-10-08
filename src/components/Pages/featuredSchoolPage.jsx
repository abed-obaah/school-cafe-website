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
          <div className="flex -ml-4 flex-col">
            <img
              alt=""
              src={profile.avatar}
              className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
            />
            <h1 className="mt-2 text-xl font-bold text-gray-900">
              {profile.name}
            </h1>
            <div className="flex">
              <p className="text-sm">Abraka, Delta State, Nigeria. 330105</p>
              <span className="px-1 text-sm">|</span>
              <p className="text-sm">4.5 Rating</p>
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

        {/* Tab Navigation */}
        <div className="flex overflow-x-auto space-x-4 p-4 -mt-16 mb-16">
          <Link
            to="#"
            onClick={() => handleTabClick("Jobs")}
            className={`${
              activeTab === "Jobs" ? "bg-[#1D7BC7]" : "bg-gray-200"
            } text-white px-8 py-2 rounded`}
          >
            Apply Now
          </Link>
          <Link
            to="#"
            onClick={() => handleTabClick("Courses")}
            className={`${
              activeTab === "Courses" ? "bg-[#1D7BC7]" : "bg-gray-200"
            } text-white px-8 py-2 rounded mt-4 sm:mt-0`}
          >
            Courses
          </Link>
          <Link
            to="#"
            onClick={() => handleTabClick("Fees")}
            className={`${
              activeTab === "Fees" ? "bg-[#1D7BC7]" : "bg-gray-200"
            } text-white px-8 py-2 rounded mt-4 sm:mt-0`}
          >
            Fees
          </Link>
          <Link
            to="#"
            onClick={() => handleTabClick("Reviews")}
            className={`${
              activeTab === "Reviews" ? "bg-[#1D7BC7]" : "bg-gray-200"
            } text-white px-8 py-2 rounded mt-4 sm:mt-0`}
          >
            Reviews
          </Link>
          <Link
            to="#"
            onClick={() => handleTabClick("Events")}
            className={`${
              activeTab === "Events" ? "bg-[#1D7BC7]" : "bg-gray-200"
            } text-white px-8 py-2 rounded mt-4 sm:mt-0`}
          >
            Upcoming Events
          </Link>
          <Link
            to="#"
            onClick={() => handleTabClick("News")}
            className={`${
              activeTab === "News" ? "bg-[#1D7BC7]" : "bg-gray-200"
            } text-white px-8 py-2 rounded mt-4 sm:mt-0`}
          >
            Latest News
          </Link>
        </div>

        {/* Render the active component */}
        <div>{renderComponent()}</div>
      </div>
    </div>
  );
}
