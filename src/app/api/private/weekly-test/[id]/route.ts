import dbConnect from '@/backend/config/dbConnect';
import { AptitudeSchema } from '@/backend/schema/aptitude.schema'; // Needed for PUT
import { AptitudeService } from '@/backend/services/aptitude.service';
import { sendResponse } from '@/utils/response';
import { NextRequest, NextResponse } from 'next/server';

/**
 * GET endpoint to fetch a specific aptitude by ID
 * ANSWERE IS not passed in respone used for user
 */
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await dbConnect();

    const aptitude = await AptitudeService.getAptitudeById(params.id);

    return sendResponse('Aptitude fetched successfully', true, aptitude, 200);
  } catch (error: any) {
    console.error('Error in GET aptitude:', error);

    // Handle specific error cases
    if (error.message.includes('Invalid aptitude ID format')) {
      return sendResponse('Invalid aptitude ID format', false, null, 400);
    }

    if (error.message.includes('not found')) {
      return sendResponse('Aptitude not found', false, null, 404);
    }

    return sendResponse(
      error.message || 'Error fetching aptitude',
      false,
      null,
      500
    );
  }
}

/**
 * PUT endpoint to update an existing aptitude by ID
 */
export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await dbConnect();
    const body = await req.json();

    // Validate request body
    const validation = AptitudeSchema.partial().safeParse(body);
    if (!validation.success) {
      return sendResponse(
        'Validation error',
        false,
        validation.error.format(),
        400
      );
    }

    const result = await AptitudeService.updateAptitude(
      params.id,
      validation.data
    );
    return sendResponse('Aptitude updated successfully', true, result, 200);
  } catch (error: any) {
    console.error('Error in PUT aptitude:', error);

    // Handle specific error cases
    if (error.message.includes('Invalid aptitude ID format')) {
      return sendResponse('Invalid aptitude ID format', false, null, 400);
    }

    if (error.message.includes('not found')) {
      return sendResponse('Aptitude not found', false, null, 404);
    }

    return sendResponse(
      error.message || 'Error updating aptitude',
      false,
      null,
      500
    );
  }
}

/**
 * DELETE endpoint to remove an aptitude by ID
 */
export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await dbConnect();

    const result = await AptitudeService.deleteAptitude(params.id);
    return sendResponse('Aptitude deleted successfully', true, result, 200);
  } catch (error: any) {
    console.error('Error in DELETE aptitude:', error);

    // Handle specific error cases
    if (error.message.includes('Invalid aptitude ID format')) {
      return sendResponse('Invalid aptitude ID format', false, null, 400);
    }

    if (error.message.includes('not found')) {
      return sendResponse('Aptitude not found', false, null, 404);
    }

    return sendResponse(
      error.message || 'Error deleting aptitude',
      false,
      null,
      500
    );
  }
}
