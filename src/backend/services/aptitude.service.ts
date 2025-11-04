import slugify from 'slugify';
import { Aptitude, AptitudeQuestion, Programs } from '../models';
import {
  Aptitude_I,
  AptitudeQuestion_I,
  QueryParams,
} from '../types/aptiude.type';
import mongoose, { Schema, Document, FilterQuery, Types } from 'mongoose';
import { z } from 'zod';
import { QuestionSchema } from '../schema/aptitude.schema'; // Import QuestionSchema for creation

// Basic Zod schema for validating aptitude question updates
// This can be expanded or moved to a separate schema file
const OptionSchema = z.object({
  id: z.enum(['A', 'B', 'C', 'D']),
  title: z.string().min(1, 'Option title cannot be empty'),
  _id: z.string().optional(), // _id might be present if options are pre-existing Mongoose subdocuments
});

export const AptitudeQuestionUpdateSchema = z
  .object({
    questionText: z.string().min(1, 'Question text cannot be empty').optional(),
    options: z
      .array(OptionSchema)
      .min(4)
      .max(4, 'Exactly four options are required')
      .optional(),
    correctAnswer: z.enum(['A', 'B', 'C', 'D']).optional(),
    aptitudeId: z
      .string()
      .refine((val) => mongoose.Types.ObjectId.isValid(val), {
        message: 'Invalid Aptitude ID',
      })
      .optional(), // aptitudeId generally shouldn't change on update, but good to validate if passed
  })
  .partial(); // Use partial as not all fields are required for an update

export class AptitudeService {
  static async getAllAptitudes(query: any = {}) {
    try {
      const {
        searchTitle,
        searchProgram,
        page = 1,
        limit = 10,
        sortBy = 'createdAt',
        sortOrder = 'desc',
      } = query;

      const pageNum = parseInt(page as string, 10);
      const limitNum = parseInt(limit as string, 10);
      const skip = (pageNum - 1) * limitNum;

      const sort: any = {};
      sort[sortBy] = sortOrder === 'asc' ? 1 : -1;

      // Initial match stage for aptitude properties
      const matchStage: any = {};
      if (searchTitle) {
        matchStage.title = { $regex: searchTitle, $options: 'i' };
      }

      const aggregationPipeline: any[] = [
        { $match: matchStage }, // Initial filter for aptitude title (now effectively matches all if searchTitle is off)
        {
          $lookup: {
            from: 'programs',
            localField: 'programId',
            foreignField: '_id',
            as: 'programDetails',
          },
        },
        {
          $unwind: {
            path: '$programDetails',
            preserveNullAndEmptyArrays: true,
          },
        },
      ];

      // Add match stage for program title if searchProgram is provided
      if (searchProgram) {
        aggregationPipeline.push({
          $match: {
            'programDetails.title': { $regex: searchProgram, $options: 'i' },
          },
        });
      }

      // Add lookup for questions count
      aggregationPipeline.push(
        {
          $lookup: {
            from: 'aptitude_questions', // The actual name of the aptitude questions collection
            localField: '_id',
            foreignField: 'aptitudeId',
            as: 'questionsArray',
          },
        },
        {
          $addFields: {
            questions: { $size: '$questionsArray' },
            program: '$programDetails', // Assign the programDetails to program field
          },
        }
      );

      // Project to shape the output and remove temporary fields
      aggregationPipeline.push({
        $project: {
          title: 1,
          description: 1,
          date: 1,
          duration: 1,
          programId: 1,
          program: 1,
          startTime: 1,
          endTime: 1,
          questions: 1,
          pubId: 1,
          slug: 1,
          createdAt: 1,
          updatedAt: 1,
        },
      });

      // Pipeline for counting total documents matching filters (before pagination)
      const countPipeline = [...aggregationPipeline]; // Copy pipeline before sort, skip, limit
      countPipeline.push({ $count: 'total' });

      // Add sort, skip, limit for data fetching pipeline
      aggregationPipeline.push({ $sort: sort });
      aggregationPipeline.push({ $skip: skip });
      aggregationPipeline.push({ $limit: limitNum });

      const [aptitudes, totalCountResult] = await Promise.all([
        Aptitude.aggregate(aggregationPipeline).exec(),
        Aptitude.aggregate(countPipeline).exec(),
      ]);

      const total = totalCountResult.length > 0 ? totalCountResult[0].total : 0;
      const totalPages = Math.ceil(total / limitNum);

      return {
        data: aptitudes, // aptitudes are already shaped by $project
        page: pageNum,
        totalPages,
        total,
      };
    } catch (error) {
      console.error('Error in getAllAptitudes (aggregation):', error);
      throw error;
    }
  }

