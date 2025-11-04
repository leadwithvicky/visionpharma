'use client';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { govLogosArray, GovLogoType } from '@/utils/govLogos';
import Image from 'next/image';

const GovLogos = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % govLogosArray.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const currentObject: GovLogoType = govLogosArray[currentIndex];

  return (
    <motion.div
      className="relative min-h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center px-6 py-16 rounded-2xl shadow-xl overflow-hidden"
      style={{ backgroundColor: currentObject?.background }}
      key={currentObject.id}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/40 to-transparent pointer-events-none" />

      {/* Heading */}
      <div className="absolute top-6 left-6 text-2xl md:text-4xl font-extrabold tracking-tight text-black drop-shadow">
        We are Accredited by <span className="text-green-600">✔</span>
      </div>

      {/* Left / Center Display */}
      <div className="md:col-span-1 lg:col-span-2 flex justify-center items-center z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentObject.id}
            className="text-center w-full max-w-[420px] sm:max-w-[520px] flex flex-col justify-center items-center p-6 rounded-2xl backdrop-blur-md bg-white/30 shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8 }}
          >
            {/* Image wrapper */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full flex justify-center"
            >
              <Image
                src={currentObject.mainLogo}
                alt={currentObject.name}
                width={320}
                height={320}
                className="max-h-[280px] sm:max-h-[340px] w-auto object-contain drop-shadow-lg"
              />
            </motion.div>

            {/* Only show name if NOT Telangana */}
            {currentObject.name !== 'Government of Telangana' && (
              <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold mt-6 text-center drop-shadow-md"
                style={{ color: currentObject.textColor }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {currentObject.name}
              </motion.h2>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Right Logo List */}
      <div className="flex flex-col gap-4 md:gap-6 justify-center items-start w-full mt-8 md:mt-0 pr-2 md:pr-6 z-10">
        {govLogosArray.map((item, index) => {
          const isActive = currentIndex === index;
          return (
            <motion.div
              key={item.id}
              className={`flex items-center gap-3 rounded-xl p-3 font-semibold w-full transition-all duration-300 cursor-pointer ${
                isActive
                  ? 'bg-gradient-to-r from-green-100 to-green-50 shadow-md'
                  : 'bg-white/80 shadow-sm hover:shadow-md'
              }`}
              animate={{
                scale: isActive ? 1.05 : 1,
                opacity: isActive ? 1 : 0.9,
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Logo */}
              <div
                className={`w-16 h-16 sm:w-20 sm:h-20 bg-white flex items-center justify-center rounded-full border-2 border-dashed overflow-hidden p-2 shadow-md transition-all duration-300 ${
                  isActive ? 'border-green-500 ring-2 ring-green-300' : 'border-black/40'
                }`}
              >
                <Image
                  src={item.sideLogo}
                  alt={item.name}
                  width={64}
                  height={64}
                  className="h-full w-full object-contain rounded-full p-1"
                />
              </div>

              {/* Always show name */}
              <p
                className={`text-sm sm:text-base flex-1 ${
                  isActive ? 'text-green-700 font-bold' : 'text-black/80'
                }`}
              >
                {item.name.toUpperCase()}
              </p>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default GovLogos;
