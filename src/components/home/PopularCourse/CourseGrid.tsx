'use client';

import { motion } from 'framer-motion';
import { TabsContent } from '@/components/ui/tabs';
// import CourseCard from './CourseCard';
import { useRouter } from 'next/navigation';
import { CourseCardWithHover } from '@/components/course-item/CourseCardHover';

interface CourseGridProps {
  categories: Array<{
    category: string;
    courses: Array<{
      title: string;
      description: string;
      image: string;
      subtopic: string;
    }>;
  }>;
  currentTab: string;
}

export default function CourseGrid({ categories }: CourseGridProps) {
  const router = useRouter();

  return (
    <>
      {categories.map((category) => (
        <TabsContent key={category.category} value={category.category} asChild>
          {/* Animated Tab Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }} className=''
          >
            <CourseCardWithHover
              courses={category.courses}
              // handleRouteToOverview={handleOnExplore}
            />
          </motion.div>
        </TabsContent>
      ))}
    </>
  );
}
