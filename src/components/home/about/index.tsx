'use client';
import React from 'react';
import StudentForm from './StudentForm';
import { ContactSection } from './ContactSection';
import { FaGraduationCap } from 'react-icons/fa';
import { contactInfo } from '@/utils/constants/about';
import { IconCloudDemo } from './icon-cloud-demo';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <div
      className="bg-gradient-to-br from-primary/90 via-primary/60 to-primary/80 py-8"
      id="join-community"
    >
      <div className="max-w-screen-2xl mx-auto px-4">
        <div className="flex justify-evenly">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="hidden md:block"
          >
            <IconCloudDemo />
          </motion.div>

          {/* Content Section */}
          <div className="space-y-4">
            {/* Title Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full w-fit text-">
                <FaGraduationCap className="h-8 w-8" />
                <span className="sm:text-lg font-semibold ">
                  Join Our Community
                </span>
              </div>
              <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-foreground">
                Be Part of Something Bigger Now
              </h1>

              {/* <HeroHighlight>
                <motion.h1
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: [20, -5, 0],
                  }}
                  transition={{
                    duration: 0.5,
                    ease: [0.4, 0.0, 0.2, 1],
                  }}
                  className="text-xl md:text-2xl xl:text-4xl font-bold text-black  leading-relaxed lg:leading-snug"
                >
                  Be Part of Something{' '}
                  <Highlight className="text-black dark:text-white">
                    Bigger Now
                  </Highlight>
                </motion.h1>
              </HeroHighlight> */}
            </motion.div>
            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-800 md:text-base text-sm  tracking-tighter font-medium max-w-[630px]"
            >
              Fill out the form below to enroll in your chosen program and start
              your journey toward success.
            </motion.p>
            {/* Form */}
            <motion.div
              id="student-form"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="max-w-[630px]"
            >
              <StudentForm />
            </motion.div>
            {/* Contact Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <ContactSection contactInfo={contactInfo} />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
