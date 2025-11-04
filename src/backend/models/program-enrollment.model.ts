import { Schema, model } from 'mongoose';

export const programEnrollmentMongoSchema = new Schema(
  {
    programId: {
      type: Schema.Types.ObjectId,
      ref: 'programs',
      required: true,
      index: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'users',
      required: true,
      index: true,
    },
    userEmail: {
      type: String,
      // required: true,
      index: true,
    },
    type: {
      type: String,
      enum: ['ULP', 'ILP'], // ULP = Ultimate Learner Program, ILP = Infinity Learner Plan
      default: 'ULP',
    },
    status: {
      type: Number,
      enum: [0, 1, 2], // 0 = pending, 1 = approved, 2 = rejected
      default: 0,
    },
    batchMonth: {
      type: String, // e.g., "January", "February"
      required: false, // Make required if necessary based on your logic
    },
    batchYear: {
      type: Number, // e.g., 2024
      required: false, // Make required if necessary based on your logic
    },
  },
  { timestamps: true }
);