  static async getAptitudeById(id: string) {
    try {
      // Validate if the id is a valid MongoDB ObjectId
      if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new Error('Invalid aptitude ID format');
      }

      // Find the aptitude by ID
      const aptitude = await Aptitude.findById(id);

      // If aptitude not found, throw error
      if (!aptitude) {
        throw new Error(`Aptitude with ID ${id} not found`);
      }

      // Find all questions related to this aptitude
      const questions = await AptitudeQuestion.find({ aptitudeId: id }).select(
        'pubId questionText options'
      );

      // Convert aptitude to plain object and add questions
      const aptitudeWithQuestions = aptitude.toObject();
      aptitudeWithQuestions.questions = questions;

      return aptitudeWithQuestions;
    } catch (error) {
      console.error('Error in getAptitudeById:', error);
      throw error;
    }
  }

  static async getAptitudeByIdForAdmin(id: string) {
    try {
      // Validate if the id is a valid MongoDB ObjectId
      if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new Error('Invalid aptitude ID format');
      }

      // Find the aptitude by ID
      const aptitude = await Aptitude.findById(id);

      // If aptitude not found, throw error
      if (!aptitude) {
        throw new Error(`Aptitude with ID ${id} not found`);
      }

      // Find all questions related to this aptitude
      const questions = await AptitudeQuestion.find({ aptitudeId: id });
      // Convert aptitude to plain object and add questions
      const aptitudeWithQuestions = aptitude.toObject();
      aptitudeWithQuestions.questions = questions;

      return aptitudeWithQuestions;
    } catch (error) {
      console.error('Error in getAptitudeById:', error);
      throw error;
    }
  }
  static async createAptitude(data: Aptitude_I) {
    try {
      // Validate if programId exists
      if (!mongoose.Types.ObjectId.isValid(data.programId)) {
        throw new Error('Invalid program ID format');
      }
      const programExists = await Programs.findById(data.programId);
      if (!programExists) {
        throw new Error(`Program with ID ${data.programId} not found`);
      }

      const latestAptitude = await Aptitude.findOne(
        {},
        {},
        { sort: { pubId: -1 } }
      );
      const pubId = latestAptitude ? latestAptitude.pubId + 1 : 1;

      data.pubId = pubId;
      data.slug = slugify(`${data.title}-a${pubId}`, {
        lower: true,
        strict: true,
      });

      const aptitude = new Aptitude(data);
      await aptitude.save();

      return {
        data: aptitude,
      };
    } catch (error) {
      console.error('Error in createAptitude:', error);
      throw error;
    }
  }

  static async updateAptitude(id: string, data: Partial<Aptitude_I>) {
    try {
      // Validate if the id is a valid MongoDB ObjectId
      if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new Error('Invalid aptitude ID format');
      }

      // Check if aptitude exists
      const existingAptitude = await Aptitude.findById(id);
      if (!existingAptitude) {
        throw new Error(`Aptitude with ID ${id} not found`);
      }

      // If title is being updated, update the slug as well
      if (data.title) {
        data.slug = slugify(`${data.title}-a${existingAptitude.pubId}`, {
          lower: true,
          strict: true,
        });
      }

      // Update the aptitude
      const updatedAptitude = await Aptitude.findByIdAndUpdate(
        id,
        { $set: data },
        { new: true, runValidators: true }
      );

      return {
        data: updatedAptitude,
      };
    } catch (error) {
      console.error('Error in updateAptitude:', error);
      throw error;
    }
  }

  static async deleteAptitude(id: string) {
    try {
      // Validate if the id is a valid MongoDB ObjectId
      if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new Error('Invalid aptitude ID format');
      }

      // Check if aptitude exists
      const existingAptitude = await Aptitude.findById(id);
      if (!existingAptitude) {
        throw new Error(`Aptitude with ID ${id} not found`);
      }

      // Delete associated questions first
      await AptitudeQuestion.deleteMany({ aptitudeId: id });

      // Delete the aptitude
      await Aptitude.findByIdAndDelete(id);

      return {
        data: {
          id,
          message: 'Aptitude and associated questions deleted successfully',
        },
      };
    } catch (error) {
      console.error('Error in deleteAptitude:', error);
      throw error;
    }
  }

  static async createAptitudeQuestion(data: any) {
    // Validate incoming data for creation
    const validation = QuestionSchema.safeParse(data);
    if (!validation.success) {
      // Throw a Zod-like error or a custom error that can be formatted nicely by sendResponse
      // For simplicity, re-throwing Zod's error might be okay if sendResponse can handle it.
      // Or, construct a more specific error:
      // throw { name: 'ZodValidationError', details: validation.error.format() };
      throw validation.error; // Let the API route handler catch and format this ZodError
    }

    // Use validated data for creation
    const validatedData = validation.data;

    const latestQuestion = await AptitudeQuestion.findOne(
      {},
      { pubId: 1 },
      { sort: { pubId: -1 } }
    );
    const pubId =
      latestQuestion && latestQuestion.pubId ? latestQuestion.pubId + 1 : 1;

    const newQuestion = new AptitudeQuestion({ ...validatedData, pubId });
    await newQuestion.save();
    return newQuestion;
  }

  static async deleteAptitudeQuestion(questionId: string) {
    if (!mongoose.Types.ObjectId.isValid(questionId)) {
      throw new Error('Invalid question ID format');
    }
    const result = await AptitudeQuestion.findByIdAndDelete(questionId);
    if (!result) {
      throw new Error('Aptitude question not found');
    }
    return { message: 'Question deleted successfully', questionId };
  }

  static async updateAptitudeQuestion(
    questionId: string,
    data: z.infer<typeof AptitudeQuestionUpdateSchema>
  ) {
    if (!mongoose.Types.ObjectId.isValid(questionId)) {
      throw new Error('Invalid question ID format');
    }

    // Validate the incoming data - Zod will strip extra fields by default with parse()
    const validatedData = AptitudeQuestionUpdateSchema.parse(data);

    // Prevent changing pubId if it's part of the model and not intended to be updatable
    if ('pubId' in validatedData) {
      // @ts-ignore
      delete validatedData.pubId;
    }

    const updatedQuestion = await AptitudeQuestion.findByIdAndUpdate(
      questionId,
      { $set: validatedData }, // Use $set to apply partial updates
      { new: true, runValidators: true } // Return the updated document and run schema validators
    );

    if (!updatedQuestion) {
      throw new Error('Aptitude question not found or update failed');
    }

    return updatedQuestion;
  }

  static async getAptitudeQuestionById(id: string) {
    try {
      if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new Error('Invalid question ID format');
      }

      const question = await AptitudeQuestion.findById(id).select(
        'pubId questionText options'
      );
      if (!question) {
        return null;
      }

      return question;
    } catch (error) {
      console.error('Error in getAptitudeQuestionById:', error);
      throw error;
    }
  }

  static async getAllAptitudeQuestions() {
    try {
      const questions = await AptitudeQuestion.find({})
        .select('pubId questionText options')
        .sort({ createdAt: -1 });
      return questions;
    } catch (error) {
      console.error('Error in getAllAptitudeQuestions:', error);
      throw error;
    }
  }

  static async getQuestionsByAptitudeId(aptitudeId: string) {
    try {
      if (!mongoose.Types.ObjectId.isValid(aptitudeId)) {
        throw new Error('Invalid aptitude ID format');
      }

      // Check if aptitude exists
      const aptitude = await Aptitude.findById(aptitudeId);
      if (!aptitude) {
        throw new Error(`Aptitude with ID ${aptitudeId} not found`);
      }

      // Get all questions for this aptitude
      const questions = await AptitudeQuestion.find({ aptitudeId })
        .select('pubId questionText options')
        .sort({
          createdAt: -1,
        });
      return questions;
    } catch (error) {
      console.error('Error in getQuestionsByAptitudeId:', error);
      throw error;
    }
  }

  static async getAptitudeTests(
    queryParams: QueryParams
  ): Promise<{ data: any[]; total: number }> {
    try {
      const filters: FilterQuery<any> = {};

      const rawTitle = queryParams.title?.trim();
      const rawProgramId = queryParams.programId?.trim();
      const rawLimit = queryParams.limit;
      const rawPage = queryParams.page;

      console.log('Received query params:', {
        title: rawTitle,
        programId: rawProgramId,
        limit: rawLimit,
        page: rawPage,
      });

      // Title filter (case-insensitive regex)
      if (rawTitle) {
        filters.title = {
          $regex: rawTitle.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), // Escape special regex characters
          $options: 'i', // Case-insensitive
        };
      }

      // ProgramId filter (ensure it's a valid ObjectId)
      if (rawProgramId) {
        if (Types.ObjectId.isValid(rawProgramId)) {
          filters.programId = new Types.ObjectId(rawProgramId);
        } else {
          console.warn('Invalid programId format:', rawProgramId);
          return { data: [], total: 0 };
        }
      }

      // Limit and pagination
      const limit = Math.max(Number(rawLimit) || 20, 1);
      const page = Math.max(Number(rawPage) || 1, 1);
      const skip = (page - 1) * limit;

      console.log('Final Mongo filters:', JSON.stringify(filters));

      const [data, total] = await Promise.all([
        Aptitude.find(filters).sort({ date: -1 }).skip(skip).limit(limit),
        Aptitude.countDocuments(filters),
      ]);

      console.log(`Query returned ${data.length} documents out of ${total}`);

      return { data, total };
    } catch (error) {
      console.error('Error fetching aptitude tests:', error);
      throw error;
    }
  }
}
