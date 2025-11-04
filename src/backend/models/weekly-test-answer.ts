import mongoose, { Schema } from 'mongoose';

export const weeklyTestAnswerSchema = new mongoose.Schema(
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
    questionId: {
      type: Schema.Types.ObjectId,
      ref: 'aptitude_questions',
      required: true,
    },
    selectedOption: {
      type: String,
      required: true,
    },
    isCorrect: {
      type: Boolean,
      required: true,
    },
    timestamp: {
      type: Date,
      default: Date.now,
    },
    lastUpdated: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);
