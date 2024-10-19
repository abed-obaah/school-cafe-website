'use client'

import { useState } from 'react'
import { Bars3Icon, XMarkIcon, ClipboardIcon } from '@heroicons/react/24/outline'
import Avatar from '../../assets/avatar.svg';
import Copy from '../../assets/copy.svg';
import Profile from '../../assets/profile.svg';
import Tools from './tools'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white ">
      <div className="relative isolate px-6 pt-10  justify-between items-center mx-auto flex max-w-7xl p-6 lg:px-10">
        
        <div className="flex items-center"> 
          <img
            src={Avatar}
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <div className="ml-3"> 
            <h1 className="text-lg font-bold">Hello Tejiri!</h1>
            <span className="inline-flex items-center rounded-md bg-[#FFD400] px-2 py-1 text-xs font-medium text-[#00172A] ring-1 ring-inset ring-[#FFD400]">
              Rank: Novice
            </span>
          </div>
        </div>
    
        {/* Added margin to separate profile info and buttons */}
        <div className="ml-5 space-x-3 flex"> 
          <span
            className="inline-flex items-center rounded-md bg-[#1D7BC7] px-2 py-2 text-xs font-medium text-white ring-1 ring-inset ring-red-600/10"
          >
            <img 
              src={Copy} 
              alt="Refer Friends" 
              className="w-4 h-4 mr-2" 
            />
            <span>Copy Referral Code</span>
          </span>
    
          <span
            className="inline-flex items-center rounded-md px-2 py-2 text-xs font-medium text-[#888888] ring-1 ring-inset ring-red-600/10"
          >
            <img 
              src={Profile} 
              alt="Edit Profile" 
              className="w-4 h-4 mr-2" 
            />
            <span>Edit Profile</span>
          </span>
        </div>

        
      </div>
      <div>
          <Tools/>
          <div className="p-8 bg-gray-100 min-h-screen">
      {/* Your Rank Progress Section */}
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h2 className="text-lg font-semibold mb-2">Your Rank Progress</h2>
        <div className="relative bg-gray-200 rounded-full h-2 mb-1">
          <div className="absolute top-0 left-0 h-full bg-yellow-400 rounded-full" style={{ width: '85%' }}></div>
        </div>
        <p className="text-sm text-gray-500">You are 85% away from achieving Amateur</p>
        <a href="#" className="text-sm text-blue-600">Learn how to grow your rank faster &rarr;</a>
      </div>

      {/* Verify Your Details Section */}
      <div className="bg-white rounded-lg shadow p-6 mb-6 flex justify-between items-center">
        <div>
          <div className="text-xl font-bold mb-1">1/2</div>
          <h3 className="text-lg font-semibold mb-1">Verify Your Details</h3>
          <p className="text-sm text-gray-500">Complete your profile creation to get verified and earn more</p>
          <a href="#" className="text-sm text-blue-600">Get verified in 5mins &rarr;</a>
        </div>
        <div>
          <img src="https://via.placeholder.com/100x100" alt="Verification icon" className="w-16 h-16" />
        </div>
      </div>

      {/* Quick Access Section */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-4">Quick Access</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow p-4 text-center">
            <img src="https://via.placeholder.com/50" alt="CGPA Icon" className="mx-auto mb-2" />
            <h3 className="text-lg font-semibold">CGPA</h3>
            <p className="text-sm text-gray-500 mb-2">Easily Calculate your CGPA correctly and have it recorded.</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded">Calculate</button>
          </div>


          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow p-4 text-center">
            <img src="https://via.placeholder.com/50" alt="Airtime Icon" className="mx-auto mb-2" />
            <h3 className="text-lg font-semibold">Airtime</h3>
            <p className="text-sm text-gray-500 mb-2">Easily purchase airtime and keep it recorded.</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded">Buy Now</button>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow p-4 text-center">
            <img src="https://via.placeholder.com/50" alt="Past Question Icon" className="mx-auto mb-2" />
            <h3 className="text-lg font-semibold">Past Question</h3>
            <p className="text-sm text-gray-500 mb-2">Access past questions and track your progress.</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded">Buy Now</button>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-lg shadow p-4 text-center">
            <img src="https://via.placeholder.com/50" alt="Data Icon" className="mx-auto mb-2" />
            <h3 className="text-lg font-semibold">Data</h3>
            <p className="text-sm text-gray-500 mb-2">Easily Calculate your data usage and track it.</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
        </div>
    </div>
  )
}
