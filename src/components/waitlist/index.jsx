'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, HomeIcon, } from '@heroicons/react/24/outline';
import Carousel from './Carousel'
import CTA from './CTA'
import Hero from './hero';
import Testimonials from './testimonials'
import Join from './joinWaitlist';
import Footer from '../Footer';
import logo from '../../assets/logoBlack.svg'

import home from '../../assets/home.svg'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">

<div className="relative isolate px-6 pt-14 lg:px-8">
  {/* Floating Button (Top-Left, closer to center) */}
  <div className="absolute top-1/3 left-[20%] hidden md:block">
    <button className="px-10 py-1.5 bg-[#00172A] text-white rounded-full">
      Get Scholarships
    </button>
  </div>
  <div className="absolute top-[45%] left-[10%] hidden md:block">
    <button className="px-10 py-1.5 bg-[#0CD241] text-white rounded-full">
      Career Opportunities
    </button>
  </div>

  {/* Floating Button (Top-Right, closer to center) */}
  <div className="absolute top-1/3 right-[20%] hidden md:block">
    <button className="px-10 py-1.5 bg-[#00172A] text-white rounded-full">
      Connect With People
    </button>
  </div>
  <div className="absolute top-[45%] right-[10%] hidden md:block">
    <button className="px-10 py-1.5 bg-[#0CD241] text-white rounded-full">
      Make Money
    </button>
  </div>

  {/* Floating Button (Bottom-Left, closer to center) */}
  <div className="absolute bottom-1/3 left-[20%] hidden md:block">
    <button className="px-10 py-1.5 bg-[#FFD400] text-white rounded-full">
      Skill Acquisition
    </button>
  </div>

  {/* Floating Button (Bottom-Right, closer to center) */}
  <div className="absolute bottom-1/3 right-[20%] hidden md:block">
    <button className="px-10 py-1.5 bg-[#FFD400] text-white rounded-full">
      Get Latest Updates
    </button>
  </div>

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

  <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 text-center">
    <div className="flex items-center justify-center mb-24">
      <img src={logo} alt="App Store" className="h-20 mr-2" />
    </div>

    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
      Become The 1%ers Of School Cafe
    </h1>
    <p className="mt-6 text-xl leading-8 text-[#888888] font-light">
      Gain and earn from us faster by being the first person to register. Click the link below to join our waitlist today!
    </p>

    {/* Join Waitlist Button */}
    <div className="mt-10 flex items-center justify-center gap-x-6">
      <a
        href="#"
        className="flex items-center justify-center space-x-2 rounded-md bg-[#1D7BC7] px-16 py-4 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
      >
        <span className="text-lg ml-2">Join Waitlist</span>
        <img src={home} alt="App Store" className="h-6 w-6 text-white" />
      </a>
    </div>
  </div>

  {/* Bottom Gradient Section */}
  <div
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
  </div>
</div>

      <Carousel/>
      <CTA/>
      <Hero/>
      <Testimonials/>
      <Join/>
      <Footer/>
    </div>
  )
}
