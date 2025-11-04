import dbConnect from '@/backend/config/dbConnect';
import {
  AptitudeQuestionUpdateSchema,
  AptitudeService,
} from '@/backend/services/aptitude.service';
import { sendResponse } from '@/utils/response';
import { NextRequest, NextResponse } from 'next/server';

/**
 * DELETE endpoint to remove an aptitude question by ID
 */
export async function DELETE(
  req: NextRequest,
  { params }: { params: { questionId: string } }
) {
  try {
    await dbConnect();

    const result = await AptitudeService.deleteAptitudeQuestion(
      params.questionId
    );
    return sendResponse('Question deleted successfully', true, result, 200);
  } catch (error: any) {
    console.error('Error in DELETE aptitude question:', error);

    if (error.message.includes('Invalid question ID format')) {
      return sendResponse('Invalid question ID format', false, null, 400);
    }

    if (error.message.includes('not found')) {
      return sendResponse('Aptitude question not found', false, null, 404);
    }

    return sendResponse(
      error.message || 'Error deleting aptitude question',
      false,
      null,
      500
    );
  }
}

// PUT handler will be added later for updating questions

/**
 * PUT endpoint to update an existing aptitude question by ID
 */
export async function PUT(
  req: NextRequest,
  { params }: { params: { questionId: string } }
) {
  try {
    await dbConnect();
    const body = await req.json();

    // Validate request body using the schema from AptitudeService
    const validation = AptitudeQuestionUpdateSchema.safeParse(body);
    if (!validation.success) {
      return sendResponse(
        'Validation error',
        false,
        validation.error.format(),
        400
      );
    }

    const updatedQuestion = await AptitudeService.updateAptitudeQuestion(
      params.questionId,
      validation.data // Use validated data
    );
    return sendResponse(
      'Question updated successfully',
      true,
      updatedQuestion,
      200
    );
  } catch (error: any) {
    console.error('Error in PUT aptitude question:', error);

    if (error.message.includes('Invalid question ID format')) {
      return sendResponse('Invalid question ID format', false, null, 400);
    }
    if (error.message.includes('not found')) {
      return sendResponse('Aptitude question not found', false, null, 404);
    }
    if (error.name === 'ZodError') {
      // Handle Zod validation errors specifically
      return sendResponse('Validation error', false, error.format(), 400);
    }

    return sendResponse(
      error.message || 'Error updating aptitude question',
      false,
      null,
      500
    );
  }
}
