'use client'

import { useState } from 'react'
import { Dialog, DialogPanel, Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
  PlayCircleIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline'
import Logo from '../assets/cafe.svg';
import Avatar from '../assets/avatar.svg';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../UserContext';

const products = [
  { name: 'Home', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
  { name: 'Community', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Featured Schools', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
  { name: 'Shop', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: '', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]

const callsToAction = [
  { name: 'Contact Us', href: '#', icon: PlayCircleIcon },
]

const company = [
  { name: 'About us', href: '#', description: 'Learn more about our company values and mission to empower others' },
]

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { logout } = useUserContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    // alert("clearing storage");
        logout(); // Clear user data and remove from localStorage
    navigate('/'); // Navigate to the login page after logout
  };

  return (
    <header className="bg-[#E8F5FF]">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img alt="" src={Logo} className="h-10 w-auto" />
          </a>
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
        <PopoverGroup className="hidden lg:flex lg:gap-x-12 pointer-events-none text-gray-400">
          {/* Navigation Links Disabled */}
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

            <PopoverPanel className="absolute -left-8 top-full z-10 mt-3 w-96 rounded-3xl bg-white p-4 shadow-lg ring-1 ring-gray-900/5 transition">
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

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
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
        </div>
      </nav>

      {/* Mobile Menu */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 flex w-full flex-col justify-between overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img alt="" src={Logo} className="h-8 w-auto" />
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

                {/* Log Out - Still Enabled */}
                <div className="py-6" onClick={handleLogout}>
                  <a
                  onClick={handleLogout}
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log out
                  </a>
                </div>
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
  )
}
