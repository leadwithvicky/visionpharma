import dbConnect from '@/backend/config/dbConnect';
import { ProgramEnrollment, Programs, User } from '@/backend/models';
import {
  getAllEnrollmentsZodSchema,
  programEnrollmentZodSchema,
} from '@/backend/schema/program-enrollment';
import { ProgramEnrollmentService } from '@/backend/services/program-enrollment.service';
import { sendResponse } from '@/utils/response';
import mongoose from 'mongoose';

export async function POST(request: Request) {
  try {
    await dbConnect();
    const body = await request.json();
    const result = programEnrollmentZodSchema.safeParse(body);

    if (!result.success) {
      return sendResponse(
        'Validation error',
        false,
        result.error.format(),
        400
      );
    }

    const enrollmentData = {
      ...result.data,
      programId: new mongoose.Types.ObjectId(result.data.programId),
      userId: new mongoose.Types.ObjectId(result.data.userId),
      status: result.data.status as 0 | 1 | 2,
    };

    const enrollment =
      await ProgramEnrollmentService.enrollProgram(enrollmentData);

    return sendResponse(
      'Enrollment created successfully',
      true,
      enrollment,
      201
    );
  } catch (error: any) {
    console.error('Error creating enrollment:', error);
    if (error instanceof mongoose.Error.CastError) {
      return sendResponse('Invalid ID format provided', false, null, 400);
    }
    return sendResponse(
      error.message || 'Failed to create enrollment',
      false,
      null,
      500
    );
  }
}

export async function GET(request: Request) {
  try {
    await dbConnect();

    const { searchParams } = new URL(request.url);
    const query = Object.fromEntries(searchParams.entries());
    const validation = getAllEnrollmentsZodSchema.safeParse({ query });

    if (!validation.success) {
      return sendResponse(
        'Validation error',
        false,
        validation.error.format(),
        400
      );
    }

    const response = await ProgramEnrollmentService.getAllEnrollments(
      validation.data.query
    );

    return sendResponse(
      'Enrollments fetched successfully',
      true,
      response,
      200
    );
  } catch (error: any) {
    console.error('Error fetching enrollments:', error);
    return sendResponse(
      error.message || 'Failed to fetch enrollments',
      false,
      null,
      500
    );
  }
}

// Optional: Add PUT/PATCH handler for updates if needed
// export async function PATCH(request: Request, { params }: { params: { id: string } }) {
//   try {
//     await dbConnect();
//     const body = await request.json();
//     const { id } = params; // Assuming ID comes from the route segment

//     // Validate the ID separately if needed, or ensure it's a valid ObjectId format
//     if (!mongoose.Types.ObjectId.isValid(id)) {
//       return sendResponse('Invalid enrollment ID', false, null, 400);
//     }

//     const result = updateEnrollmentZodSchema.safeParse(body);

//     if (!result.success) {
//       return sendResponse('Validation error', false, result.error.format(), 400);
//     }

//     const updatedEnrollment = await ProgramEnrollmentService.updateEnrolledProgram(
//       new mongoose.Types.ObjectId(id),
//       result.data
//     );

//     return sendResponse('Enrollment updated successfully', true, updatedEnrollment, 200);
//   } catch (error: any) {
//     console.error('Error updating enrollment:', error);
//     if (error.message === 'Enrollment not found') {
//        return sendResponse(error.message, false, null, 404);
//     }
//     return sendResponse(error.message || 'Failed to update enrollment', false, null, 500);
//   }
// }
