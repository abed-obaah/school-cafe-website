'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, HomeIcon, } from '@heroicons/react/24/outline';
import { FaSearch, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { AiOutlineUser } from 'react-icons/ai';
import Typical from 'react-typical';
import { ArrowLeft } from 'iconsax-react';
import Cards from './cardsDescription';
import SelectMenu from "./SelectMenu";
// import { Link } from 'react-router-dom';


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
        <Link to={'/dashboard'}>
  {/* Back to Dashboard */}
            <div className="flex items-center" style={{ paddingLeft: '0' }}>
                <ArrowLeft color='#B3B3B3' />
                <h3 className="ml-2 text-[#B3B3B3]">Back to Dashboard</h3>
            </div>
            </Link>
            <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          HIS 101 - Introduction to History & International Studies
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-lg/8 text-gray-600">
          This is a summary about the course, all past questions have been put together after being properly examined and documented from 1999 till 2024. 
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
          <SelectMenu/>
          </div>
        </div>
      </div>

          </div>
     
        </div>
        <Cards/>
      </main>

</div>
    </div>
  )
}
