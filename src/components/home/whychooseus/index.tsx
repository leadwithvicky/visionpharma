// components/sections/why-choose-us/WhyChooseUs.tsx
import React from 'react';

import { BackgroundDecorations } from './BackgroundDecoration';
import { SectionHeader } from './SectionHeader';
import { FeaturesGrid } from './FeaturesGrid';
import { StatsGrid } from './StatsGrid';
import { stats, whyChooseUsFeatures } from '@/utils/constants/whychooseus';

const WhyChooseUs = () => {
  return (
    <div>
      <div className="bg-[#1E1246] relative overflow-hidden sm:px-8 px-4 py-8 pb-12">
        <BackgroundDecorations />

        <div className="mx-auto max-w-screen-2xl ">
          <SectionHeader />
          <StatsGrid stats={stats} />
          <FeaturesGrid features={whyChooseUsFeatures} />
        </div>
      </div>
      {/* <Benefit /> */}
    </div>
  );
};

export default WhyChooseUs;
