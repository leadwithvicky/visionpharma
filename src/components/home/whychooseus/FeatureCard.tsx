'use client';

import ShineBorder from '@/components/ui/shine-border';
import { Feature } from '@/types/whychooseus';
import Link from 'next/link';
import { motion } from 'framer-motion';
import React from 'react';

interface FeatureCardProps extends Feature {
  buttonText: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: 'easeOut' }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.03, transition: { duration: 0.3, ease: 'easeOut' } }}
  >
    <ShineBorder
      className="bg-gradient-to-r from-visionBlue to-visionGreen p-4 rounded-2xl w-full min-h-[190px] transition-all"
      color={['#005CAF', '#FFFFFF', '#13AB82']}
    >
      <div className="w-full flex flex-col justify-between gap-4">
        <motion.div
          className="bg-purple-600/20 w-fit p-2 rounded-2xl"
          whileHover={{ scale: 1.1 }}
        >
          {icon}
        </motion.div>

        <div className="text-white sm:text-xl text-lg tracking-wide font-semibold">
          {title}
        </div>

        <div className="text-gray-300 tracking-wide">{description}</div>
      </div>
    </ShineBorder>
  </motion.div>
);
