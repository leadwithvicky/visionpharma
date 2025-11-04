import dbConnect from '@/backend/config/dbConnect';
import { ProgramEnrollment } from '@/backend/models';
import { getUserFromRequest } from '@/utils/auth';
import { sendResponse } from '@/utils/response';
import mongoose from 'mongoose';

// Mark this route as dynamic since it uses request.headers via getUserFromRequest
export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  try {
    await dbConnect();

    // Get the current user from the request
    const user = await getUserFromRequest(request);
    if (!user) {
      return sendResponse('Unauthorized', false, null, 401);
    }

    // Use the user ID to find all their enrolled programs
    const userPrograms = await ProgramEnrollment.aggregate([
      {
        $match: {
          userId: new mongoose.Types.ObjectId(user._id),
          status: 1, // Only return active enrollments
        },
      },
      {
        $lookup: {
          from: 'programs',
          localField: 'programId',
          foreignField: '_id',
          as: 'program',
        },
      },
      { $unwind: '$program' },
      {
        $project: {
          _id: 1,
          type: 1, // ULP or ILP
          status: 1,
          createdAt: 1,
          updatedAt: 1,
          batchMonth: 1,
          batchYear: 1,
          'program._id': 1,
          'program.title': 1,
          'program.slug': 1,
          'program.image': 1,
          'program.program': 1,
          'program.branch': 1,
          'program.description': 1,
          'program.subtopic': 1,
        },
      },
    ]);

    return sendResponse(
      'User programs fetched successfully',
      true,
      userPrograms,
      200
    );
  } catch (error: any) {
    console.error('Error fetching user programs:', error);
    return sendResponse(
      error.message || 'Failed to fetch user programs',
      false,
      null,
      500
    );
  }
}
