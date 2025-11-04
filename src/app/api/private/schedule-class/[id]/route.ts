import dbConnect from '@/backend/config/dbConnect';
import { ScheduleClass } from '@/backend/models';
import { updateScheduleClassSchema } from '@/backend/schema/schedule-class.schema';
import { ScheduleClassService } from '@/backend/services/schedule-class.service';
import { sendResponse } from '@/utils/response';
import { NextRequest, NextResponse } from 'next/server';

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await dbConnect();
    const body = await req.json();
    const parsed = updateScheduleClassSchema.safeParse(body);

    if (!parsed.success) {
      return sendResponse(
        'Validation error',
        false,
        parsed.error.format(),
        400
      );
    }

    const res = await ScheduleClassService.updateScheduleClass(params.id, body);
    return sendResponse('Class updated successfully', true, res, 200);
  } catch (error: any) {
    return sendResponse(
      error.message || 'Error updating class',
      false,
      null,
      500
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await dbConnect();

    const deletedClass = await ScheduleClassService.deleteScheduleClass(
      params.id
    );

    if (!deletedClass) {
      return sendResponse('Class not found', false, null, 404);
    }

    return sendResponse('Class deleted successfully', true, deletedClass, 200);
  } catch (error: any) {
    return sendResponse(
      error.message || 'Error deleting class',
      false,
      null,
      500
    );
  }
}

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await dbConnect();

    const scheduleClass = await ScheduleClassService.getScheduleClassById(
      params.id
    );

    if (!scheduleClass) {
      return sendResponse('Class not found', false, null, 404);
    }

    return sendResponse(
      'Class retrieved successfully',
      true,
      scheduleClass,
      200
    );
  } catch (error: any) {
    return sendResponse(
      error.message || 'Error retrieving class',
      false,
      null,
      error.message === 'Invalid class ID' ||
        error.message === 'Scheduled class not found'
        ? 400
        : 500
    );
  }
}
