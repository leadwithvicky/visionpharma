import CTA from '@/components/cta';
import Services from '@/components/services';
import React from 'react';

const page = () => {
  return (
    <div className="relative">
      <Services />
      {/* <div className="h-[80px] bg-red-300 bg-gradient-to-b from-purple-900 to-purple-900"></div>
      <div className="absolute bottom-[0px]  w-full bg-transparent">
        <CTA />
      </div> */}
    </div>
  );
};

export default page;
