import React from 'react';
import jamb from '../assets/jamb.png';
import copper from '../assets/copper.png';
import boy from '../assets/boy.png';
import NewsSection from './NewsSection';
import ToolsSection from './ToolsSection';
import FeaturedSchool from './FeaturedSchool';
import LatestSchool from './LatestSchool'
import CardCompare from './CardCompare'
import Badges from './Badges';
import QuestionInput from './questionsInput';
import Testimonails from './Testimonials'
import FAQ from './Faq';
import AppDownloadSection from './AppDownloadSection';

export default function MainBanner() {
  return (
    <div className="w-full">
      <div className="relative isolate">
        <div className="overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 pb-32 pt-24 sm:pt-48 lg:px-8 lg:pt-24">
            <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
              <div className="relative w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                <h1 className="text-xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                  Stay Informed, Stay Ahead:
                </h1>
                <h1 className="text-xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Your Cafe for Student & 
                </h1>
                <h1 className="text-xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                NYSC News
                </h1>
                <p className="mt-6 text-[24px] leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                Empowering Students and NYSC Members with the Latest Updates, Tips, and Opportunities
                </p>
                <div className="mt-0 text-[24px] flex items-center gap-x-6">
                            <div className="py-6">
                          <button className="mt-4 sm:mt-0 bg-blue-500 text-white px-4 py-2 rounded">Subscribe for the Latest Updates</button>
                          </div>
                </div>
              </div>
              <div className="mt-14 grid grid-cols-4 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
              {/* JAMB Logo */}
                    <div className="relative col-span-2">
                      <img
                        alt="JAMB Logo"
                        src={jamb}
                        className="w-full h-full object-cover rounded-xl bg-yellow-400 shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>

                    {/* Student Image */}
                    <div className="relative col-span-2 row-span-3 md:row-span-3">
                      <img
                        alt="Student"
                        src={boy}
                        className="w-full h-full object-cover rounded-xl bg-blue-400 shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>

                    {/* NYSC Person */}
                    <div className="relative col-span-2">
                      <img
                        alt="NYSC Person"
                        src={copper}
                        className="w-full h-full object-cover rounded-xl bg-green-400 shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>

                    
              </div>


            </div>
          </div>
        </div>
        <NewsSection />
      <ToolsSection />
      <FeaturedSchool />
      <LatestSchool />
      <CardCompare/>
      <Badges/>
      <QuestionInput/>
      <Testimonails/>
      <FAQ/>
      {/* <AppDownloadSection/> */}
      </div>
    </div>
  );
}
