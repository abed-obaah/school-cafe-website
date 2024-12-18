'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, HomeIcon, } from '@heroicons/react/24/outline';
import { FaSearch, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { AiOutlineUser } from 'react-icons/ai';
import Typical from 'react-typical';
import { ArrowLeft } from 'iconsax-react';
import Cards from './cards'


// import logo from '../assets/logoBlack.svg'

// import home from '../assets/home.svg'
import { Link } from 'react-router-dom';

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const handleButtonClick = () => {
    window.open('https://whatsapp.com/channel/0029Va4mZrK8fewhKYnjU83Y', '_blank');
  };

  return (
    <div className="">

<div className="relative isolate px-6 pt-4 lg:px-8">


  {/* Main Gradient Section */}
  <div
    aria-hidden="true"
    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
  >
    
  </div>

  <main>
        <div className="relative isolate mb-20">
       
       
        <div className="relative w-full max-w-7xl mx-auto lg:w-2/8">
  {/* Back to Dashboard */}
  <div className="flex items-center mb-20" style={{ paddingLeft: '0' }}>
    <ArrowLeft color='#B3B3B3' />
    <h3 className="ml-2 text-[#B3B3B3]">Back to Dashboard</h3>
  </div>

  {/* Search Input */}
  <div className="relative">
    <input
      type="text"
      placeholder=""
      className="w-full pl-12 pr-12 p-4 border border-[#B3B3B3] rounded-md"
    />
    <span className="absolute top-1/2 left-12 transform -translate-y-1/2 text-gray-400 pointer-events-none">
      <Typical
        steps={[
          'Search for Student Info...',
          2000,
          'Search for University Info...',
          2000,
          'Search for JAMB Info...',
          2000,
          'Search for WAEC Info...',
          2000,
          'Search for NYSC Info...',
          2000,
        ]}
        loop={Infinity}
        wrapper="span"
      />
    </span>
    <AiOutlineUser className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-500" />
    <FaSearch className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500" />
  </div>
          </div>
     
        </div>
        <Cards/>
      </main>

</div>
    </div>
  )
}
