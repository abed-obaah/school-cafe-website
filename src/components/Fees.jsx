import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { AiOutlineUser } from 'react-icons/ai'; // Example icon, replace with the desired one

export default function SearchBar() {
  return (
      <div className="flex w-[117%]">
      {/* Main Content */}
      
      <main className="w-full p-10">
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

          <div className='w-[800px]'>
          {/* Table */}
          <div className="bg-white shadow-lg p-4 flex">
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

                   {/* Info Cards on the Right */}
              <aside className="w-[800px] p-6 flex">
                      {/* Flexbox for side-by-side layout */}
                      <div className="space-x-4">
                        {/* Card 1 */}
                        <div className="w-[600px] bg-blue-100 p-4 shadow-lg">
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
                        <div className="w-[400px] bg-blue-100 p-4 shadow-lg">
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

       
     
      </main>

     
    </div>
  );
}
