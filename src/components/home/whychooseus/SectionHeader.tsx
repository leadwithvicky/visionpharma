'use client';

import { GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import React from 'react';

export const SectionHeader = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
    viewport={{ once: true }}
    className="flex flex-col items-center mb-16 tracking-tight"
  >
    {/* Animated Badge */}
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
      className="flex items-center gap-2 justify-center mb-4 bg-white/95 px-4 py-2 rounded-full text-[#13AB82]"
    >
      <GraduationCap className="h-8 w-8 " />
      <p className="sm:text-lg font-semibold">Why Choose Us</p>
    </motion.div>

    {/* Animated Heading */}
    <motion.h2
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
      className="text-white text-xl md:text-2xl lg:text-4xl font-bold mb-4 tracking-wide z-10"
    >
      Providing Amazing Online Programs
    </motion.h2>

    {/* Animated Description */}
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
      className="text-gray-300 lg:max-w-3xl md:max-w-3xl mx-auto text-center"
    >
      We offer immersive language programs powered by the latest educational
      technologies, tailored to diverse learning needs, enhancing fluency and
      cultural understanding in a supportive, tech-driven environment.
    </motion.p>
  </motion.div>
);
