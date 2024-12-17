import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import Versus from '../../assets/versus.svg';
import Share from '../../assets/alt.svg';
import Compare from '../Pages/topComparision';

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function compareSchools() {
  return (
    <div className="relative overflow-hidden">
      

      <main>
        <div className="bg-gray-900 pt-10 sm:pt-16 lg:overflow-hidden lg:pb-14 lg:pt-8">
          <div className="mx-auto max-w-7xl lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8">
              <div className="mx-auto max-w-md px-6 sm:max-w-2xl sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left">
                <div className="lg:py-24">
                 
                  <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:mt-6 xl:text-6xl">
                    <span className="block">Find the right choice for your taste & study!</span>
                    {/* <span className="block text-indigo-400">ship web apps</span> */}
                  </h1>
                  <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  Compare different universities and see which suits you better before seeking for an admission or transfer.
                  </p>
                  <div className="mt-10 sm:mt-12">
                    <form action="#" className="sm:mx-auto sm:max-w-xl lg:mx-0">
                      <div className="sm:flex">
                        <div className="min-w-0 flex-1">
                          <label htmlFor="email" className="sr-only">
                            Email address
                          </label>
                          <input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            className="block w-full rounded-md border-0 px-4 py-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2 focus:ring-offset-gray-900"
                          />
                        </div>
                     
                      </div>
                      <p className="mt-3 text-sm text-gray-300 sm:mt-4 flex">
                      <img
                          alt=""
                          src={Share}
                          className="mr-2"
                        />
                        <a href="#" className="font-medium text-white">
                          Share tool
                        </a>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
              <div className="-mb-16 mt-12 sm:-mb-48 lg:relative lg:m-0">
                <div className="mx-auto max-w-md px-6 sm:max-w-2xl lg:max-w-none lg:px-0">
                  {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
                  <img
                    alt=""
                    src={Versus}
                    className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        

      <Compare/>
     
      </main>
    </div>
  )
} 
