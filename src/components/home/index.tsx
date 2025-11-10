import React from 'react';
import TrustedBy from './Trusted';
import ExploreCourse from './TopCategories';
import Testimonial from './Testimonial';
import HeroSection from './HeroSection';
import PopularCourse from './PopularCourse';
import WhyChooseUs from './whychooseus';
import About from './about';
import CTA from '../cta';
import GoogleAnalyticsTemplate from '../Google.Analytics.Template';
import GovLogos from './GovLogos/GovLogos';
import MentorSlider from './mentors';
import FAQSection from './FAQ';

const Home = () => {
  return (
    <GoogleAnalyticsTemplate>
      <div className="relative">
        <HeroSection />
        <TrustedBy />
        <GovLogos />
        <ExploreCourse />
        <MentorSlider />

        <About />

        <PopularCourse />
        <WhyChooseUs />
        <FAQSection />
        <Testimonial />

        <div className="h-[80px] bg-red-300 bg-gradient-to-b from-visionBlue to-visionBlue"></div>
        <div className="absolute bottom-[0px]  w-full bg-transparent">
          <CTA />
        </div>
      </div>
    </GoogleAnalyticsTemplate>
  );
};

export default Home;
