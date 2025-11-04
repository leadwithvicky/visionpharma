import mongoose, { Schema, Document } from 'mongoose';

export interface IWeeklyTestSubmission extends Document {
  aptitudeId: mongoose.Types.ObjectId;
  userId: mongoose.Types.ObjectId;
  answers: Array<{
    questionId: mongoose.Types.ObjectId;
    selectedAnswer: string;
  }>;
  timeSpent: number;
  score?: number;
  totalQuestions: number;
  correctAnswers: number;
  createdAt: Date;
  updatedAt: Date;
}

export const weeklyTestSubmissionSchema = new Schema<IWeeklyTestSubmission>(
  {
    aptitudeId: {
      type: Schema.Types.ObjectId,
      ref: 'aptitudes',
      required: true,
      index: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'users',
      required: true,
    },
    answers: [
      {
        questionId: {
          type: Schema.Types.ObjectId,
          ref: 'aptitude_questions',
          required: true,
        },
        selectedAnswer: {
          type: String,
          required: true,
        },
      },
    ],
    timeSpent: {
      type: Number,
      required: true,
    },
    score: {
      type: Number,
    },
    totalQuestions: {
      type: Number,
      required: true,
    },
    correctAnswers: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
