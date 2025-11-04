import { Schema } from 'mongoose';

export const AptitudeMongoSchema = new Schema(
  {
    title: {
      // Title of the aptitude (this title is used for aptitude and not for programs) and it also used to show dropdown in the frontend of program create or update program
      type: String,
      required: true,
    },
    pubId: {
      //auto increment that might be used for public URL for aptitude (Not for programs)
      type: Number,
      unique: true,
      required: true,
      autoIncrement: true,
    },
    slug: {
      // URL friendly version of title for aptitude, might be used for public URL if required otherwise use _id or pubId (Not for programs)
      type: String,
      required: true,
      unique: true,
    },
    description: {
      // Description of the aptitude
      type: String,
    },
    date: {
      type: Date,
      // required: true,
    },
    programId: {
      // Program ID to which the aptitude belongs this is used for showing dropdown in the frontend of program create or update
      type: Schema.Types.ObjectId,
      ref: 'programs',
      required: true,
    },
    startTime: {
      // Start time of the aptitude
      type: String, // or Date if you store full datetime
    },
    endTime: {
      // End time of the aptitude
      type: String, // or Date if you store full datetime
    },
    duration: {
      type: Number,
      required: true,
    }, // in minutes
  },
  { timestamps: true }
);
