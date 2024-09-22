'use client';

import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon,ChevronDownIcon } from '@heroicons/react/24/outline';
import Logo from '../assets/snLogo.png';
import { Link } from 'react-router-dom';

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Student News', href: '#students' },
  { name: 'NYSC News', href: '#nysc' },
  { name: 'Others', href: '#others' },
  { name: 'About Us', href: '/about' },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('#home'); // Default active nav

  return (
    <header className="bg-[#E9F5FF] py-4">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img alt="" src={Logo} className="h-8 w-auto" />
          </a>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setActiveNav(item.href)} // Set active nav on click
              className={`text-[24px]leading-6 
                ${activeNav === item.href ? 'text-[#1D7BC7] border-b-2 border-[#1D7BC7]' : 'text-[#696969]'}
                hover:text-[#1D7BC7]`} // Add active and hover styles
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="flex flex-1 items-center justify-end gap-x-6">
        <Link
                to="/contact"
                className="mt-4 sm:mt-0 bg-blue-500 text-white px-4 py-2 rounded"
              >
                Contact Us
        </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center gap-x-6">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img alt="" src={Logo} className="h-8 w-auto" />
            </a>
            {/* <button className="mt-4 sm:mt-0 bg-blue-500 text-white px-4 py-2 rounded">Contact Us</button> */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setActiveNav(item.href)} // Set active nav on click
                    className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 
                      ${activeNav === item.href ? 'text-[#1D7BC7] border-b-2 border-[#1D7BC7]' : 'text-gray-900'}
                      hover:bg-gray-50`}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
              <Link
                to="/contact"
                className="mt-4 sm:mt-0 bg-blue-500 text-white px-4 py-2 rounded"
              >
                Contact Us
              </Link>

              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
