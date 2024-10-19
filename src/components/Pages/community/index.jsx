'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import SearchBar from './searchBar'
import hero from '../../../assets/heroImage.svg'
import link from '../../../assets/link.svg'
import Header from './headerButtons'
import PostSection from './postSection'
import Sidebar from './sidebar'

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
     
          <SearchBar/>
      <div className="relative isolate pt-14">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-b from-[#EDF7FF] to-[#FFFFFF] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="py-24 sm:py-32 lg:pb-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-balance text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Connect With Like Minds While Asking & Answering Questions On Different Interesting Topics
              </h1>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                {/* <a
                  href="#"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started
                </a> */}
               <div className="flex items-center space-x-2">
                <a href="#" className="text-sm font-semibold leading-6 text-[#1D7BC7]">
                  Invite A Friend
                </a>
                <span aria-hidden="true">
                  <img alt="invite a friend" src={link} className="h-6 w-6"/>
                </span>
              </div>

              </div>
            </div>
            <div className="mt-16 sm:mt-24 flex justify-center">
              <div className="rounded-md lg:rounded-2xl lg:p-4">
                <img
                  alt="App screenshot"
                  src={hero}
                  width={432}
                  height={442}
                  className="rounded-md"
                />
              </div>
            </div>

          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-20rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-35rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-b from-[#EDF7FF] to-[#FFFFFF] opacity-30 sm:left-[calc(50%+3rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
      <div className="flex space-x-2 ml-28">
          {/* Post Section */}
          <div className="flex-1">
            {/* Header */}
            <Header />
            {/* Posts */}
            <PostSection />
          </div>

          {/* Sidebar */}
          <div className="w-[40%]">
            <Sidebar />
          </div>
      </div>
    </div>
  )
}
