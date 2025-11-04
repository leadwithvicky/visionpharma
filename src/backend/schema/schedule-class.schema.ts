// schemas/classCreateSchema.ts
import { z } from 'zod';

const today = new Date();
const startOfDay = today.setHours(0, 0, 0, 0);
const startOfDayDate = new Date(startOfDay);

export const scheduleClassSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  programId: z.string().length(24, 'Invalid program ID'),
  description: z.string().optional(),
  date: z.string().refine(
    (val) => {
      const parsed = Date.parse(val);
      return !isNaN(parsed) && new Date(parsed) >= startOfDayDate;
    },
    { message: 'Date must be valid and today or in the future' }
  ),
  durationMinutes: z.number().int().positive(),
  meetLink: z.string().url({ message: 'Invalid Google Meet link' }),
  createdBy: z.string().length(24, 'Invalid user ID'), // ObjectId length
});

export const updateScheduleClassSchema = z.object({
  title: z.string().min(1).optional(),
  description: z.string().optional(),
  date: z
    .string()
    .optional()
    .refine(
      (val) => {
        if (!val) return true;
        const parsed = Date.parse(val);

        return !isNaN(parsed) && new Date(parsed) >= startOfDayDate;
      },
      { message: 'Date must be valid and in the future' }
    ),
  durationMinutes: z.number().int().positive().optional(),
  meetLink: z.string().url({ message: 'Invalid Google Meet link' }).optional(),
  status: z.enum(['scheduled', 'cancelled', 'completed']).optional(),
});

export const scheduleClassQuerySchema = z.object({
  title: z.string().optional(),
  fromDate: z
    .string()
    .optional()
    .refine(
      (val) => {
        if (!val) return true;
        return !isNaN(Date.parse(val));
      },
      { message: 'Invalid fromDate format' }
    ),
  toDate: z
    .string()
    .optional()
    .refine(
      (val) => {
        if (!val) return true;
        return !isNaN(Date.parse(val));
      },
      { message: 'Invalid toDate format' }
    ),
  programId: z.string().optional(),
  programTitle: z.string().optional(),
  date: z
    .string()
    .optional()
    .refine(
      (val) => {
        if (!val) return true;
        return !isNaN(Date.parse(val));
      },
      { message: 'Invalid date format' }
    ),
  status: z
    .union([
      z.enum(['scheduled', 'cancelled', 'completed']),
      z
        .string()
        .refine(
          (val) =>
            val
              .split(',')
              .every((s) =>
                ['scheduled', 'cancelled', 'completed'].includes(s.trim())
              ),
          { message: 'Invalid status values' }
        ),
    ])
    .optional(),
  page: z
    .string()
    .transform(Number)
    .refine((val) => !isNaN(val) && val > 0, {
      message: 'Page must be a positive number',
    })
    .optional()
    .default('1'),
  limit: z
    .string()
    .transform(Number)
    .refine((val) => !isNaN(val) && val > 0, {
      message: 'Limit must be a positive number',
    })
    .optional()
    .default('50'),
});

export const getEnrolledScheduleClassesSchema = z.object({
  date: z.string().optional().describe('Filter by date (YYYY-MM-DD)'),
  page: z.coerce
    .number()
    .int()
    .positive()
    .optional()
    .default(1)
    .describe('Page number'),
  limit: z.coerce
    .number()
    .int()
    .positive()
    .optional()
    .default(50)
    .describe('Items per page'),
});

export type GetEnrolledScheduleClassesQuery = z.infer<
  typeof getEnrolledScheduleClassesSchema
>;
