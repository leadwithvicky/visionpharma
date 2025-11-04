import { motion } from 'framer-motion';

const HeroContent = () => {
  return (
    <div className="flex flex-col items-center lg:items-start">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl flex flex-col w-full sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 tracking-wide md:!leading-[2.5rem] xl:!leading-[3rem] lg:mx-0 text-foreground text-center lg:text-left"
      >
        <h1 className="leading-tight">
          VisionTech: Job-Ready Programs in{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-black to-indigo-600">
            Pharmacy, Engineering, Degree,Agriculture, Management & Tech
          </span>
        </h1>
       <div className="text-lg sm:text-lg md:text-xl mt-2 font-medium text-black">
    Industry-Certified, Practical Skills. Build Your Career Faster.
  </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="hidden md:block text-lg md:text-lg text-black lg:mx-0 tracking-tight font-medium"
      >
        <strong>VisionTech</strong> offers industry-certified, job-ready programs in <strong>Engineering, Pharmacy, Agriculture, Management, and Emerging Technologies</strong>. Learn practical skills, get hands-on experience, and build your career faster with VisionTech.
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-6 flex flex-col sm:flex-row gap-3 items-center lg:items-start"
      >
        <a
          href="#popular-courses"
          className="bg-purple-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-purple-700 transition text-center w-full sm:w-auto"
        >
          Explore Courses
        </a>
        <a
          href="/contact#contact-form"
          className="border border-purple-600 text-purple-600 px-5 py-2.5 rounded-lg font-semibold hover:bg-purple-50 transition text-center w-full sm:w-auto"
        >
          Get Free Career Counselling
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-4 text-sm text-black flex items-center gap-4 flex-wrap justify-center lg:justify-start"
      >
        <span className="flex items-center gap-1">
          <span className="text-green-500">✓</span> 100% Certification Guarantee
        </span>
        <span className="flex items-center gap-1">
          <span className="text-blue-500">🌐</span> Learn from Anywhere
        </span>
        <span className="flex items-center gap-1">
          <span className="text-purple-500">👨‍🏫</span> Industry Expert Mentors
        </span>
      </motion.div>
    </div>
  );
};

export default HeroContent;
