import z from 'zod';

export const createProgramZodSchema = z.object({
  title: z.string().min(3).max(200),
  image: z
    .preprocess(
      (val) => (val === '' ? undefined : val),
      z.string().url('Invalid URL').optional()
    )
    .optional(),
  // program: z.string().min(2).max(200),
  // branch: z.string().min(2).max(200),
  // priority: z.number().int().min(1),
  description: z.string().optional(),
  subtopic: z.string().min(3).max(200),
  batchMonth: z.string().min(1, 'Batch month is required'),
  batchYear: z.number().int().positive('Batch year is required'),
});

export const updateProgramZodSchema = z.object({
  title: z.string().min(1, 'Title is required').optional(),
  image: z
    .preprocess(
      (val) => (val === '' ? undefined : val),
      z.string().url('Image must be a valid URL').optional()
    )
    .optional(),
  // program: z.string().min(1, 'Program is required').optional(),
  // branch: z.string().min(1, 'Branch is required').optional(),
  // priority: z.number().int().min(1, 'Priority is required').optional(),
  description: z.string().optional(),
  subtopic: z.string().min(1, 'Subtopic is required').optional(),
  batchMonth: z.string().min(1, 'Batch month is required').optional(),
  batchYear: z.number().int().positive('Batch year is required').optional(),
});
