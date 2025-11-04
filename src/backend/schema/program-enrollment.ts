import { z } from 'zod';

export const programEnrollmentZodSchema = z.object({
  programId: z.string().regex(/^[0-9a-fA-F]{24}$/, 'Invalid Program ID'),
  userId: z.string().regex(/^[0-9a-fA-F]{24}$/, 'Invalid User ID'),
  // userEmail is handled by the service, not required in payload
  type: z.enum(['ULP', 'ILP']).default('ULP'),
  status: z.number().int().min(0).max(2).default(0),
  batchMonth: z.string().optional(), // Optional as per model
  batchYear: z.number().int().optional(), // Optional as per model
});

export const updateEnrollmentZodSchema = z
  .object({
    type: z.enum(['ULP', 'ILP']).optional(),
    status: z.number().int().min(0).max(2).optional(),
    batchMonth: z.string().optional(),
    batchYear: z.number().int().optional(),
  })
  .refine(
    (data) => data.type || data.status || data.batchMonth || data.batchYear,
    {
      message:
        'At least one field (type, status, batchMonth, batchYear) must be provided for update',
    }
  );

export const getAllEnrollmentsZodSchema = z.object({
  query: z
    .object({
      nameOrEmailSearch: z.string().optional(),
      programSearch: z.string().optional(),
      page: z.coerce.number().int().min(1).default(1).optional(),
      limit: z.coerce.number().int().min(1).default(10).optional(),
      type: z.enum(['ULP', 'ILP']).optional(),
      batchMonth: z.string().optional(),
      batchYear: z.coerce.number().int().optional(),
      status: z.coerce.number().int().min(0).max(1).optional(),
    })
    .strict('Unexpected query parameters found'),
});
