'use client';
import JobDescription from '@/components/careers/components/job-description';
import { careersPosition } from '@/utils/constants/careers';
import { useParams } from 'next/navigation';
import React from 'react';

const CareersPage = () => {
  const param = useParams();
  const slug = param.slug as string;
  const data = careersPosition.filter((e) => e.slug === slug)[0];

  return (
    <>
      <JobDescription
        title={data.title}
        location={data.location}
        experience={data.experience}
        aboutRole={data.aboutRole}
        whatYouDo={data.whatYouDo}
        whatWeNeed={data.whatWeNeed}
        qualification={data.qualifiction}
      />
    </>
  );
};

export default CareersPage;
