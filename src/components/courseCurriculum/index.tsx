'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { BookOpen, Code, Calendar, PlayCircle } from 'lucide-react';
import { Module } from '@/types/curriculum';
import { Loader } from '../loader/loader';
import { CURRICULUM_ROUTES } from '@/routes-endpoint';
import apiClient from '@/services/apiClient';

const CourseCurriculum = ({ slug }: { slug: string }) => {
  const [course, setCourse] = useState<{
    title: string;
    description: string;
    modules: Module[];
  } | null>(null);
  const [expandedMonth, setExpandedMonth] = useState('month-0');
  const [expandedWeek, setExpandedWeek] = useState('month-0-week-0');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchCourse = async () => {
      setLoading(true);
      try {
        const response = await apiClient.get(
          `${CURRICULUM_ROUTES.base}/${slug}`
        );
        const data = await response.data;
        if (data.success) {
          setCourse(data.data);
        } else {
          console.error('Course not found');
        }
      } catch (error) {
        console.error('Error fetching course:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [slug, router]);

  if (!loading && !course) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        Not Found
      </div>
    );
  }

  if (loading && !course) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <Loader />
      </div>
    );
  }

  return (
    <div className="w-full max-w-screen-xl mx-auto">
      <div className="bg-white shadow-sm border border-t-0 border-x-0 px-2 md:px-6 py-2">
        {/* <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
        <p className="text-gray-600 mb-6 max-w-screen-md">{course.description}</p> */}

        <Accordion
          type="single"
          defaultValue="month-0"
          value={expandedMonth}
          onValueChange={setExpandedMonth}
          className="w-full"
          collapsible
        >
          {course?.modules[0].months.map((month, monthIndex) => (
            <AccordionItem
              key={monthIndex}
              value={`month-${monthIndex}`}
              className="border-b last:border-b-0"
            >
              <AccordionTrigger className="hover:bg-gray-50 transition-colors px-4">
                <div className="flex items-start gap-3 w-full">
                  <div className="bg-blue-50 rounded-lg p-2 mt-1">
                    <Calendar size={20} className="text-blue-600" />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="font-semibold  text-lg">{month.title}</div>
                    <div className="text-sm text-gray-500 mt-1 font-medium">
                      {month.weeks.length} weeks
                    </div>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="bg-gray-50 border-t">
                <Accordion
                  type="single"
                  value={expandedWeek}
                  onValueChange={setExpandedWeek}
                  className="w-full"
                  collapsible
                >
                  {month.weeks.map((week, weekIndex) => (
                    <AccordionItem
                      key={weekIndex}
                      value={`month-${monthIndex}-week-${weekIndex}`}
                      className="border-b last:border-b-0"
                    >
                      <AccordionTrigger className="hover:bg-gray-100 transition-colors px-4">
                        <div className="flex items-start gap-3 w-full">
                          <div className="bg-blue-50 rounded-lg p-2 mt-1">
                            <BookOpen size={20} className="text-blue-600" />
                          </div>
                          <div className="flex-1 text-left">
                            <div className="font-semibold text-base">
                              Week {weekIndex + 1}: {week.title}
                            </div>
                            <div className="text-sm text-gray-500 mt-1">
                              {week.topics.length} topics •{' '}
                              {week.handson?.length || 0} hands-on activities
                            </div>
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="bg-white border-t">
                        <div className="p-4 space-y-4">
                          {/* Topics Section */}
                          <div className="space-y-3">
                            <h4 className="font-medium text-sm text-gray-600 uppercase tracking-wide">
                              Topics
                            </h4>
                            {week.topics.map((topic, topicIndex) => (
                              <div
                                key={topicIndex}
                                className="flex items-start gap-3 bg-gray-50 p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                              >
                                {/* <PlayCircle size={20} className="text-blue-600 mt-0.5" /> */}
                                <div className="flex-1">
                                  <span className="text-sm">{topic}</span>
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* Hands-on Section */}
                          {week.handson && week.handson.length > 0 && (
                            <div className="space-y-3">
                              <h4 className="font-medium text-sm text-gray-600 uppercase tracking-wide">
                                Hands-on Activities
                              </h4>
                              {week.handson.map((activity, index) => (
                                <div
                                  key={index}
                                  className="flex items-start gap-3 bg-gray-50 p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                                >
                                  <Code
                                    size={20}
                                    className="text-green-600 mt-0.5"
                                  />
                                  <div className="flex-1">
                                    <span className="text-sm">{activity}</span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default CourseCurriculum;
