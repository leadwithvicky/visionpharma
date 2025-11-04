// models/Class.ts
import { Schema } from 'mongoose';

export const scheduleClassMongoSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    programId: {
      type: Schema.Types.ObjectId,
      ref: 'programs',
      required: true,
      index: true,
    },
    description: {
      type: String,
    },
    date: {
      type: Date,
      required: true,
    },
    startTime: {
      type: String, // or Date if you store full datetime
      required: true,
    },
    endTime: {
      type: String, // or Date if you store full datetime
      required: true,
    },
    durationMinutes: {
      type: Number,
      required: true,
    },
    meetLink: {
      type: String,
      required: true,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'users',
    },
    status: {
      type: String,
      enum: ['scheduled', 'cancelled', 'completed'],
      default: 'scheduled',
    },
  },
  { timestamps: true }
);
