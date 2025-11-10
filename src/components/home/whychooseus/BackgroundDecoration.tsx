'use client';

import { motion } from 'framer-motion';
import React from 'react';

export const BackgroundDecorations = () => (
  <>
    {/* Floating Top-Left Circle */}
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      className="absolute top-0 left-0 w-48 h-48 rounded-full bg-visionBlue -translate-x-1/4 -translate-y-1/4"
    />

    {/* Floating Bottom-Right Circle */}
    {/* <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1, y: [0, 10, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      className="absolute bottom-0 right-0 w-48 h-48 rounded-full bg-purple-800/50 translate-x-1/4 translate-y-1/4"
    /> */}

    {/* Pulsing Polygon Shape */}
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: [0.9, 1.1, 0.9] }}
      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      className="absolute left-20 bottom-20 w-12 h-12 bg-purple-500/20"
      style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
    />
  </>
);
