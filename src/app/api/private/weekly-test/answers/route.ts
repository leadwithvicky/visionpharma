import dbConnect from '@/backend/config/dbConnect';
import { weeklyTestAnswerZodSchema } from '@/backend/schema/weekly-test-answer';
import { weekTestAnswerService } from '@/backend/services/weekly-test-answer.service';
import { sendResponse } from '@/utils/response';
import mongoose from 'mongoose';

export async function POST(request: Request) {
  try {
    await dbConnect();
    const body = await request.json();
    const result = weeklyTestAnswerZodSchema.safeParse(body);

    if (!result.success) {
      return sendResponse(
        'Validation error',
        false,
        result.error.format(),
        400
      );
    }

    // Validate ObjectIds before conversion
    if (
      !mongoose.Types.ObjectId.isValid(result.data.aptitudeId) ||
      !mongoose.Types.ObjectId.isValid(result.data.questionId) ||
      !mongoose.Types.ObjectId.isValid(result.data.userId)
    ) {
      return sendResponse('Invalid ID format provided', false, null, 400);
    }

    const answerData = {
      ...result.data,
      aptitudeId: new mongoose.Types.ObjectId(result.data.aptitudeId),
      questionId: new mongoose.Types.ObjectId(result.data.questionId),
      userId: new mongoose.Types.ObjectId(result.data.userId),
      isCorrect: false,
    };

    const answer = await weekTestAnswerService.saveAnswer(answerData);

    return sendResponse('Answer saved successfully', true, answer, 201);
  } catch (error: any) {
    console.error('Error saving answer:', error);
    if (error instanceof mongoose.Error.CastError) {
      return sendResponse('Invalid ID format provided', false, null, 400);
    }
    return sendResponse(
      error.message || 'Failed to save answer',
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
    const aptitudeId = searchParams.get('aptitudeId');
    const userId = searchParams.get('userId');

    if (!aptitudeId || !userId) {
      return sendResponse(
        'Program ID and User ID are required',
        false,
        null,
        400
      );
    }

    if (
      !mongoose.Types.ObjectId.isValid(aptitudeId) ||
      !mongoose.Types.ObjectId.isValid(userId)
    ) {
      return sendResponse('Invalid ID format provided', false, null, 400);
    }

    const answers = await weekTestAnswerService.getuserAnswers(
      new mongoose.Types.ObjectId(aptitudeId),
      new mongoose.Types.ObjectId(userId)
    );

    return sendResponse('Answers fetched successfully', true, answers, 200);
  } catch (error: any) {
    console.error('Error fetching answers:', error);
    return sendResponse(
      error.message || 'Failed to fetch answers',
      false,
      null,
      500
    );
  }
}
