import { courseAPIData } from '@/utils/constants/courseTopic';
import { NextResponse } from 'next/server';

//This apis is used for getting course details from the courseAPIData (CONSTANT DATA)
// NOT FROM DATABASE
export async function GET(
  req: any,
  { params }: { params: { slug: string } },
  res: any
) {
  const { slug } = params;

  if (!slug) {
    return NextResponse.json({
      success: false,
      data: {
        message: 'Program and branch are required',
      },
    });
  }

  // Filter courses based on program and branch
  const filteredCourses = courseAPIData.filter(
    (course) => course.slug.toLowerCase() === slug.toLowerCase()
  )[0];

  return NextResponse.json({
    success: true,
    data: {
      data: filteredCourses,
    },
  });
}
