'use client';
import React from 'react';
import { Globe, Award, ShieldCheck } from 'lucide-react';
import { HiOutlineBadgeCheck } from 'react-icons/hi';
import ShineBorder from '@/components/ui/shine-border';
import { NumberTicker } from '@/components/ui/number-ticker';
import { motion } from 'framer-motion';

const TrustedByCompact = () => {
  const stats = [
    { label: 'Certification Guarantee', value: '100%', icon: Award },
    { label: 'Satisfaction Rate', value: '100%', icon: Globe },
    { label: 'Government Certified', value: '100%', icon: HiOutlineBadgeCheck },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <ShineBorder
        className="relative mb-6 flex flex-col items-center justify-center overflow-hidden rounded-xl max-w-3xl mx-auto bg-gradient-to-bl from-[#1E1246] to-[#1E1246]/90 text-white md:p-8 animate-shine"
        color={['#f1c40f', '#c0392b', '#FFBE7B']}
      >
        <div className="w-full h-full flex flex-col md:gap-8 gap-4 items-center   ">
          <div className="relative group">
            <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 shadow-xl hover:shadow-white/20 transition-all duration-300 ">
              <ShieldCheck className="w-12 h-12 text-white group-hover:scale-110 transition-transform duration-300" />
            </div>
          </div>
          <h2 className="md:text-3xl text-lg font-semibold text-white/90 tracking-wide">
            Trusted by over 12,000+ Students WorldWide
          </h2>

          <div className="grid grid-cols-3 gap-2 md:gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 flex flex-col items-center gap-2"
              >
                <stat.icon className="w-8 h-8 text-white/80 group-hover:scale-110 transition-transform duration-300" />
                <div className="tex-xl sm:text-2xl  font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base text-center text-white/80 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </ShineBorder>
    </motion.div>
  );
};

export default TrustedByCompact;
