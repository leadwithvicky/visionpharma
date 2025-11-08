'use client';

import { motion } from 'framer-motion';

const HeroContent = () => {
  return (
    <div className="flex flex-col items-center lg:items-start w-full">
      
      {/* ✅ Main Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full text-center lg:text-left tracking-wide"
      >
        <h1 className="text-[1.9rem] sm:text-[2.3rem] md:text-[2.7rem] lg:text-[3.3rem] xl:text-[3.7rem] font-extrabold leading-tight text-white">
          VisionPharma : Job-Ready Programs in{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-[#13AB82]">
            Pharmacy & Life Sciences
          </span>
        </h1>

        <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl font-medium text-[#F0F6FA]">
          Industry-Certified Training • Hands-On Skills • Fast Career Growth
        </p>
      </motion.div>

      {/* ✅ SEO-Rich Supporting Line */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="hidden md:block mt-4 text-base md:text-lg text-[#E4EEF4] tracking-tight max-w-[600px]"
      >
        VisionPharma delivers <strong className="text-white">industry-aligned Pharmacy, Pharmacovigilance,
        Clinical Research, Medical Coding, and Pharma IT programs</strong> designed to build real
        skills and prepare you for top job opportunities across the pharma & healthcare industry.
      </motion.p>

      {/* ✅ Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-6 flex flex-col sm:flex-row items-center lg:items-start gap-3 w-full lg:w-auto"
      >
        {/* Primary CTA */}
        <a
          href="#popular-courses"
          className="bg-visionGreen text-visionWhite px-6 py-3 rounded-lg font-semibold hover:bg-visionGreen/80 transition-all duration-200 w-full sm:w-auto text-center shadow-md"
        >
          Explore Courses
        </a>

        {/* Secondary CTA */}
        <a
          href="/contact#contact-form"
          className="border border-visionWhite text-visionWhite px-6 py-3 rounded-lg font-semibold hover:bg-visionWhite hover:text-visionBlue transition-all duration-200 w-full sm:w-auto text-center shadow-md"
        >
          Free Career Counselling
        </a>
      </motion.div>

      {/* ✅ Trust Badges */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-5 flex flex-wrap justify-center lg:justify-start gap-4 text-sm text-white"
      >
        <span className="flex items-center gap-1">
          ✅ 100% Industry Certification
        </span>
        <span className="flex items-center gap-1">
          🌐 Learn From Anywhere
        </span>
        <span className="flex items-center gap-1">
          👨‍🏫 Expert Pharma Mentors
        </span>
      </motion.div>

    </div>
  );
};

export default HeroContent;
