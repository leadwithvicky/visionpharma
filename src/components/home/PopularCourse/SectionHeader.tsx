'use client';

import { motion } from 'framer-motion';
import { AuroraText } from '@/components/ui/aurora-text';
import { FaGraduationCap } from 'react-icons/fa';

export const SectionHeader = () => {
  return (
    <motion.div
      // initial={{ opacity: 0, y: 20 }}
      // whileInView={{ opacity: 1, y: 0 }}
      // viewport={{ once: true }}
      // transition={{ duration: 0.6, ease: 'easeOut' }}
      className="flex flex-col justify-center items-center text-center mb-8"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-sm flex items-center gap-1 mb-4 bg-primary/5 px-4 py-2 rounded-full text-primary"
      >
        <FaGraduationCap className="h-8 w-8" />
        <span className="sm:text-lg font-semibold">Popular Programs</span>
      </motion.div>

      <motion.div
        // initial={{ opacity: 0, y: 10 }}
        // whileInView={{ opacity: 1, y: 0 }}
        // viewport={{ once: true }}
        // transition={{ duration: 0.6 }}
        className="text-xl md:text-2xl lg:text-4xl font-bold tracking-wide text-foreground"
      >
        Perfect Programs <AuroraText>For You To Explore</AuroraText>
      </motion.div>
    </motion.div>
  );
};
