'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, HomeIcon, } from '@heroicons/react/24/outline';
import { FaSearch, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { AiOutlineUser } from 'react-icons/ai';
import Typical from 'react-typical';
import copper1 from "../assets/copper1.png"
import copper2 from "../assets/copper2.png"
import copper3 from "../assets/copper3.png"
import copper4 from "../assets/copper4.png"
import copper5 from "../assets/copper5.png"

import logo from '../assets/logoBlack.svg'

import home from '../assets/home.svg'
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
    <div className="bg-white">

<div className="relative isolate px-6 pt-4 lg:px-8">


  {/* Main Gradient Section */}
  <div
    aria-hidden="true"
    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
  >
    <div
      style={{
        clipPath:
          'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
      }}
      className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#EEF6FC] to-[#EEF6FC] opacity-100 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
    />
  </div>

  <main>
        <div className="relative isolate">
          <svg
            aria-hidden="true"
            className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
          >
            <defs>
              <pattern
                x="50%"
                y={-1}
                id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                width={200}
                height={200}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" width="100%" height="100%" strokeWidth={0} />
          </svg>
          <div
            aria-hidden="true"
            className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
          >
            <div
              style={{
                clipPath:
                  'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
              }}
              className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#EEF6FC] to-[#EEF6FC] opacity-100 "
            />
          </div>
          <div className="flex justify-center items-center w-full mt-0 mb-0">
          <div className="flex justify-center items-center w-full mt-0 mb-0">
      <div className="relative w-full max-w-7xl lg:w-2/8">
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

                <div className="overflow-hidden">
  <div className="mx-auto max-w-7xl px-6 pb-16 pt-20 sm:pt-32 lg:px-8 lg:pt-4">
    <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
      <div className="relative w-full lg:max-w-xl lg:shrink-0 xl:max-w-2xl">
        <h1 className="text-pretty text-2xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
        Connecting Students with their Dream University 
        </h1>
        <p className="mt-4 text-pretty text-[20px] font-thin text-gray-500 sm:max-w-md sm:text-lg lg:max-w-none">
        SchoolCafe connects students with universities and educational institutions, facilitating seamless academic pathways
        </p>
        <div className="mt-6 sm:mt-8 text-[14px] sm:text-[16px] flex flex-col sm:flex-row items-center gap-x-6 justify-start">
          <div className="py-4 sm:py-6">
            {/* <Link to={"/comingSoon"}> */}
            <button
      className="mt-2 sm:mt-4 bg-[#1D7BC7] text-white px-8 sm:px-14 py-3 sm:py-4 rounded flex items-center gap-2"
      onClick={handleButtonClick}
    >
      <FaSearch className="text-white text-sm sm:text-base" />
      <span className="text-xs sm:text-base">Join our Community Today</span>
    </button>
            {/* </Link> */}
            
          </div>
        </div>
      </div>

      <div className="mt-10 flex justify-end gap-8 sm:-mt-36 sm:justify-start sm:pl-12 lg:mt-0 lg:pl-0">
        <div className="ml-auto w-44 flex-none space-y-8 pt-24 sm:ml-0 sm:pt-48 lg:order-last lg:pt-32 xl:order-none xl:pt-48">
          <div className="relative">
            <img
              alt=""
              src={copper4}
              className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
            />
            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
          </div>
        </div>
        <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-40 lg:pt-32">
          <div className="relative">
            <img
              alt=""
              src={copper2}
              className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
            />
            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
          </div>
          <div className="relative">
            <img
              alt=""
              src={copper3}
              className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
            />
            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
          </div>
        </div>
        <div className="w-44 flex-none space-y-8 pt-24 sm:pt-0">
          <div className="relative">
            <img
              alt=""
              src={copper5}
              className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
            />
            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
          </div>
          <div className="relative">
            <img
              alt=""
              src={copper1}
              className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
            />
            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        </div>
      </main>

  {/* Bottom Gradient Section */}
  {/* <div
    aria-hidden="true"
    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
  >
    <div
      style={{
        clipPath:
          'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
      }}
      className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#EEF6FC] to-[#EEF6FC] opacity-200 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
    />
  </div> */}
</div>
    </div>
  )
}
