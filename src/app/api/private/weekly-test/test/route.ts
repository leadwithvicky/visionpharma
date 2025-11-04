import dbConnect from '@/backend/config/dbConnect';
import { AptitudeService } from '@/backend/services/aptitude.service';
import { sendResponse } from '@/utils/response';
import { NextRequest } from 'next/server';

// Mark this route as dynamic to resolve the static generation error
export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  try {
    // Ensure DB connection
    await dbConnect();

    // Extract and log search parameters
    const searchParams = req.nextUrl.searchParams;
    const rawParams = Object.fromEntries(searchParams.entries());
    console.log('API Search Parameters:', rawParams);

    // Safely build queryParams object
    const queryParams: {
      title?: string;
      programId?: string;
      limit?: string;
    } = {};

    if (searchParams.has('title')) {
      const title = searchParams.get('title')?.trim();
      if (title) queryParams.title = title;
    }

    if (searchParams.has('programId')) {
      const programId = searchParams.get('programId')?.trim();
      if (programId) queryParams.programId = programId;
    }

    if (searchParams.has('limit')) {
      const limit = searchParams.get('limit');
      if (limit) queryParams.limit = limit;
    }

    console.log('Processed query parameters:', queryParams);

    const result = await AptitudeService.getAptitudeTests(queryParams);
    console.log(
      `API returning ${result.data.length} documents out of ${result.total} total`
    );

    return sendResponse(
      'Aptitude tests fetched successfully',
      true,
      result,
      200
    );
  } catch (error: any) {
    console.error('API error details:', error);
    return sendResponse(
      error.message || 'Failed to fetch aptitude tests',
      false,
      null,
      500
    );
  }
}
