import React from 'react';
import { FaSearch, FaCaretUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import Image from '../assets/flex.svg';

export default function Job() {
  const featuredSchools = [
    {
      id: 1,
      name: 'James Adebayo - Tech Entrepreneur and Innovator',
      description: `James Adebayo, a graduate of [School Name]'s Computer Science program, is now a trailblazing entrepreneur in the tech industry. After completing his studies in 2015, James co-founded InnoTech Solutions, a company that develops AI-powered software for businesses across Africa. His passion for technology and innovation began during his time at [School Name], where he was an active member of the school's robotics club and a participant in several tech competitions.`,
      views: '5.6K',
      likes: '3.8K',
    },
    {
      id: 2,
      name: 'Jane Doe - Healthcare Innovator',
      description: `Jane Doe, a graduate of [School Name]'s Nursing program, is transforming healthcare with her innovative approach to patient care. She founded HealthNow, a startup that leverages telemedicine to provide healthcare services in rural areas.`,
      views: '4.2K',
      likes: '2.9K',
    },
    {
      id: 3,
      name: 'John Smith - Education Leader',
      description: `John Smith, a proud alumnus of [School Name]'s Education department, has become a leader in education reform. As the CEO of EduChange, he works to bring modern educational practices to underprivileged communities worldwide.`,
      views: '3.1K',
      likes: '1.5K',
    },
  ];

  const SchoolCard = ({ school }) => (
    <div className="border border-gray-300 mt-4 p-4 rounded-lg">
      <h4 className="text-base font-semibold leading-6 text-gray-900">{school.name}</h4>
      <p className="mt-2 text-sm text-gray-600">
        {school.description}{' '}
        <a href="#" className="text-blue-500 text-sm mt-2 block">
          Read More.....
        </a>
      </p>
      <div className="flex space-x-4 mt-2 text-sm text-gray-500">
        <span className="inline-flex items-center rounded-md bg-[#DBEFFF] px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
          👁️ {school.views} Views
        </span>
        <span className="inline-flex items-center rounded-md bg-[#DBEFFF] px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
          👍 {school.likes} Likes
        </span>
        <span className="inline-flex items-center rounded-md bg-[#DBEFFF] px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
          🔗 Share
        </span>
      </div>
    </div>
  );

  return (
    <div>
      <div className="flex bg-white px-4 py-5 sm:px-6 justify-between">
        {/* Left section */}
        <div className="w-full sm:w-1/2 flex flex-col">
          <div className="flex justify-between border-b border-gray-200">
            <h3 className="text-base font-semibold leading-6 text-gray-900">Job Postings</h3>
            <FaCaretUp className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
          <div className="mt-2">
            <p className="text-[#00172A] font-light">
              Delta State University with the cognomen DELSU is a fast-growing University located in Abraka with a lot of attractive tourist sites including the alluring blue coloured River Ethiope, acclaimed to be the deepest Inland Waterway in Africa.
            </p>
            <p className="mt-10 text-[#00172A] font-light text-[15px]">
              DELSU was established with the mandate of building diverse human{' '}
              <span className="text-[#1D7BC7] font-bold"> Read More....</span>
            </p>
            <div className="bg-blue-100 p-6 rounded-lg flex justify-between max-w-md ml-0.5 mt-5">
              <div className="space-y-2 text-gray-500">
                <p>Year Of Establishment</p>
                <p>University Website</p>
                <p>Name Of VC</p>
                <p>Number Of Campus</p>
              </div>
              <div className="space-y-2 text-[#00172A]">
                <p>1997</p>
                <p>
                  <a href="https://delsu.com" className="text-blue-500 underline">
                    delsu.com
                  </a>
                </p>
                <p>Prof. Andy Egwuyenga</p>
                <p>2</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right section */}
        <div className="hidden sm:block w-3/6 bg-[#DBEFFF] p-4 rounded-lg h-96 overflow-auto">
          <img alt="" src={Image} className="h-40 w-full object-cover lg:h-60 bg-blue-500 rounded-lg" />
          <div className="mt-5">
            <div className="flex justify-between">
              <h2>Explore exciting views of <br /> Campuses</h2>
              <span className="inline-flex items-center rounded-md bg-gray-50 px-10 h-8 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
              Abraka Campus
              </span>
            </div>
            <div className="mt-2">
              <p className="text-[#1D7BC7]">Full View</p>
            </div>
          </div>
        </div>
      </div>

      {/* More sections */}
      <div className="flex bg-white px-4 py-5 sm:px-6 justify-between">
        {/* Left section */}
        <div className="w-full sm:w-1/2 flex flex-col">
          <div className="flex justify-between border-b border-gray-200">
            <h3 className="text-base font-semibold leading-6 text-gray-900">Faculties In School</h3>
            <FaCaretUp className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
          <div className="mt-2">
            <p className="text-[#00172A] font-light">
              Delta State University majors in 10 Faculties in both Campuses.
            </p>
          </div>
        </div>

        {/* Right section - hidden on mobile */}
        <div className="hidden sm:block w-3/6 bg-[#DBEFFF] p-4 rounded-lg overflow-auto h-[200px]">
          <div className="mt-0">
            <div className="flex justify-between">
              <h2>Campus Locations</h2>
            </div>
            <div className="mt-2">
              <p className="text-[#B3B3B3] text-xs">First Campus</p>
              <h1>Abraka Campus</h1>
              <p className="text-xs">Abraka, Ethiope East, Delta State, Nigeria</p>
            </div>
            <div className="mt-2">
              <p className="text-[#B3B3B3] text-xs">Second Campus</p>
              <h5>Abraka Campus</h5>
              <p className="text-xs">Abraka, Ethiope East, Delta State, Nigeria</p>
            </div>
          </div>
        </div>
      </div>

      {/* Alumni Success Stories */}
      <div className="flex bg-white px-4 py-5 sm:px-6 justify-between">
        <div className="w-full sm:w-1/2 flex flex-col">
          <div className="flex justify-between border-b border-gray-200">
            <h3 className="text-base font-semibold leading-6 text-gray-900">Alumni Success Stories</h3>
            <FaCaretUp className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
          <div className="mt-2">
            <p className="text-[#00172A] font-light">
              Our alumni network includes successful entrepreneurs, industry leaders, and change-makers in fields such as technology, healthcare, and education.
            </p>
          </div>

          <div className="mt-4 mb-4">
            {featuredSchools.map((school) => (
              <SchoolCard key={school.id} school={school} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
