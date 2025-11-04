import { z } from 'zod';

export const weeklyTestAnswerZodSchema = z.object({
  userId: z.string().min(1, 'User ID is required'),
  aptitudeId: z.string().min(1, 'Aptitude ID is required'),
  questionId: z.string().min(1, 'Question ID is required'),
  selectedOption: z.string().min(1, 'Selected option is required'),
});
