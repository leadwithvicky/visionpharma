import { z } from 'zod';

const OptionSchema = z.object({
  id: z.enum(['A', 'B', 'C', 'D']),
  title: z.string().min(1, 'Option title is required'),
});

export const AptitudeSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters'),
  description: z.string().optional(),
  // date: z
  //   .string()
  //   .refine((val) => !isNaN(Date.parse(val)), 'Invalid date format'),
  duration: z.number().min(1, 'Duration must be at least 1 minute'),
  programId: z.string().length(24, 'Invalid Program ID'),
  // startTime: z.string().min(1, 'Start time is required'),
  // endTime: z.string().min(1, 'End time is required'),
});

export const QuestionSchema = z.object({
  aptitudeId: z.string().length(24, 'Invalid Aptitude ID'), // MongoDB ObjectId validation
  questionText: z.string().min(5, 'Question must be at least 5 characters'),
  options: z.array(OptionSchema).length(4, 'Exactly 4 options are required'),
  correctAnswer: z.enum(['A', 'B', 'C', 'D']), // Correct answer must be one of the option IDs
});

export const UpdateQuestionSchema = z.object({
  questionId: z.string().length(24, 'Invalid Question ID'), // MongoDB ObjectId validation
  questionText: z.string().min(5).optional(),
  options: z.array(OptionSchema).length(4).optional(),
  correctAnswer: z.enum(['A', 'B', 'C', 'D']).optional(),
});
