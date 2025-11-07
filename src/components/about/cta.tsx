'use client';
import React from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import ShineBorder from '../ui/shine-border';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

interface CTAProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  actionButtonText?: string;
  imagePath?: string;
}

const AboutCTA = ({
  subtitle = "At VisionPharma, education is not just a service - it's our mission in shaping a smarter, more inclusive future through technology and learning!",
  ctaText = 'Get Your Skills Certificate',
  actionButtonText = 'Join our community',
  imagePath = '/images/home/cta/cta.webp',
}: CTAProps) => {
  const router = useRouter();
  const handleJoinCommunity = () => {
    // Handle Join Community Click
    router.push('/#join-community');
    // const element = document.getElementById('join-community');
    // window.scrollTo({
    //   top: element?.offsetTop,
    //   behavior: 'smooth',
    // });
  };
  return (
    <ShineBorder
      className="relative mx-auto max-w-5xl w-full bg-gradient-to-r from-[#005CAF] to-[#13AB82]
 rounded-2xl overflow-hidden"
      color={['#13AB82', '#005CAF', '#ffffff']}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="relative mx-auto max-w-5xl w-full bg-gradient-to-r from-[#005CAF] to-[#13AB82]
 rounded-2xl overflow-hidden"
      >
        {/* Background curved shapes */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white rounded-l-full opacity-30 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-1/4 h-2/3 bg-white rounded-r-full opacity-20 animate-pulse" />

        <div className="relative flex flex-col md:flex-row items-center justify-between gap-6 p-4">
          {/* Image Section */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:block hidden w-[100px] shrink-0"
          >
            <div className="relative aspect-square w-[160px] mx-auto">
              <Image
                src={imagePath}
                alt="Student with books"
                className="object-contain"
                fill
                priority
                sizes="(max-width: 768px) 180px, 200px"
              />
            </div>
          </motion.div>

          {/* Content Section */}
          <div className="space-y-3 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
              className="space-y-2 font-bold text-white tracking-wide max-w-lg"
            >
              <p className="text-lg">At VisionPharma,</p>
              <h2 className="text-lg flex flex-col  leading-tight">
                <span className="">
                  Education is not just a service - it&apos;s our
                  Responsibility.
                </span>
              </h2>
            </motion.div>
          </div>

          {/* Button Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
            className="flex justify-center md:justify-end"
          >
            <div onClick={handleJoinCommunity}>
              <button className="inline-flex items-center gap-2 bg-gradient-to-r from-[#005CAF] to-[#13AB82]
 text-white hover:bg-orange-50 px-6 py-3 rounded-lg font-medium transition-all duration-300 group shadow-lg hover:shadow-xl">
                {actionButtonText}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </ShineBorder>
  );
};

export default AboutCTA;
