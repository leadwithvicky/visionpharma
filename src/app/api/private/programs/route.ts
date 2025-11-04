import dbConnect from '@/backend/config/dbConnect';
import { createProgramZodSchema } from '@/backend/schema/programs.schema';
import { ProgramService } from '@/backend/services/programs.service';
import { sendResponse } from '@/utils/response';
import mongoose from 'mongoose';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    await dbConnect();

    // Extract all potential query parameters including sort
    const {
      search,
      page = '1',
      limit = '10',
      batchMonth,
      batchYear,
      sortBy,
      sortOrder,
    } = Object.fromEntries(req.nextUrl.searchParams);

    // Call the service with all parameters
    const result = await ProgramService.getPrograms({
      search,
      page,
      limit,
      batchMonth,
      batchYear,
      sortBy,
      sortOrder:
        sortOrder === 'asc' || sortOrder === 'desc' ? sortOrder : undefined,
    });

    // Destructure the paginated result from the service
    const { total, page: pageNumber, limit: pageSize, courses } = result;

    // Format the response data
    const responseData = {
      data: courses,
      total,
      page: pageNumber,
      limit: pageSize,
    };

    return sendResponse(
      'Courses fetched successfully',
      true,
      responseData,
      200
    );
  } catch (error: any) {
    console.error('Error fetching courses:', error);
    return sendResponse(error.message, false, null, 500);
  }
}

export async function POST(req: NextRequest) {
  await dbConnect();

  const session = await mongoose.startSession();
  try {
    session.startTransaction();

    // --- Expect JSON data ---
    const data = await req.json();

    // --- REMOVED FormData parsing and S3 upload logic ---
    // Assuming data.image already contains the S3 URL from frontend upload

    // Convert batchYear to number if present as string
    if (data.batchYear && typeof data.batchYear === 'string') {
      data.batchYear = parseInt(data.batchYear, 10);
      if (isNaN(data.batchYear)) {
        // Handle error if batchYear is not a valid number string
        throw new Error('Invalid batchYear format.');
      }
    } else if (typeof data.batchYear !== 'number' && data.batchYear != null) {
      // Handle cases where it might be something else unexpected
      throw new Error('Invalid batchYear format.');
    }

    // Validate the data (ensure schema expects image as string/URL)
    const validationResult = createProgramZodSchema.safeParse(data);
    if (!validationResult.success) {
      // Rollback transaction before returning error
      await session.abortTransaction();
      session.endSession();
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid request data', // Changed message
          error: validationResult.error.errors,
        },
        { status: 400 }
      );
    }

    // Create the program with the validated data (containing image URL)
    const course = await ProgramService.createProgram({
      data,
      session,
    });

    await session.commitTransaction();
    session.endSession();

    return sendResponse('Program created successfully', true, course, 201);
  } catch (error: any) {
    await session.abortTransaction();
    session.endSession();
    console.error('Error creating program:', error);
    const message = error.message || 'Failed to create program';
    return sendResponse(message, false, null, 500);
  }
}
