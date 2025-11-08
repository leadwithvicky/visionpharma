'use client';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface Course {
  id: number | string;
  title: string;
  slug: string;
  price?: number;
  image: string;
  topic: string;
  reviews: number;
  rating: number;
  href?: string;
  description: string;
  subtopic: string;
  program: string;
  branch: string;
  priority: number;
  myProgram: boolean;
  enrollmentType?: string; // ULP or ILP
  batchInfo?: string; // Batch month and year
}

interface CourseCardProps {
  course: Course;
  index?: number; // Optional index for staggered animations
}

const CourseCard = ({ course, index = 0 }: CourseCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.1, // Stagger effect based on card index
        ease: 'easeOut',
      }}
      className="h-full w-full"
    >
      <div
        className="border h-full w-full bg-white border-gray-200 rounded-2xl sm:rounded-3xl shadow-sm
        hover:shadow-md transition-all duration-300 ease-in-out
        min-h-[280px] sm:min-h-[300px] flex flex-col gap-3 sm:gap-3 pb-4 md:pb-1"
      >
        <motion.div
          className="relative w-full aspect-[5/4]"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <Image
            src={course.image}
            alt={course.title}
            className="absolute object-cover inset-0 rounded-t-2xl sm:rounded-t-3xl"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            priority={false}
          />
        </motion.div>

        <div className="px-3 sm:px-4 pb-3 sm:pb-4 tracking-tight flex flex-col justify-between h-full">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
            className="mb-1 text-gray-500 text-xs tracking-tight p-2 bg-gray-100 w-fit rounded-full"
          >
            {course.subtopic}
          </motion.div>

          <h3 className="text-lg sm:text-xl font-semibold mb-1">
            {course.title}
          </h3>
          <p className="text-gray-600 text-xs sm:text-sm line-clamp-2">
            {course.description}
          </p>

          {course.enrollmentType && (
            <div className="mt-2 flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                {course.enrollmentType}
              </span>
              {course.batchInfo && (
                <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                  Batch: {course.batchInfo}
                </span>
              )}
            </div>
          )}

          <Link href={course.slug ?? 'test'}>
            <motion.button
              className="bg-gradient-to-r from-visionGreen to-[#005CAF] text-white px-4 py-3 rounded-full mt-4 w-full
              flex items-center justify-center gap-1 group hover:shadow-md hover:shadow-primary/15 transition-all duration-200 ease-in-out hover:scale-[1.02]"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {course.myProgram ? 'Learn More' : 'Explore Now'}
              <ArrowRight className="size-5 group-hover:translate-x-1 transition-all duration-200 ease-in-out" />
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseCard;
