'use client';

import { motion } from 'framer-motion';

const NotFound = () => {
  // Animation variants for the container
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  // Animation variants for individual elements
  const elementVariants = {
    initial: { y: 20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  // Animation for the numbers
  const numberVariants = {
    initial: { scale: 0, rotate: -180 },
    animate: {
      scale: 1,
      rotate: 0,
      transition: {
        type: 'spring',
        stiffness: 260,
        damping: 20,
      },
    },
    hover: {
      scale: 1.1,
      rotate: [0, -10, 10, -10, 10, 0],
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-[95vh] bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <motion.div
        className="text-center"
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        <motion.div
          className="flex justify-center space-x-4 mb-8"
          variants={elementVariants}
        >
          {[4, 0, 4].map((number, index) => (
            <motion.div
              key={index}
              className="text-8xl md:text-9xl font-bold text-primary"
              variants={numberVariants}
              whileHover="hover"
            >
              {number}
            </motion.div>
          ))}
        </motion.div>

        <motion.h2
          className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8"
          variants={elementVariants}
        >
          Oops! Page Not Found
        </motion.h2>

        <motion.a
          href="/"
          className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
          variants={elementVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Go Back Home
        </motion.a>
      </motion.div>
    </div>
  );
};

export default NotFound;
