'use client'
import React from 'react';
import { careersPosition } from '@/utils/constants/careers';
import GoogleAnalyticsTemplate from '../Google.Analytics.Template';
import CareerCart from './CareerCart';

const Careers = () => {
  return (
    <GoogleAnalyticsTemplate>
      <div className=" md:text-lg">
        {/* Hero Section */}
        <div className=" mx-auto md:py-16 py-8 flex flex-col gap-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-foreground mb-2 tracking-wide">
              Career Opportunities
            </h1>
            <p className="text-base md:text-lg text-gray-800 max-w-2xl mx-auto tracking-tight">
              {`Build your career with a company that's transforming the digital
            landscape`}
            </p>
          </div>

          {/* Positions Grid */}
          <div className="flex flex-col ">
            <div className="flex justify-center flex-wrap gap-6">
              {careersPosition.map((position, index) => (
                <CareerCart key={index} position={position} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </GoogleAnalyticsTemplate>
  );
};

export default Careers;
