'use client';

import React, { useState } from 'react';
import { faqs } from '@/utils/constants/faqs';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { cn } from '@/lib/utils';
import ShineBorder from '@/components/ui/shine-border';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="w-full px-4 pb-4  bg-[#1E1246] relative overflow-hidden">
      <div className="max-w-screen-2xl mx-auto">
        <div className="text-center mb-8">
          <TextGenerateEffect
            words={"Frequently Asked Questions"}
            className="text-xl md:text-2xl lg:text-4xl font-bold text-white tracking-wide"
          />
          <p className="mt-2 text-sm md:text-base text-gray-300">
            Answers to the most common questions about VisionPharma programs.
          </p>
        </div>

        <div className="mx-auto columns-1 md:columns-2 gap-4 md:gap-6 lg:gap-8">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <ShineBorder
                key={index}
                className={cn(
                  'rounded-2xl w-full break-inside-avoid mb-4 transition-all duration-300',
                  isOpen ? 'bg-[#2A1B63]' : 'bg-[#2A1B63]'
                )}
                color={['#13AB82', '#ffffff', '#005CAF']}
              >
                <div className="p-4 md:p-5">
                  <button
                    onClick={() => toggle(index)}
                    className="w-full flex items-start justify-between gap-4 text-left"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                  >
                    <span className="font-semibold text-white text-base md:text-lg">
                      {item.question}
                    </span>
                    <span
                      className={cn(
                        'shrink-0 inline-flex h-8 w-8 items-center justify-center rounded-full border transition-all',
                        isOpen
                          ? 'bg-purple-600 text-white border-purple-600 rotate-45'
                          : 'bg-purple-600/20 text-purple-400 border-purple-600/40'
                      )}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>
                  <div
                    id={`faq-panel-${index}`}
                    className={cn(
                      'grid transition-[grid-template-rows] duration-300 ease-in-out',
                      isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    )}
                  >
                    <div className="overflow-hidden">
                      <div className="pt-4 text-sm md:text-base text-gray-300">
                        {item.answer}
                      </div>
                    </div>
                  </div>
                </div>
              </ShineBorder>
            );
          })}
        </div>
      </div>
    </section>
  );
}


