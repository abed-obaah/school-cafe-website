import { ChevronRightIcon } from '@heroicons/react/20/solid';
import SubHead from '../../assets/Subheading-2.svg'
import { FaSearch, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { AiOutlineUser } from 'react-icons/ai';
import Typical from 'react-typical';
import { ArrowLeft } from 'iconsax-react';
import Accordions from './accordions';
import Link from '../../assets/link.svg'

export default function Example() {
  return (
    <div className="bg-white">
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20">
      <div className="bg-white">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          History & International Studies
          </h2>
          <div className="flex items-center justify-center mt-6">
        <p className="text-pretty text-sm text-[#1D7BC7] mr-4">Invite A Course Mate</p>
        <img src={Link} alt="Course Mate" className="w-6 h-6" />
        </div>

          
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

            <Accordions/>

         

        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
      </div>
    </div>
  )
}
