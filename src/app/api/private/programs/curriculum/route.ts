import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/backend/config/dbConnect';
import mongoose from 'mongoose';
import { CurriculumService } from '@/backend/services/curriculum.service';

/**
 * GET handler to fetch all curriculums
 */
export async function GET(request: NextRequest) {
  try {
    await dbConnect();
    // Check if we need to filter by programId
    const url = new URL(request.url);
    const programId = url.searchParams.get('programId');

    if (programId) {
      // Validate programId format
      if (!mongoose.Types.ObjectId.isValid(programId)) {
        return NextResponse.json(
          {
            success: false,
            message: 'Invalid program ID format',
          },
          { status: 400 }
        );
      }

      // Get curriculum for specific program
      const curriculum =
        await CurriculumService.getCurriculumByProgramId(programId);
      if (!curriculum) {
        return NextResponse.json(
          {
            success: false,
            message: 'Curriculum not found for this program',
          },
          { status: 404 }
        );
      }

      return NextResponse.json({
        success: true,
        data: curriculum,
      });
    }

    // Get all curriculums if no programId filter
    const curriculums = await CurriculumService.getAllCurriculums();

    return NextResponse.json({
      success: true,
      data: curriculums,
    });
  } catch (error) {
    console.error('Error fetching curriculums:', error);

    return NextResponse.json(
      {
        success: false,
        message: 'Failed to fetch curriculums',
        error: (error as Error).message,
      },
      { status: 500 }
    );
  }
}

/**
 * POST handler to create or update a curriculum
 */
export async function POST(request: NextRequest) {
  try {
    await dbConnect();

    // Parse the JSON request body
    const data = await request.json();

    // Validate required fields - programId is essential
    if (!data.programId) {
      return NextResponse.json(
        {
          success: false,
          message: 'Program ID is required',
        },
        { status: 400 }
      );
    }

    // Validate programId format
    if (!mongoose.Types.ObjectId.isValid(data.programId)) {
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid program ID format',
        },
        { status: 400 }
      );
    }
    const curriculum = await CurriculumService.createOrUpdateCurriculum(data);

    return NextResponse.json({
      success: true,
      message: 'Curriculum saved successfully',
      data: curriculum,
    });
  } catch (error) {
    console.error('Error saving curriculum:', error);

    const errorMessage =
      (error as Error).message || 'Failed to save curriculum';
    const statusCode = errorMessage.includes('not found') ? 404 : 500; // Basic error handling

    return NextResponse.json(
      {
        success: false,
        message: errorMessage,
        error: errorMessage, // Keep error field for potential frontend use
      },
      { status: statusCode }
    );
  }
}
