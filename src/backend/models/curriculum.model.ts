import { Schema } from 'mongoose';

const VideoSchema = new Schema({
  title: { type: String, required: true },
  url: { type: String, required: false },
});

const PdfSchema = new Schema({
  title: { type: String, required: true },
  url: { type: String, required: false },
});

const WeekSchema = new Schema({
  title: { type: String, required: true },
  subTitle: { type: String, required: true },
  videos: [VideoSchema],
  pdfs: [PdfSchema],
  test: { type: String },
});

export const CurriculumMongoSchema = new Schema(
  {
    programId: {
      type: Schema.Types.ObjectId,
      ref: 'programs',
      required: true,
      index: true,
    },
    weeks: [WeekSchema],
  },
  { timestamps: true }
);
