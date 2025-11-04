import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/backend/config/dbConnect';
import { ProgramService } from '@/backend/services/programs.service';
import { updateProgramZodSchema } from '@/backend/schema/programs.schema';
import { sendResponse } from '@/utils/response';
import mongoose from 'mongoose';

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  await dbConnect();
  const { id } = params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return sendResponse('Invalid program ID', false, null, 400);
  }

  try {
    // --- Read raw body text first ---
    const data = await req.json();

    console.log('Received Raw Body:', data); // Log it

    // Convert batchYear to number if present as string
    if (data.batchYear && typeof data.batchYear === 'string') {
      data.batchYear = parseInt(data.batchYear, 10);
      if (isNaN(data.batchYear)) {
        throw new Error('Invalid batchYear format.');
      }
    } else if (typeof data.batchYear !== 'number' && data.batchYear != null) {
      throw new Error('Invalid batchYear format.');
    }

    // Validate the data (ensure schema expects image as optional string/URL)
    const validationResult = updateProgramZodSchema.safeParse(data);
    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid request data',
          error: validationResult.error.errors,
        },
        { status: 400 }
      );
    }
    // Update the program using the validated data (containing image URL if provided)
    const updatedProgram = await ProgramService.updateProgram(id, data); // Pass validated data

    return sendResponse(
      'Program updated successfully',
      true,
      updatedProgram,
      200
    );
  } catch (error: any) {
    console.error('Error updating program:', error);
    if (error.message === 'Program not found or failed to update') {
      return sendResponse('Program not found', false, null, 404);
    }
    const message = error.message || 'Failed to update program';
    return sendResponse(message, false, null, 500);
  }
}
