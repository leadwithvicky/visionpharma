'use client';

import React from 'react';
import HeroContent from './HeroContent';
import { HeroImage } from './HeroImage';
import TrustedByMarquee from '../Trusted/logo-marquee';

const HeroSection = () => (
  <section className="flex flex-col justify-evenly min-h-[90vh] bg-no-repeat bg-cover bg-center overflow-hidden" style={{ backgroundImage: "url('/svg/v.svg')" }}>
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
        {/* <TrustedByMarquee /> */}
      </div>
  </section>
);

export default HeroSection;
