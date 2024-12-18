import { ChevronRightIcon } from '@heroicons/react/20/solid';
import SubHead from '../../assets/Subheading-2.svg'
import { FaSearch, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { AiOutlineUser } from 'react-icons/ai';
import Typical from 'react-typical';
import { ArrowLeft } from 'iconsax-react';
import Accordion from './accordion';

export default function Example() {
  return (
    <div className="bg-white">
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20">
      <div className="mx-auto pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-16 lg:py-40 lg:px-8">
            <div className="px-6 lg:px-0 lg:pt-4">
                <div className="mx-auto max-w-2xl">
                <div className="max-w-lg">
                    <h1 className="mt-10 text-pretty text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
                    Faculty Of Arts
                    </h1>
                    <p className="mt-6 text-lg/8 text-gray-600">
                    All past questions have been put together after being properly examined and documented from 1999 till 2024. This will help you attain a great height in education with all you need.
                    </p>
                    {/* Content */}
                    <div className='mt-5'>
                    <span className="inline-flex items-center gap-x-1.5 rounded-md border px-5 py-0.5 text-lg font-medium text-gray-600 mr-6">
                        <svg viewBox="0 0 6 6" aria-hidden="true" className="size-1.5 fill-gray-400">
                        <circle r={3} cx={3} cy={3} />
                        </svg>
                        Questions & Answers
                    </span>
                    <span className="inline-flex items-center gap-x-1.5 rounded-md border px-5 py-0.5 text-lg font-medium text-gray-600">
                        <svg viewBox="0 0 6 6" aria-hidden="true" className="size-1.5 fill-gray-400">
                        <circle r={3} cx={3} cy={3} />
                        </svg>
                        Questions & Answers
                    </span>
                    </div>
                    <div className="mt-5">
                    <span className="inline-flex items-center gap-x-1.5 rounded-md border px-5 py-0.5 text-lg font-medium text-gray-600 mr-6">
                        <svg viewBox="0 0 6 6" aria-hidden="true" className="size-1.5 fill-gray-400">
                        <circle r={3} cx={3} cy={3} />
                        </svg>
                        Questions & Answers
                    </span>
                    <span className="inline-flex items-center gap-x-1.5 rounded-md border px-5 py-0.5 text-lg font-medium text-gray-600">
                        <svg viewBox="0 0 6 6" aria-hidden="true" className="size-1.5 fill-gray-400">
                        <circle r={3} cx={3} cy={3} />
                        </svg>
                        Questions & Answers
                    </span>
                    </div>
                    <div className="mt-5">
                    <span className="inline-flex items-center gap-x-1.5 rounded-md border px-5 py-0.5 text-lg font-medium text-gray-600 mr-6">
                        <svg viewBox="0 0 6 6" aria-hidden="true" className="size-1.5 fill-gray-400">
                        <circle r={3} cx={3} cy={3} />
                        </svg>
                        Questions & Answers
                    </span>
                    </div>
                </div>
                </div>
            </div>

  {/* Image Section - Aligned to Extreme Right */}
            <div className="relative lg:col-start-2 lg:justify-end flex">
                <div
                className="absolute   w-screen  "
                aria-hidden="true"
                />
                <div className="w-full md:w-auto md:rounded-3xl lg:ml-auto">
                <img src={SubHead} alt="Image" className="object-cover" />
                </div>
            </div>
            </div>
            <div className="relative flex justify-center items-center">
                <div className="relative w-full max-w-[90em] -mt-28">
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

            <Accordion/>

        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
      </div>
    </div>
  )
}
