import { Schema, model } from 'mongoose';

export const programMongoSchema = new Schema(
  {
    pubId: {
      type: Number,
      unique: true,
      required: true,
      autoIncrement: true,
    },
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: String,
    },
    // program: {
    //   type: String,
    //   required: true,
    // },
    // branch: {
    //   type: String,
    //   required: true,
    // },
    // priority: {
    //   type: Number,
    //   required: true,
    // },
    description: {
      type: String,
    },
    subtopic: {
      type: String,
      required: true,
    },
    batchMonth: {
      type: String,
      required: true,
    },
    batchYear: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);
