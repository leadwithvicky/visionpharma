import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/backend/config/dbConnect';
import mongoose from 'mongoose';
import { CurriculumService } from '@/backend/services/curriculum.service';

/**
 * GET handler to fetch a curriculum by slug OR programId
 * The slug parameter could be either a slug string or a program ID
 */
export async function GET(
  _request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    await dbConnect();
    const { slug } = params;

    if (!slug) {
      return NextResponse.json(
        {
          success: false,
          message: 'Curriculum identifier is required',
        },
        { status: 400 }
      );
    }

    let curriculum;

    // Check if the parameter is a valid MongoDB ObjectId (programId)
    if (mongoose.Types.ObjectId.isValid(slug)) {
      // Treat it as a programId
      curriculum = await CurriculumService.getCurriculumByProgramId(slug);
    } else {
      // Treat it as a slug
      curriculum = await CurriculumService.getCurriculumBySlug(slug);
    }

    if (!curriculum) {
      return NextResponse.json(
        {
          success: false,
          message: 'Curriculum not found',
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: curriculum,
    });
  } catch (error) {
    console.error(
      `Error fetching curriculum with identifier ${params.slug}:`,
      error
    );

    return NextResponse.json(
      {
        success: false,
        message: 'Failed to fetch curriculum',
        error: (error as Error).message,
      },
      { status: 500 }
    );
  }
}

/**
 * DELETE handler to delete a curriculum by slug OR programId
 * The slug parameter could be either a slug string or a program ID
 */
// export async function DELETE(
//   _request: NextRequest,
//   { params }: { params: { slug: string } }
// ) {
//   try {
//     await dbConnect();
//     const { slug } = params;

//     if (!slug) {
//       return NextResponse.json(
//         {
//           success: false,
//           message: 'Curriculum identifier is required',
//         },
//         { status: 400 }
//       );
//     }

//     let curriculum;

//     // Check if the parameter is a valid MongoDB ObjectId (programId)
//     if (mongoose.Types.ObjectId.isValid(slug)) {
//       // Treat it as a programId
//       curriculum = await CurriculumService.deleteCurriculumByProgramId(slug);
//     } else {
//       // Treat it as a slug
//       curriculum = await CurriculumService.deleteCurriculum(slug);
//     }

//     if (!curriculum) {
//       return NextResponse.json(
//         {
//           success: false,
//           message: 'Curriculum not found',
//         },
//         { status: 404 }
//       );
//     }

//     return NextResponse.json({
//       success: true,
//       message: 'Curriculum deleted successfully',
//     });
//   } catch (error) {
//     console.error(
//       `Error deleting curriculum with identifier ${params.slug}:`,
//       error
//     );

//     return NextResponse.json(
//       {
//         success: false,
//         message: 'Failed to delete curriculum',
//         error: (error as Error).message,
//       },
//       { status: 500 }
//     );
//   }
// }
