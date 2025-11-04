import { Schema } from 'mongoose';

const optionSchema = new Schema({
  id: { type: String, enum: ['A', 'B', 'C', 'D'], required: true },
  title: { type: String, required: true },
});

export const AptitudeQuestionMongoSchema = new Schema(
  {
    aptitudeId: {
      type: Schema.Types.ObjectId,
      ref: 'Aptitude',
      required: true,
    },
    pubId: {
      type: Number,
      unique: true,
      required: true,
      autoIncrement: true,
    },
    questionText: {
      type: String,
      required: true,
    },
    options: {
      type: [optionSchema],
      required: true,
    }, // Array of four options
    correctAnswer: {
      type: String,
      required: true,
    }, // Correct option
  },
  { timestamps: true }
);
