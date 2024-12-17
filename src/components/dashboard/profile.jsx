'use client';

import { useState } from 'react';
import { Dialog, DialogPanel, Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/react';
import Logo from '../../assets/logoProfile.svg';
import upload from '../../assets/upload.svg';
import user from '../../assets/change.svg';

import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
    PhoneIcon,
    PlayCircleIcon,
    ChevronDownIcon,
} from '@heroicons/react/24/outline';
import AvatarUser from '../../assets/3d.svg';

// import {
//   ArrowPathIcon,
//   Bars3Icon,
//   ChartPieIcon,
//   CursorArrowRaysIcon,
//   FingerPrintIcon,
//   SquaresPlusIcon,
//   XMarkIcon,
//   PlayCircleIcon,
//   ChevronDownIcon,
// } from '@heroicons/react/24/outline'
import Logos from '../../assets/cafe.svg';
import Avatar from '../../assets/avatar.svg';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../../UserContext';


const products = [
    { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
    { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
    { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
    { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
    { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
];

const callsToAction = [
    { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
    { name: 'Contact sales', href: '#', icon: PhoneIcon },
];

const company = [
    { name: 'About us', href: '#', description: 'Learn more about our company values and mission to empower others' },
    { name: 'Careers', href: '#', description: 'Looking for your next career opportunity? See all of our open positions' },
    { name: 'Support', href: '#', description: 'Get in touch with our dedicated support team or reach out on our community forums' },
    { name: 'Blog', href: '#', description: 'Read our latest announcements and get perspectives from our team' },
];

export default function Example() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Profile updated:', { name, email });
    };


    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { user, logout } = useUserContext();
    const navigate = useNavigate();
  
    const handleLogout = () => {
      logout(); // Clear user data and remove from localStorage
      navigate('/'); // Navigate to the login page after logout
    };
  
    const handleLogIn = () => {
     // Clear user data and remove from localStorage
      navigate('/auth'); // Navigate to the login page after logout
    };


    return (
        <div className="bg-white">
            <header className="border-b-2 z-30">
      <nav aria-label="Global" className="mx-auto flex w-6xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
        <Link to="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img alt="" src={Logo} className="h-8 w-auto" />
                        </Link>
        </div>
        <div className="flex lg:hidden z-40">
      {user ? (
        <div className="flex items-center space-x-4"> {/* Container with flexbox for side-by-side alignment */}
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(true)}
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                >
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                </button>
      
              {/* If the user is logged in, display the avatar linked to the profile page */}
              <Link to="/profile">
                <img alt="User Avatar" src={Avatar} className="h-8 w-auto" />
              </Link>
      </div>
      
      ) : (
        // If the user is not logged in, show the mobile menu button
        <button
          type="button"
          onClick={() => setMobileMenuOpen(true)}
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon aria-hidden="true" className="h-6 w-6" />
        </button>
      )}
    </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12 pointer-events-none text-gray-400 z-20">
          <Popover className="relative">
            <Link
              to="/"
              className={`flex items-center gap-x-1 text-sm font-semibold leading-6 ${
                location.pathname === '/' ? 'text-gray-400' : 'text-gray-400'
              }`}
            >
              Home
            </Link>
          </Popover>

          <Link to="/community" className="text-sm font-semibold leading-6 text-gray-400">
            Community
          </Link>
          <Link to="/school" className="text-sm font-semibold leading-6 text-gray-400">
            Featured Schools
          </Link>
          <Link to="/shop" className="text-sm font-semibold leading-6 text-gray-400">
            Shop
          </Link>

          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-400">
              Others
              <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
            </PopoverButton>

            <PopoverPanel className="absolute -left-8 top-full z-30 mt-3 w-96 rounded-3xl bg-white p-4 shadow-lg ring-1 ring-gray-900/5 transition">
              {company.map((item) => (
                <div key={item.name} className="relative rounded-lg p-4 hover:bg-gray-50">
                  <Link to={item.href} className="block text-sm font-semibold leading-6 text-gray-400">
                    {item.name}
                    <span className="absolute inset-0" />
                  </Link>
                  <p className="mt-1 text-sm leading-6 text-gray-400">{item.description}</p>
                </div>
              ))}
            </PopoverPanel>
          </Popover>
        </PopoverGroup>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end z-10">
        {user ? (
                <div className="py-6 flex items-center space-x-4">
                        <Link
                          to="/contact"
                          className="mt-4 sm:mt-0 bg-gray-400 text-white px-4 py-2 rounded pointer-events-none"
                        >
                          Contact Us
                        </Link>
                        <Link to="/profile">
                          <img alt="" src={Avatar} className="h-8 w-auto" />
                        </Link>
              </div>
      
      ) : (
        // If the user is not logged in, show the mobile menu button
              <div className="py-6 flex items-center space-x-4">
                      <Link
                        to="/contact"
                        className="mt-4 sm:mt-0 bg-gray-400 text-white px-4 py-2 rounded pointer-events-none"
                      >
                        Contact Us
                      </Link>
          </div>
      )}
          
         
        </div>
      </nav>

      {/* Mobile Menu */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden z-50">
        <div className="fixed inset-0 z-40" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 flex w-full flex-col justify-between overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img alt="" src={Logos} className="h-8 w-auto" />
              </a>
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
                  {products.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="group -mx-3 flex items-center gap-x-6 rounded-lg p-3 text-base font-semibold leading-7 text-gray-400 pointer-events-none"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50">
                        <item.icon aria-hidden="true" className="h-6 w-6 text-gray-400" />
                      </div>
                      {item.name}
                    </a>
                  ))}
                </div>

                <div className="space-y-2 py-6">
                  {company.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-400 pointer-events-none"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>

                {user ? (
            <div className="py-6" onClick={handleLogout}>
            <a
              onClick={handleLogout}
              href="#"
              className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
            >
              Log out
            </a>
          </div>
          
          ) : (
            // If the user is not logged in, show the mobile menu button
            <div className="py-6" onClick={handleLogIn}>
            <a
              onClick={handleLogIn}
              href="#"
              className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
            >
              Log In
            </a>
          </div>
          )}

                    {/* Log Out - Still Enabled */}
                    {/* <div className="py-6" onClick={handleLogout}>
                      <a
                        onClick={handleLogout}
                        href="#"
                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        Log out
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>

          <div className="sticky bottom-0 grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50 text-center">
            {callsToAction.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="p-3 text-base font-semibold leading-7 text-gray-400 pointer-events-none"
              >
                {item.name}
              </a>
            ))}
          </div>
        </DialogPanel>
      </Dialog>
    </header>

            <div className="flex flex-col items-center justify-center">
                    <div className="max-w-3xl w-full mx-auto">
      {/* Back to Dashboard Link */}
                <div className="mb-4">
                    <Link to={'/dashboard'}>
                   
                <a href="#" className="text-sm text-[#B3B3B3]">&lt; back to Dashboard</a>
                </Link>
            </div>

        {/* Edit Profile Header */}
        <div className="mb-4">
        <h1 className="text-lg font-bold text-gray-800 border-b-4 border-blue-600 w-1/2">
            Edit Profile
        </h1>
        </div>

      {/* Profile Editing Box */}
      <div className="p-8 rounded-lg shadow-lg border max-w-3xl w-full mx-auto">
        {/* Profile Image and Name Input Side by Side */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-x-0 sm:space-x-8">
          {/* Profile Image and Avatar Buttons */}
          <div className="flex flex-col items-center mb-4 sm:mb-0">
            <img
              src={AvatarUser}
              alt="Profile Avatar"
              className="w-60 h-50 rounded-full border-4 border-gray-300"
            />

            {/* Buttons (Under Image) */}
            <div className="flex justify-center mt-4 space-x-6">
              <button className="px-3 py-0.5 border-2 border-dashed border-blue-400 text-blue-400 rounded-full text-sm flex items-center">
                <img
                  alt=""
                  src={user}
                  className="h-4 w-4 mr-1"
                />
                Change Avatar
              </button>
              <button className="px-3 py-0.5 border-2 border-dashed border-blue-400 text-blue-400 rounded-full text-sm flex items-center">
                <img
                  alt=""
                  src={upload}
                  className="h-4 w-4 mr-1"
                />
                Upload Avatar
              </button>
            </div>
          </div>

          {/* Name Input with "Change" Link Inside */}
          <div className="text-center">
            <div className="relative w-80"> {/* Increased width here */}
              <input
                type="text"
                value={user.email}
                className="w-full p-2 border border-gray-300 rounded-lg font-bold text-lg pr-16"
              />
              <a href="#" className="absolute right-4 top-1/2 transform -translate-y-1/2 text-sm text-blue-600">
                Change
              </a>
            </div>

            {/* Done Button with same width as input */}
            <div className="relative w-80 mt-10"> {/* Increased width here */}
              <button className="w-full bg-[#1D7BC7] text-white px-6 py-2 rounded-md">
                Done
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
        </div>
    );
}
