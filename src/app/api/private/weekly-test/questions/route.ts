import dbConnect from '@/backend/config/dbConnect';
import { QuestionSchema } from '@/backend/schema/aptitude.schema';
import { AptitudeService } from '@/backend/services/aptitude.service';
import { sendResponse } from '@/utils/response';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    const body = await req.json();

    const validation = QuestionSchema.safeParse(body);
    if (!validation.success) {
      return sendResponse(
        'Validation error',
        false,
        validation.error.format(),
        400
      );
    }

    const result = await AptitudeService.createAptitudeQuestion(body);

    return sendResponse(
      'Aptitude question created successfully',
      true,
      result,
      201
    );
  } catch (error: any) {
    console.log(error);
    return sendResponse(
      error.message || 'Error creating aptitude question',
      false,
      null,
      500
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    await dbConnect();
    const url = new URL(req.url);
    const id = url.searchParams.get('id');

    if (id) {
      // Get a specific question by ID
      const question = await AptitudeService.getAptitudeQuestionById(id);
      if (!question) {
        return sendResponse('Question not found', false, null, 404);
      }
      return sendResponse(
        'Question retrieved successfully',
        true,
        question,
        200
      );
    } else {
      // Get all questions
      const questions = await AptitudeService.getAllAptitudeQuestions();
      return sendResponse(
        'Questions retrieved successfully',
        true,
        questions,
        200
      );
    }
  } catch (error: any) {
    console.log(error);
    return sendResponse(
      error.message || 'Error retrieving aptitude question(s)',
      false,
      null,
      500
    );
  }
}
