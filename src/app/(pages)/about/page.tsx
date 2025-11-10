import AboutVision from '@/components/about';
import AboutCTA from '@/components/about/cta';
import GoogleAnalyticsTemplate from '@/components/Google.Analytics.Template';
import React from 'react';

function AboutPage() {
  return (
    <GoogleAnalyticsTemplate>
      <div className="relative">
        <AboutVision />
        <div className="h-[80px] bg-red-300 bg-gradient-to-b from-visionBlue to-visionBlue"></div>
        <div className="absolute bottom-[0px]  w-full bg-transparent">
          <AboutCTA />
        </div>
      </div>
    </GoogleAnalyticsTemplate>
  );
}

export default AboutPage;
