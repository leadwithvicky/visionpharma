'use client';
import { PROGRAM_NAVIGATION } from '@/utils/constants/ExploreCourse';
import Link from 'next/link';
import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import { TbFlowerFilled } from 'react-icons/tb';
import { motion } from 'framer-motion';

const TopCategories = () => {
  return (
    <div
      id="topCategory"
      className="max-w-screen-2xl mx-auto flex flex-col justify-center items-center py-8 sm:px-8 px-4"
    >
      {/* Header section with fade-in from bottom animation */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center flex flex-col justify-center items-center"
      >
        <div className="flex items-center gap-1 mb-4 px-4 py-1 bg-visionGreen/10 rounded-full">
          <FaGraduationCap className="h-8 w-8 text-visionBlue" />
          <span className="sm:text-lg text-vision font-semibold">
            Top Categories
          </span>
        </div>
        <div className="text-xl md:text-2xl lg:text-4xl font-bold tracking-wide text-foreground mb-8">
          Explore Our Best Online Programs
        </div>
      </motion.div>

      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full place-items-center px-2">
          {PROGRAM_NAVIGATION.map((data, index) => {
            const Icon = data.icon;
            return (
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1, // Stagger effect for cards
                }}
                key={index}
                className="w-full"
              >
                <Link
                  href={`/program?programName=${data.name}`}
                  className={`
  flex justify-between gap-2 p-12 w-full rounded-2xl shadow-md 
  hover:scale-[1.01] active:scale-[0.99] cursor-pointer ease-in-out duration-300
  ${bgColors[index]} bg-opacity-15
  hover:bg-opacity-90 active:bg-opacity-100
  relative group
`}

                >
                  <div>
                    <div className="font-semibold text-lg md:text-xl max-w-[100px]">
                      {data.name}
                    </div>
                  </div>

                  <div className="relative flex justify-center items-center">
                    <TbFlowerFilled
                      className={`size-24 object-contain z-[-1] absolute transition-all duration-1000 group-hover:[animation:_spin_4s_linear_infinite] ${textColors[index]}`}
                    />

                    <div className="p-[2px] bg-gradient-to-b from-white to-white/40 rounded-full shadow-xl">
                      <div className="p-2 rounded-full bg-primary/50">
                        <Icon className="size-6 text-white" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default TopCategories;

const bgColors = [
  'bg-blue-500',
  'bg-pink-500',
  'bg-green-500',
  'bg-yellow-500',
  'bg-indigo-500',
  'bg-purple-500',
];

const textColors = [
  'text-blue-500',
  'text-pink-500',
  'text-green-500',
  'text-yellow-500',
  'text-indigo-500',
  'text-purple-500',
];
