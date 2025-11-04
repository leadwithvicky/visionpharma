import dbConnect from '@/backend/config/dbConnect';
import {
  aptitudeSubmissionZodSchema,
  getAllSubmissionsZodSchema,
} from '@/backend/schema/weekly-test-submission';
import { WeeklyTestSubmissionService } from '@/backend/services/weekly-test-submission.service';

import { sendResponse } from '@/utils/response';
import mongoose from 'mongoose';

export async function POST(request: Request) {
  try {
    await dbConnect();
    const body = await request.json();
    const result = aptitudeSubmissionZodSchema.safeParse(body);

    if (!result.success) {
      return sendResponse(
        'Validation error',
        false,
        result.error.format(),
        400
      );
    }

    const submissionData = {
      ...result.data,
      aptitudeId: new mongoose.Types.ObjectId(result.data.aptitudeId),
      userId: new mongoose.Types.ObjectId(result.data.userId),
      answers: result.data.answers.map((answer) => ({
        ...answer,
        questionId: new mongoose.Types.ObjectId(answer.questionId),
      })),
      totalQuestions: result.data.totalQuestions,
      correctAnswers: result.data.correctAnswers,
      score: result.data.score,
    };

    const submission =
      await WeeklyTestSubmissionService.createSubmission(submissionData);

    return sendResponse(
      'Submission created successfully',
      true,
      submission,
      201
    );
  } catch (error: any) {
    console.error('Error creating submission:', error);
    if (error instanceof mongoose.Error.CastError) {
      return sendResponse('Invalid ID format provided', false, null, 400);
    }
    return sendResponse(
      error.message || 'Failed to create submission',
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
    const validation = getAllSubmissionsZodSchema.safeParse({ query });

    if (!validation.success) {
      return sendResponse(
        'Validation error',
        false,
        validation.error.format(),
        400
      );
    }

    const response = await WeeklyTestSubmissionService.getAllSubmissions(
      validation.data.query
    );

    return sendResponse(
      'Submissions fetched successfully',
      true,
      response,
      200
    );
  } catch (error: any) {
    console.error('Error fetching submissions:', error);
    return sendResponse(
      error.message || 'Failed to fetch submissions',
      false,
      null,
      500
    );
  }
}
