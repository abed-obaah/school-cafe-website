import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { AiOutlineUser } from 'react-icons/ai'; // Example icon, replace with the desired one

export default function SearchBar() {
  return (
    <div className="flex w-full">
      {/* Main Content */}
      <main className="w-4/5 p-10">
        {/* Search Bar */}
        <div className="flex items-center mb-6">
          <input
            type="text"
            placeholder="Search for Departments"
            className="border border-gray-300 p-2 rounded-l w-full"
          />
          <button className="bg-blue-500 text-white p-2 rounded-r">
            <FaSearch />
          </button>
          <AiOutlineUser className="ml-4 text-gray-500 text-2xl" />
        </div>

        {/* Table */}
        <div className="bg-white shadow-lg p-4">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Department
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  School Fees
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {/* Rows of departments and fees */}
              {Array.from({ length: 10 }).map((_, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 text-sm text-gray-500">Accounting</td>
                  <td className="px-6 py-4 text-sm text-gray-500">NGN250,000</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      {/* Info Cards on the Right */}
      <aside className="w-1/5 p-6">
        {/* Flexbox for side-by-side layout */}
        <div className="flex space-x-4">
          {/* Card 1 */}
          <div className="w-1/2 bg-blue-100 p-4 shadow-lg">
            <h3 className="font-semibold text-blue-600">Got A Question?</h3>
            <p className="text-gray-700">
              Confused about anything related to Delta State University School Fees?
            </p>
            <a href="#" className="text-blue-600 underline">
              Click Here
            </a>{' '}
            to get the right support.
          </div>

          {/* Card 2 */}
          <div className="w-1/2 bg-blue-100 p-4 shadow-lg">
            <h3 className="font-semibold text-blue-600">Need Help Paying Your Fees?</h3>
            <p className="text-gray-700">Looking to pay your DELSU Fees?</p>
            <a href="#" className="text-blue-600 underline">
              Click Here
            </a>{' '}
            to get the right support.
          </div>
        </div>
      </aside>
    </div>
  );
}
