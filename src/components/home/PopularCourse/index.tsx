// components/Courses/BroadSelection.tsx
'use client';
import React, { useEffect } from 'react';
import { Tabs } from '@/components/ui/tabs';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
// import { COURSESDATA } from '@/utils/constants/PopularCourse';
import { SectionHeader } from './SectionHeader';
import { CategoryTabs } from './CategoryTabs';
import CourseGrid from './CourseGrid';
import { getPopularCourse } from '@/utils/constants/PopularCourse';

const BroadSelection = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentTab = searchParams?.get('category') || 'All Programs';
  const [COURSESDATA, setCourseData] = React.useState<CategoryData[]>([]);

  const handleTabChange = (value: string) => {
    const params = new URLSearchParams(searchParams?.toString());
    params.set('category', value);
    router.replace(`${pathname}?${params.toString()}`, {
      scroll: false,
    });
  };

  useEffect(() => {
    const data = getPopularCourse();

    setCourseData(data);
  }, []);

  return (
    <section id="popular-courses" className="max-w-screen-2xl mx-auto px-4  py-8 sm:px-8">
      <SectionHeader />

      <Tabs
        value={currentTab}
        onValueChange={handleTabChange}
        className="w-full"
      >
        <CategoryTabs categories={COURSESDATA} />
        <CourseGrid categories={COURSESDATA} currentTab={currentTab} />
      </Tabs>

      <style jsx global>{`
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default BroadSelection;

// types/courses.ts
export interface Course {
  title: string;
  description: string;
  image: string;
  subtopic: string;
}

export interface CategoryData {
  category: string;
  courses: Course[];
}
