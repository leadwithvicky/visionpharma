import { NextResponse } from 'next/server';
import { updateEnrollmentZodSchema } from '@/backend/schema/program-enrollment';
import { sendResponse } from '@/utils/response';
import dbConnect from '@/backend/config/dbConnect';
import { ProgramEnrollmentService } from '@/backend/services/program-enrollment.service';
import mongoose, { Schema } from 'mongoose';

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await dbConnect();
    const body = await request.json();
    const validation = updateEnrollmentZodSchema.safeParse(body);

    if (!validation.success) {
      return sendResponse(
        'Validation error',
        false,
        validation.error.format(),
        400
      );
    }

    // Create a mongoose ObjectId first
    const mongooseObjectId = new mongoose.Types.ObjectId(params.id);

    // Then convert the string representation to a Schema.Types.ObjectId
    // This is a workaround since Schema.Types.ObjectId can't be directly constructed with a string
    const enrollment = await ProgramEnrollmentService.updateEnrolledProgram(
      mongooseObjectId as unknown as Schema.Types.ObjectId,
      body
    );

    return sendResponse(
      'Enrollment updated successfully',
      true,
      enrollment,
      200
    );
  } catch (error: any) {
    console.error('Error updating enrollment:', error);
    return sendResponse(error.message, false, null, 500);
  }
}
