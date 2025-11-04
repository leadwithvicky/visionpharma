import dbConnect from '@/backend/config/dbConnect';
import { AptitudeService } from '@/backend/services/aptitude.service';
import { sendResponse } from '@/utils/response';
import { NextRequest } from 'next/server';

/**
 * NOT USED FOR NOW [IF NEEDED, UNCOMMENT]
 * GET endpoint to fetch questions for a specific aptitude test by aptitudeId
 */
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await dbConnect();

    // Get aptitude ID from params
    const aptitudeId = params.id;

    // Get questions for this specific aptitude test
    const questions =
      await AptitudeService.getQuestionsByAptitudeId(aptitudeId);

    return sendResponse('Questions fetched successfully', true, questions, 200);
  } catch (error: any) {
    console.error('Error fetching questions for aptitude test:', error);

    // Handle specific error cases
    if (error.message.includes('Invalid aptitude ID format')) {
      return sendResponse('Invalid aptitude ID format', false, null, 400);
    }

    if (error.message.includes('not found')) {
      return sendResponse('Aptitude test not found', false, null, 404);
    }

    return sendResponse(
      error.message || 'Error fetching questions',
      false,
      null,
      500
    );
  }
}
