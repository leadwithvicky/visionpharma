import Careers from '@/components/careers/careers';
import CTA from '@/components/cta';
import React from 'react';

const CareersPage = () => {
  return (
    <div className="relative">
      <div className="">
        <Careers />
      </div>
      {/* <div className="h-[80px] bg-red-300 bg-gradient-to-b from-purple-900 to-purple-900"></div>
      <div className="absolute bottom-[0px]  w-full bg-transparent">
        <CTA />
      </div> */}
    </div>
  );
};

export default CareersPage;
