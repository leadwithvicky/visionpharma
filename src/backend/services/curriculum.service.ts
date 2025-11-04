import { Curriculum, Programs } from '@/backend/models';
// import { uploadFileToS3 } from '@/aws/s3'; // No longer needed here
import mongoose from 'mongoose';

interface CurriculumData {
  programId: string; // Program ID reference
  slug?: string; // Optional now, as we'll use programId as primary reference
  title: string;
  description: string;
  batchMonth: string;
  batchYear: number;
  weeks: {
    title: string;
    subTitle: string;
    videos: {
      title: string;
      url?: string; // Expecting URL to be populated by frontend now
    }[];
    pdfs: {
      title: string;
      url?: string; // Expecting URL to be populated by frontend now
    }[];
    test: string;
  }[];
}

export class CurriculumService {
  /**
   * Get a curriculum by program ID
   */
  static async getCurriculumByProgramId(programId: string) {
    if (!mongoose.Types.ObjectId.isValid(programId)) {
      throw new Error('Invalid program ID format');
    }

    const result = await Curriculum.findOne({
      programId: new mongoose.Types.ObjectId(programId),
    }).populate({
      path: 'programId',
      model: Programs,
    });

    // If curriculum not found, check if program exists
    if (!result) {
      const program = (await Programs.findById(programId)) as any;

      // If program also not found, return null
      if (!program) {
        return {
          success: false,
          data: null,
        };
      }

      // If program exists, return program details
      const programData = program.toObject();

      const {
        _id: programIdStr,
        createdAt,
        updatedAt,
        __v,
        ...rest
      } = programData;

      return {
        // _id: null,
        programId: programIdStr,
        ...rest,
        weeks: [],
      };
    }

    // Convert to plain object
    const curriculum = result.toObject();

    // Store the programId value
    const programIdValue = curriculum.programId._id.toString();

    // Merge program fields into curriculum
    const mergedData = {
      ...curriculum,
      ...curriculum.programId,
      programId: programIdValue, // Replace programId object with just the ID string
    };

    // Remove duplicate _id from program
    delete mergedData._id;
    mergedData._id = curriculum._id;

    return mergedData;
  }

  /**
   * Get a curriculum by slug (kept for backward compatibility)
   */
  static async getCurriculumBySlug(slug: string) {
    const result = await Curriculum.findOne({ slug }).populate({
      path: 'programId',
      model: Programs,
    });

    // If curriculum not found, check if program exists with this slug
    if (!result) {
      const program = (await Programs.findOne({ slug })) as any;

      // If program also not found, return null
      if (!program) {
        return {
          success: false,
          data: null,
        };
      }

      // If program exists, return program details
      const programData = program.toObject();
      const {
        _id: programIdStr,
        createdAt,
        updatedAt,
        __v,
        ...rest
      } = programData;
      return {
        // _id: null,
        programId: programIdStr,
        ...rest,
        weeks: [],
      };
    }

    // Convert to plain object
    const curriculum = result.toObject();

    // Store the programId value
    const programIdValue = curriculum.programId._id.toString();

    // Merge program fields into curriculum
    const mergedData = {
      ...curriculum,
      ...curriculum.programId,
      programId: programIdValue, // Replace programId object with just the ID string
    };

    // Remove duplicate _id from program
    delete mergedData._id;
    mergedData._id = curriculum._id;

    return mergedData;
  }

  /**
   * Get all curriculums
   */
  static async getAllCurriculums() {
    const results = await Curriculum.find({}).populate({
      path: 'programId',
      model: Programs,
    });

    const mergedCurriculums = results.map((result) => {
      // Convert to plain object
      const curriculum = result.toObject();

      // Store the programId value
      const programIdValue = curriculum.programId._id.toString();

      // Merge program fields into curriculum
      const mergedData = {
        ...curriculum,
        ...curriculum.programId,
        programId: programIdValue, // Replace programId object with just the ID string
      };

      // Remove duplicate _id from program
      delete mergedData._id;
      mergedData._id = curriculum._id;

      return mergedData;
    });

    return mergedCurriculums;
  }

  /**
   * Create or update a curriculum
   * Assumes data contains final S3 URLs for videos and pdfs.
   */
  static async createOrUpdateCurriculum(
    data: CurriculumData
    // files parameter removed
  ) {
    try {
      // Validate programId
      if (!data.programId || !mongoose.Types.ObjectId.isValid(data.programId)) {
        throw new Error('Valid programId is required');
      }

      console.log('data--->', data);

      // Verify the program exists
      const program = await Programs.findById(data.programId);
      if (!program) {
        throw new Error(`Program with ID "${data.programId}" not found`);
      }

      // If slug not provided, use the program's slug
      if (!data.slug) {
        data.slug = program.slug;
      }

      // Create or update the curriculum in the database using programId
      const curriculum = await Curriculum.findOneAndUpdate(
        { programId: new mongoose.Types.ObjectId(data.programId) },
        data, // data already contains the S3 URLs
        { new: true, upsert: true, runValidators: true }
      );

      return curriculum;
    } catch (error) {
      console.error('Error in createOrUpdateCurriculum:', error);
      throw error;
    }
  }

  /**
   * Delete a curriculum by program ID
   */
  static async deleteCurriculumByProgramId(programId: string) {
    if (!mongoose.Types.ObjectId.isValid(programId)) {
      throw new Error('Invalid program ID format');
    }

    const result = await Curriculum.findOneAndDelete({
      programId: new mongoose.Types.ObjectId(programId),
    });
    return result;
  }

  /**
   * Delete a curriculum by slug (kept for backward compatibility)
   */
  static async deleteCurriculum(slug: string) {
    const result = await Curriculum.findOneAndDelete({ slug });
    return result;
  }
}
