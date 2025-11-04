import { Programs } from '@/backend/models';
import mongoose from 'mongoose';
import slugify from 'slugify';
import { createProgram_I, updateProgram_I } from '../types/program.type';

export class ProgramService {
  static async getPrograms({
    search,
    page,
    limit,
    batchMonth,
    batchYear,
    sortBy,
    sortOrder,
  }: {
    search?: string;
    page?: string;
    limit?: string;
    batchMonth?: string;
    batchYear?: string;
    sortBy?: string;
    sortOrder?: 'asc' | 'desc';
  }) {
    const pageNumber = parseInt(page || '1', 10);
    const pageSize = parseInt(limit || '10', 10);

    let query: any = {};

    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { slug: { $regex: search, $options: 'i' } },
        { subtopic: { $regex: search, $options: 'i' } },
      ];
    }

    if (batchMonth) {
      query.batchMonth = batchMonth;
    }

    if (batchYear) {
      const yearNumber = parseInt(batchYear, 10);
      if (!isNaN(yearNumber)) {
        query.batchYear = yearNumber;
      }
    }

    let sortObject: any = { createdAt: -1 };

    if (sortBy && ['createdAt', 'updatedAt'].includes(sortBy)) {
      sortObject = { [sortBy]: sortOrder === 'desc' ? -1 : 1 };
    }

    const total = await Programs.countDocuments(query);
    const courses = await Programs.find(query)
      .sort(sortObject)
      .skip((pageNumber - 1) * pageSize)
      .limit(pageSize);

    return {
      total,
      page: pageNumber,
      limit: pageSize,
      courses,
    };
  }
  static async getProgramById(id: string) {
    return {
      success: true,
      data: 'Not implemented',
    };
  }
  static async getProgramBySlug(slug: string) {
    return {
      success: true,
      data: 'Not implemented',
    };
  }

  static async createProgram({
    data,
    session,
  }: {
    data: createProgram_I;
    session: mongoose.ClientSession;
  }) {
    const lastCourse = await Programs.findOne(
      {},
      {},
      { sort: { pubId: -1 } }
    ).session(session);
    const newId = lastCourse ? lastCourse.pubId + 1 : 1;

    data.slug = slugify(`${data.title}-c${newId}`, {
      lower: true,
      strict: true,
    });
    data.pubId = newId;

    const course = new Programs(data);
    await course.save({ session });

    return course;
  }

  static async updateProgram(id: string, data: Partial<updateProgram_I>) {
    // Directly update the document using findByIdAndUpdate with $set
    // This ensures new fields are added correctly and bypasses potential save() issues.
    // runValidators: true ensures schema validation still runs.
    // new: true returns the updated document.
    console.log('data', data);
    const updatedProgram = await Programs.findByIdAndUpdate(
      id,
      { $set: data }, // Use $set operator with the validated data
      { new: true, runValidators: true }
    );

    if (!updatedProgram) {
      throw new Error('Program not found or failed to update');
    }

    // Log the result from the database after update
    console.log(
      'Program after findByIdAndUpdate:',
      JSON.stringify(updatedProgram)
    );

    return updatedProgram;
  }
}
