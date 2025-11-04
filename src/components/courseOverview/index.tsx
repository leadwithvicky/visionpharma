'use client';
import React, { useEffect, useRef } from 'react';
import { Tag } from 'lucide-react';
import { usePathname } from 'next/navigation';
import DynamicTabs from './DynamicTab';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import CourseCurriculum from '../courseCurriculum';
import PricingPlans from '../pricingPlan';
import { Loader } from '../loader/loader';
import StudentForm from '../home/about/StudentForm';
import Image from 'next/image';
import NotFound from '../404';
import Certification from '../certificate';
import GoogleAnalyticsTemplate from '../Google.Analytics.Template';
import { COURSE_ROUTES } from '@/routes-endpoint';
import apiClient from '@/services/apiClient';

const CourseOverview = () => {
  const path = usePathname();
  const slug = path?.split('/')[1];
  const router = useRouter();
  const [course, setCourse] = React.useState<any>(null);
  const [loading, setLoading] = React.useState(false);

  const firstNameRef = useRef<HTMLInputElement>(null);

  const handleFirstNameFocus = () => {
    firstNameRef.current?.focus();
  };

  const tabs = [
    // {
    //   value: 'overview',
    //   label: 'Overview',
    //   component: <Overview />,
    // },
    {
      value: 'curriculum',
      label: 'Curriculum',
      component: <CourseCurriculum slug={slug} />,
    },
    {
      value: 'Certificates',
      label: 'Certificates',
      component: <Certification />,
    },
    // {
    //   value: 'instructor',
    //   label: 'Instructor',
    //   component: <InstructorProfile />,
    // },
    {
      value: 'Plan',
      label: 'Pricing Plans',
      component: <PricingPlans handleFirstNameFocus={handleFirstNameFocus} />,
    },
  ];

  // const RightSideDetailData = {
  //   price: 150.0,
  //   originalPrice: 200.0,
  //   instructor: {
  //     name: 'Ajeet Bharti',
  //     email: 'ajeetbhartig@gmail.com',
  //     phone: '+1834 123 456 789',
  //   },
  //   duration: '10 Weeks',
  //   lessons: 14,
  //   students: 1,
  //   languages: ['English', 'German'],
  //   hasCertification: false,
  // };

  useEffect(() => {
    async function getCourseDeatils() {
      setLoading(true);
      try {
        const { data } = await apiClient.get(`${COURSE_ROUTES.base}/` + slug);
        setCourse(data.data.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    getCourseDeatils();
  }, [slug]);

  if (!loading && !course) {
    return <NotFound />;
  }

  if (loading && !course) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader />
      </div>
    );
  }

  return (
    <GoogleAnalyticsTemplate>
      <div className="max-w-screen-xl mx-auto p-6 mt-8 flex flex-col xl:flex-row justify-between  gap-4 ">
        <div className="flex-grow">
          {/* Breadcrumb */}
          <div className="flex md:flex-row flex-col justify-between  w-full mb-4 gap-2">
            <div className="md:w-[40%] w-full">
              <nav className="flex items-center space-x-2 text-sm mb-6 text-gray-600">
                <span
                  className="cursor-pointer hover:text-purple-600 transition-colors"
                  onClick={() => router.push('/')}
                >
                  Home
                </span>
                <span>›</span>
                <span
                  className="cursor-pointer hover:text-purple-600 transition-colors"
                  onClick={() =>
                    router.push(`/program?programName=${course?.program}`)
                  }
                >
                  Programs
                </span>
                <span>›</span>
                <span
                  className="cursor-pointer hover:text-purple-600 transition-colors"
                  onClick={() =>
                    router.push(
                      `/program?programName=${course?.program}&branch=${course?.branch}`
                    )
                  }
                >
                  {course?.program ?? ''}
                </span>
                <span>›</span>
                <span className="text-purple-600 truncate">
                  {course?.title ?? ''}
                </span>
              </nav>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl font-bold mb-6 max-w-4xl">
                {course.title}
              </h1>

              {/* Author and Tags */}
              <div className="flex  flex-col gap-3">
                <div className="flex items-center space-x-2">
                  <Tag className="w-5 h-5 text-gray-600" />
                  <span className="text-sm font-semibold">Learning</span>
                  <span className="text-sm">•</span>
                  <span className="text-sm font-semibold">
                    {course?.program ?? ''}
                  </span>
                </div>
                <span className="text-gray-900">
                  {course?.description ?? ''}
                </span>
              </div>
            </div>
            <div className="flex gap-4 py-2 pr-2 md:w-[60%] w-full">
              {/* <RightSideDetail img={course.image} /> */}
              <div className="relative sm:block hidden w-[300px] aspect-square">
                <Image
                  src={course.image}
                  alt="Course preview"
                  className="absolute w-full h-full object-cover rounded-xl"
                  fill
                />
              </div>
              <div className="flex-grow">
                <StudentForm firstNameRef={firstNameRef} />
              </div>
            </div>
          </div>
          {/* Dynamic Tabs */}
          <DynamicTabs tabs={tabs} />
        </div>
      </div>
    </GoogleAnalyticsTemplate>
  );
};

export default CourseOverview;