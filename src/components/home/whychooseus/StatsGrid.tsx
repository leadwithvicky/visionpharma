'use client';

import { NumberTicker } from '@/components/ui/number-ticker';
import { Stat } from '@/types/whychooseus';
import { motion } from 'framer-motion';
import React from 'react';

interface StatsGridProps {
  stats: Stat[];
}

export const StatsGrid: React.FC<StatsGridProps> = ({ stats }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
    viewport={{ once: true }}
    className="grid grid-cols-3 gap-8 mb-16"
  >
    {stats.map((stat, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.2, duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h3 className="text-white sm:text-3xl text-xl font-bold mb-2">
          <NumberTicker value={stat.value} className="text-white" />+
        </h3>
        <p className="text-purple-300 sm:text-base text-sm">{stat.label}</p>
      </motion.div>
    ))}
  </motion.div>
);
