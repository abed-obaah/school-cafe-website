

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ArrowLeft } from 'iconsax-react'
import Logo1 from "../../assets/logo02.svg"
import Logo2 from "../../assets/logo01.svg"
import Stats from "./StatsSection"
import Tables from "./tables"
import Share from '../../assets/share-black.svg';
import ArrowBack from '../../assets/arrowback.svg';
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
       <div>

                <div className='flex justify-between'>

                  <div className='flex items-center'>
                  <img src={ArrowBack} className='w-6 h-6' />
                    <p className='ml-5'>Go back</p>
                  </div>

                  <div className='flex items-center'>
                      <img src={Share} className='w-6 h-6' />
                      <p className='ml-5'>Share</p>
                  </div>
                    
                </div>



                <div className="relative isolate px-6  -mt-20 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#EEF6FC] to-[#EEF6FC] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className=" bg-[#0CD241] relative rounded-full px-10 py-1 text-sm/6 text-[#FAFDFF] ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            Recommended
            </div>
          </div>
          <div class="flex items-center justify-center space-x-4">

  <div class="rounded-full overflow-hidden w-40 h-40 flex justify-center items-center border border-gray-300">
    <img src={Logo1} alt="Delta State University Logo" class="w-36 h-36 object-cover"/>
  </div>


  <div class="text-center font-bold text-xl text-black bg-gray-200 px-2 py-1 rounded">
    VS
  </div>

 
  <div class="rounded-full overflow-hidden w-40 h-40 flex justify-center items-center border border-gray-300">
    <img src={Logo2} alt="University of Lagos Logo" class="w-36 h-36 object-cover"/>
  </div>
</div>

          <div className="text-center">
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-[#00172A] sm:text-5xl">
            DELTA STATE UNIVERSITY VS UNIVERSITY OF LAGOS
            </h1>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Stats />
             
            </div>

           
          </div>

          
        </div>
        <Tables />
      
      </div>
       
       </div>
       
      </div>
    </div>
  )
}
