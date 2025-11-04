'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { IoChevronBack } from 'react-icons/io5';
import Link from 'next/link';

const CourseTitle = ({ programName }: { programName: string }) => {
  const router = useRouter();

  // Mapping object to handle course name transformations
  const programNameMap: { [key: string]: string } = {
    btech: 'B.Tech',
    pharmacy: 'Pharmacy',
    mba: 'MBA',
    mca: 'MCA',
    agriculture: 'Agriculture',
    degree: 'Degree',
  };

  const handleBackNavigation = (path: string, elementId?: string) => {
    router.push(path);
    if (elementId) {
      setTimeout(() => {
        const element = document.getElementById(elementId);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  // Use the mapping to determine the display name, or fall back to the original
  const displayProgramName =
    programNameMap[programName.toLowerCase()] || programName;

  return (
    <div>
      <Link
        href="/"
        className="flex justify-between items-center w-fit gap-1 text-primary pb-2 group cursor-pointer"
      >
        <IoChevronBack className="group-hover:-translate-x-[2px] transition-transform" />
        Back
      </Link>
      <div className="relative bg-gradient-to-br from-pink-100 to-purple-100 py-16">
        <div className="absolute inset-0">
          <div className="absolute left-4 top-4">
            <div className="bg-purple-500/20 w-16 h-16 transform rotate-45"></div>
          </div>
          <div className="absolute right-4 top-4">
            <div className="bg-purple-500/20 w-12 h-12 transform -rotate-12"></div>
          </div>
        </div>
        <div className="container mx-auto px-4 relative">
          <h1 className="text-4xl font-bold text-center mb-4">
            {displayProgramName}
          </h1>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
            <span
              className="cursor-pointer hover:text-purple-600 transition-colors"
              onClick={() => handleBackNavigation('/')}
            >
              VisionTech
            </span>
            <span>›</span>
            <span
              className="cursor-pointer hover:text-purple-600 transition-colors"
              onClick={() => handleBackNavigation('/', 'topCategory')}
            >
              Programs
            </span>
            <span>›</span>
            <span className="text-purple-600">{displayProgramName}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseTitle;
