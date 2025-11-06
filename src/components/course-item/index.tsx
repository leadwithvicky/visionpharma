'use client';
import { useSearchParams, useRouter } from 'next/navigation';
import CourseTitle from './courseTitle';
import TopicNavigation from './TopicNavigation';
import { COURSE_BRANCH_NAVIGATION } from '@/utils/constants/courseTopicNavigation';
import { CourseCardWithHover } from './CourseCardHover';
import { useEffect, useState } from 'react';
import axios from 'axios';
import GoogleAnalyticsTemplate from '../Google.Analytics.Template';
import { COURSE_ROUTES } from '@/routes-endpoint';
import apiClient from '@/services/apiClient';

// types.ts

export default function CourseItem() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const programName = searchParams?.get('programName');
  const [filteredCourses, setFilteredCourses] = useState([]);

  // Convert programName to lowercase for case-insensitive matching
  const normalizedprogramName = programName?.toLowerCase();
  const courseCategory = normalizedprogramName
    ? COURSE_BRANCH_NAVIGATION[normalizedprogramName]
    : null;

  // Get selected topic from URL or default to first topic if available
  const selectedBranch =
    searchParams?.get('branch') ||
    courseCategory?.branch[0].replaceAll('-', ' ') ||
    null;

  const handleTopicChange = (branch: string) => {
    router.push(
      `/program?programName=${programName}&branch=${encodeURIComponent(
        branch.replaceAll('-', ' ')
      )}`
    );
  };

  useEffect(() => {
    async function getCourse() {
      if (courseCategory) {
        const { data } = await apiClient.get(
          `${COURSE_ROUTES.base}?program=${courseCategory.program}&branch=${
            selectedBranch === 'Information Technology'
              ? 'Computer Science Engineering'
              : (selectedBranch ?? '')
          }`
        );

        setFilteredCourses(data.data.data);
      }
    }

    getCourse();
    // if (courseCategory) {
    //   setFilteredCourses(courseCategory.courses);
    // }
  }, [selectedBranch, programName, courseCategory]);

  // console.log(filteredCourses, selectedBranch);

  if (!courseCategory) {
    return <div className="container mx-auto px-4 py-8">Course not found</div>;
  }

  return (
    <GoogleAnalyticsTemplate>
      <div className="container mx-auto p-4">
        <CourseTitle programName={courseCategory.name} />
        {/* Topic Navigation */}
        <TopicNavigation
          branch={courseCategory.branch}
          selectedBranch={selectedBranch?.split(' ').join('-') ?? ''}
          onTopicChange={handleTopicChange}
        />

        {/* Course Grid */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredCourses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            onExplore={handleRouteToOverview}
          />
        ))}
      </div> */}

        <CourseCardWithHover courses={filteredCourses} />
      </div>
    </GoogleAnalyticsTemplate>
  );
}
