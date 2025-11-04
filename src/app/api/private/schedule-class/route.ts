// app/api/classes/route.ts
import dbConnect from '@/backend/config/dbConnect';
import { ScheduleClass } from '@/backend/models';
import {
  scheduleClassQuerySchema,
  scheduleClassSchema,
} from '@/backend/schema/schedule-class.schema';
import { ScheduleClassService } from '@/backend/services/schedule-class.service';
import { sendResponse } from '@/utils/response';
import { PipelineStage } from 'mongoose';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    const body: any = await req.json();
    const parsed = scheduleClassSchema.safeParse(body);

    if (!parsed.success) {
      return sendResponse(
        'Validation error',
        false,
        parsed.error.format(),
        400
      );
    }

    const data = await ScheduleClassService.postScheduleClass(body);

    return sendResponse('Class created successfully', true, data, 201);
  } catch (error: any) {
    return sendResponse(
      error.message || 'Error creating class',
      false,
      null,
      500
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const query: any = Object.fromEntries(searchParams.entries());

    const parsed = scheduleClassQuerySchema.safeParse(query);
    if (!parsed.success) {
      return sendResponse(
        'Validation error',
        false,
        parsed.error.format(),
        400
      );
    }

    // Get the schedule classes with filters
    const data = await ScheduleClassService.getScheduleClasses(query);

    return sendResponse('Classes fetched successfully', true, data);
  } catch (error: any) {
    console.error('[GET_CLASSES_ERROR]', error);
    return sendResponse(
      error.message || 'Error fetching classes',
      false,
      null,
      500
    );
  }
}
