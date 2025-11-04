import dbConnect from '@/backend/config/dbConnect';
import { getEnrolledScheduleClassesSchema } from '@/backend/schema/schedule-class.schema';
import { ScheduleClassService } from '@/backend/services/schedule-class.service';
import { sendResponse } from '@/utils/response';
import mongoose from 'mongoose'; // Import mongoose for ObjectId validation
import { NextRequest, NextResponse } from 'next/server';

// Pass params to log it, even if not expecting userId there
export async function GET(req: NextRequest, { params }: { params: any }) {
  console.log('[GET /api/.../enrolled] Request URL:', req.url);
  console.log('[GET /api/.../enrolled] Received params:', params); // Log params object

  try {
    await dbConnect();

    // 1. Get and Validate userId from query params
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get('userId'); // Get userId from searchParams
    console.log('[GET /api/.../enrolled] Extracted userId from query:', userId); // Log extracted userId

    if (!userId || !mongoose.Types.ObjectId.isValid(userId)) {
      console.error('[GET /api/.../enrolled] Invalid userId:', userId);
      return sendResponse(
        'Invalid or missing User ID in query parameters',
        false,
        null,
        400
      );
    }

    // 2. Validate Other Query Parameters (date, page, limit)
    const queryParams: Record<string, string> = {};
    searchParams.forEach((value, key) => {
      // Exclude userId from schema validation if it's handled separately
      // Or adjust the schema if userId should also be validated there
      if (key !== 'userId') {
        queryParams[key] = value;
      }
    });

    // Assuming getEnrolledScheduleClassesSchema does NOT include userId
    const parsedQuery = getEnrolledScheduleClassesSchema.safeParse(queryParams);

    if (!parsedQuery.success) {
      console.error(
        '[GET /api/.../enrolled] Zod validation failed:',
        parsedQuery.error.format()
      ); // Log Zod errors
      return sendResponse(
        'Validation error for query parameters',
        false,
        parsedQuery.error.format(),
        400
      );
    }

    // 3. Call Service Method with userId from query
    const result = await ScheduleClassService.getEnrolledScheduleClasses(
      userId, // Use userId from query
      parsedQuery.data // Pass validated query data (page, limit, date)
    );

    // 4. Send Response
    return sendResponse(
      'Enrolled classes retrieved successfully',
      true,
      result, // Contains data, totalCount, totalPages, currentPage
      200
    );
  } catch (error: any) {
    console.error('[GET /api/.../enrolled] Error caught:', error);
    // Log the stack trace for more details
    console.error(error.stack);
    return sendResponse(
      error.message || 'Error retrieving enrolled classes',
      false,
      null,
      error.message?.includes('Invalid') ? 400 : 500 // Specific status for known errors
    );
  }
}
