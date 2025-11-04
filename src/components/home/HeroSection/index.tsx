'use client';

import React from 'react';
import HeroContent from './HeroContent';
import { HeroImage } from './HeroImage';
import TrustedByMarquee from '../Trusted/logo-marquee';

const HeroSection = () => (
  <section className="flex flex-col bg-[url('https://cdn.svgator.com/images/2022/06/background-svg-image-pattern.svg')] bg-no-repeat bg-cover justify-evenly gap-8 to-transparent overflow-hidden min-h-[90vh]">
    <div className="relative max-w-screen-2xl mx-auto sm:px-8 px-4 pt-8 lg:pt-12 w-full">
      <div className="flex lg:flex-row flex-col justify-evenly gap-6 w-full">
        <div className="max-w-[600px] flex-1 lg:order-1 order-2">
          <HeroContent />
        </div>
        <div className="lg:max-w-[500px] w-full flex justify-center lg:order-2 order-1">
          <HeroImage />
        </div>
      </div>
      
    </div>
    <div className="w-full  ">
        <TrustedByMarquee />
      </div>
  </section>
);

export default HeroSection;
