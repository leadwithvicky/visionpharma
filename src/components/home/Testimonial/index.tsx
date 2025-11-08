'use client';

import React from 'react';
import { TestimonialCard } from './TestimonialCard';
import { TfiWrite } from 'react-icons/tfi';
import { TESTIMONIALS } from '@/utils/constants/Testimonial';
import Marquee from 'react-fast-marquee';
// heading effect removed per request

// Main Testimonials Component
export default function Testimonials() {
  return (
    <section className="w-full px-4 pt-8 pb-40 bg-gradient-to-r from-pink-50 to-purple-50">
      <div className="max-w-screen-2xl mx-auto flex flex-col gap-4">
        {/* Header Section */}
        <div className="text-center flex flex-col items-center mb-2 ">
          <div className="text-sm flex items-center gap-2 bg-primary/5 px-4 py-2 rounded-full text-visionGreen">
            <TfiWrite className="h-6 w-6" />
            <span className="sm:text-lg  font-semibold">Testimonials</span>
          </div>

          <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-black tracking-wide">
            Insights From VisionPharma Users
          </h2>
        </div>

        {/* Marquee Section */}
        <Marquee
          gradient={false}
          speed={50}
          pauseOnHover
          aria-label="User testimonials carousel"
          className=" h-full pb-2"
        >
          {TESTIMONIALS.slice(0, TESTIMONIALS.length / 2).map((testimonial) => (
            <div
              key={testimonial.id}
              className="px-2 max-w-[400px] min-h-[200px]"
            >
              <TestimonialCard
                name={testimonial.name}
                role={testimonial.role}
                image={testimonial.image}
                quote={testimonial.quote}
                rating={testimonial.rating}
              />
            </div>
          ))}
        </Marquee>

        <Marquee
          gradient={false}
          speed={50}
          pauseOnHover
          aria-label="User testimonials carousel"
          className="h-full"
          direction="right"
        >
          {TESTIMONIALS.slice(TESTIMONIALS.length / 2, TESTIMONIALS.length).map(
            (testimonial) => (
              <div
                key={testimonial.id}
                className="px-2 max-w-[400px] min-h-[200px]"
              >
                <TestimonialCard
                  name={testimonial.name}
                  role={testimonial.role}
                  image={testimonial.image}
                  quote={testimonial.quote}
                  rating={testimonial.rating}
                />
              </div>
            )
          )}
        </Marquee>
      </div>
    </section>
  );
}
