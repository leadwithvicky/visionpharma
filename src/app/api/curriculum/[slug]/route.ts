import { courseAPIData } from '@/utils/constants/courseCurriculum';
import { NextResponse } from 'next/server';

//This apis is used for getting course details from the courseAPIData (CONSTANT DATA)
// NOT FROM DATABASE
export async function GET(
  req: Request,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;

  if (!slug) {
    return NextResponse.json({
      success: false,
      data: {
        message: 'Course slug is required',
      },
    });
  }

  // Find the course based on the slug
  const filteredCourse = courseAPIData.find(
    (course) => course.key.toLowerCase() === slug.toLowerCase()
  );

  if (!filteredCourse) {
    return NextResponse.json({
      success: false,
      data: {
        message: 'Course not found',
      },
    });
  }

  return NextResponse.json({
    success: true,
    data: filteredCourse,
  });
}
