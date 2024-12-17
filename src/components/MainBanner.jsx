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
import HeroSection from './LandingUi';
import { Helmet } from 'react-helmet-async';


export default function MainBanner() {
  return (
   
      <div >
        <Helmet>
        <title>SchoolCafe - Your Ultimate Student Resource</title>
        <meta
          name="description"
          content="SchoolCafe provides comprehensive resources for students, including exam preparation tips, university insights, scholarships, and career guidance. Join our community today!"
        />
        <meta
          name="keywords"
          content="SchoolCafe, student resources, exam tips, university guide, scholarships, career advice, education platform"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://schoolcafe.ng/" />
        <meta
          property="og:title"
          content="SchoolCafe - Your Ultimate Student Resource"
        />
        <meta
          property="og:description"
          content="Find everything you need for academic success. From WAEC and JAMB prep to career advice and scholarships, SchoolCafe has you covered."
        />
        <meta
          property="og:image"
          content="https://schoolcafe.ng/path-to-featured-image.jpg"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://schoolcafe.ng/" />
        <meta
          property="twitter:title"
          content="SchoolCafe - Your Ultimate Student Resource"
        />
        <meta
          property="twitter:description"
          content="Explore student resources, expert insights, and educational tools to guide your journey to academic success."
        />
        <meta
          property="twitter:image"
          content="https://schoolcafe.ng/path-to-featured-image.jpg"
        />
      </Helmet>
        <HeroSection/>
        <NewsSection />
      <ToolsSection />
      <FeaturedSchool />
      <LatestSchool />
      <CardCompare/>
      <Badges/>
      <QuestionInput/>
      <Testimonails/>
      <FAQ/>
   
      </div>
  
  );
}
