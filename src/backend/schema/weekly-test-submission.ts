import { z } from 'zod';

export const answerSchema = z.object({
  questionId: z.string(),
  selectedAnswer: z.string(),
});

export const aptitudeSubmissionZodSchema = z.object({
  aptitudeId: z.string(),
  userId: z.string(),
  answers: z.array(answerSchema),
  timeSpent: z.number(),
  totalQuestions: z.number(),
  correctAnswers: z.number(),
  score: z.number(),
});

export const getAllSubmissionsZodSchema = z.object({
  query: z.object({
    userId: z.string().optional(),
    aptitudeId: z.string().optional(),
    page: z.string().optional(),
    limit: z.string().optional(),
  }),
});
