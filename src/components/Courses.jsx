import React, { useState } from 'react';
import { FaSearch, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { AiOutlineUser } from 'react-icons/ai';


const courses = [
  { id: 1, name: "Mathematics", faculty: "Science (FOS)", years: "4 Years", color: "blue" },
  { id: 2, name: "Accounting", faculty: "Art (FOA)", years: "4 Years", color: "green" },
  { id: 3, name: "Pharmacy", faculty: "Art (FOA)", years: "4 Years", color: "yellow" },
  // Add more items as needed...
];

const colorMap = {
  blue: {
    bg: '#00E5FF52', // Light blue
    text: 'text-blue-800',
  },
  green: {
    bg: '#00FF3752', // Light green
    text: 'text-green-800',
  },
  yellow: {
    bg: '#FFB20052', // Light yellow
    text: 'text-yellow-800',
  },
  // Add more colors as needed
};




export default function Example() {

  const [currentPage, setCurrentPage] = useState(1); // Track the current page

const handlePrevious = () => {
  if (currentPage > 1) {
    setCurrentPage(currentPage - 1);
  }
};

const handleNext = () => {
  // Assuming you have a total number of pages, e.g., 10.
  if (currentPage < 10) {
    setCurrentPage(currentPage + 1);
  }
};
  return (
    <div className="flex justify-center -mt-10">
      <div className="relative w-full max-w-7xl lg:w-2/8">
        <div className="container mx-auto py-10">
          {/* Search Bar */}
          <div className="relative w-full max-w-7xl lg:w-2/8 -mt-10 mb-10">
            <input
              type="text"
              placeholder="Search For Student, University, JAMB, WAEC, NYSC info"
              className="w-full pl-12 pr-12 p-4 border border-[#B3B3B3] rounded-md"
            />
            <AiOutlineUser className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-500" />
            <FaSearch className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500" />
          </div>

          {/* Table Headings */}
          <div className="overflow-hidden bg-gray-50 px-6 py-3 shadow sm:rounded-md">
            <div className="grid grid-cols-3 gap-4">
              <div className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name of Course
              </div>
              <div className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Faculty
              </div>
              <div className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Years
              </div>
            </div>
          </div>

          {/* Courses List */}
          <ul role="list" className="space-y-3 mt-4">
            {courses.map((course) => (
              <li
                key={course.id}
                className="overflow-hidden rounded-md bg-white px-6 py-4 border"
              >
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm font-medium text-gray-900">{course.name}</p>
                  </div>
                  <div>
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full`}
                      style={{
                        backgroundColor: colorMap[course.color].bg,
                        color: colorMap[course.color].text,
                      }}
                    >
                      {course.faculty}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{course.years}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>

        {/* Pagination */}
        <nav className="flex items-center justify-between  border-gray-200 px-4 sm:px-0 mt-10">
            {/* Previous Button */}
            <div className="-mt-px flex w-0 flex-1">
              <button
                onClick={handlePrevious}
                className="inline-flex items-center justify-center w-8 h-8 bg-gray-200 rounded-md hover:bg-gray-300"
              >
                <FaArrowLeft className="text-gray-600" />
              </button>
            </div>

            {/* Current Page */}
            <div className="md:-mt-px md:flex">
              <span
                className="inline-flex items-center border-t-2 border-indigo-500 px-4 pt-4 text-sm font-medium text-indigo-600"
              >
                Page {currentPage}
              </span>
            </div>

            {/* Next Button */}
            <div className="-mt-px flex w-0 flex-1 justify-end">
              <button
                onClick={handleNext}
                className="inline-flex items-center justify-center w-8 h-8 bg-gray-200 rounded-md hover:bg-gray-300"
              >
                <FaArrowRight className="text-gray-600" />
              </button>
            </div>
          </nav>

        </div>
      </div>
    </div>
  );
}
