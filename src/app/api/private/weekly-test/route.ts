import dbConnect from '@/backend/config/dbConnect';
import { AptitudeSchema } from '@/backend/schema/aptitude.schema';
import { AptitudeService } from '@/backend/services/aptitude.service';
import { sendResponse } from '@/utils/response';
import { NextRequest, NextResponse } from 'next/server';

/**
 * GET endpoint to fetch a specific aptitude by ID
 */

export async function GET(req: NextRequest) {
  try {
    await dbConnect();

    const { searchParams } = new URL(req.url);
    const query = {
      searchTitle: searchParams.get('searchTitle') || undefined,
      searchProgram: searchParams.get('searchProgram') || undefined,
      page: searchParams.get('page') || '1',
      limit: searchParams.get('limit') || '10',
      sortBy: searchParams.get('sortBy') || 'createdAt',
      sortOrder: searchParams.get('sortOrder') || 'desc',
    };

    const result = await AptitudeService.getAllAptitudes(query);

    return sendResponse('Aptitudes fetched successfully', true, result, 200);
  } catch (error: any) {
    console.error('Error in GET aptitudes:', error);
    return sendResponse(
      error.message || 'Error fetching aptitudes',
      false,
      null,
      500
    );
  }
}

/**
 * POST endpoint to create a new aptitude
 */
export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    const body = await req.json();

    // Validate request body
    const validation = AptitudeSchema.safeParse(body);
    if (!validation.success) {
      return sendResponse(
        'Validation error',
        false,
        validation.error.format(),
        400
      );
    }

    const result = await AptitudeService.createAptitude(validation.data);
    return sendResponse('Aptitude created successfully', true, result, 201);
  } catch (error: any) {
    console.error('Error in POST aptitude:', error);
    return sendResponse(
      error.message || 'Error creating aptitude',
      false,
      null,
      500
    );
  }
}
