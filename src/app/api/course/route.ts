import { courseAPIData } from '@/utils/constants/courseTopic';
import { NextResponse } from 'next/server';

//This apis is used for getting course details from the courseAPIData (CONSTANT DATA)
// NOT FROM DATABASE
export async function GET(req: any, res: any) {
  const searchParams = req.nextUrl.searchParams;

  const branch = searchParams.get('branch');
  const program = searchParams.get('program');

  if (!program) {
    return NextResponse.json({
      success: false,
      data: {
        message: 'Program and branch are required',
      },
    });
  }

  // Filter courses based on program and branch
  const filteredCourses = courseAPIData.filter(
    (course) =>
      (!program || course.program.toLowerCase() === program.toLowerCase()) &&
      (!branch || course.branch.toLowerCase() === branch.toLowerCase())
  );

  return NextResponse.json({
    success: true,
    data: {
      program: program,
      branch: branch,
      data: filteredCourses,
    },
  });
}
