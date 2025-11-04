import { ProgramEnrollment, Programs, User } from '@/backend/models';
import {
  getAllEnrollmentsQuery_I,
  ProgramEnrollment_I,
  UpdateEnrollment_I,
} from '../types/enrollment.type';
import { Schema } from 'mongoose';
import { isEmail } from 'validator';

export class ProgramEnrollmentService {
  static async enrollProgram(data: ProgramEnrollment_I) {
    const [user, program] = await Promise.all([
      User.findById(data.userId),
      Programs.findById(data.programId),
    ]);

    if (!user) throw new Error('User not found');
    if (!program) throw new Error('Program not found');

    console.log(user.email, data.userEmail);
    // if (user.email !== data.userEmail) {
    //   throw new Error('Email mismatch');
    // }

    const existingEnrollment = await ProgramEnrollment.findOne({
      programId: data.programId,
      userId: data.userId,
    });

    if (existingEnrollment) {
      throw new Error('User already enrolled in the program');
    }

    const enrollment = await ProgramEnrollment.create({
      ...data,
      userEmail: user.email,
      batchMonth: data.batchMonth,
      batchYear: data.batchYear,
    });

    return enrollment;
  }

  static async getAllEnrollments(query: getAllEnrollmentsQuery_I) {
    const {
      page = 1,
      limit = 10,
      nameOrEmailSearch,
      programSearch,
      type,
      batchMonth,
      batchYear,
      status,
    } = query;

    const skip = (page - 1) * limit;
    const initialMatchConditions: any = {};

    if (type) {
      initialMatchConditions.type = type;
    }
    if (batchMonth) {
      initialMatchConditions.batchMonth = batchMonth;
    }
    if (batchYear) {
      const yearNumber = Number(batchYear);
      if (!isNaN(yearNumber)) {
        initialMatchConditions.batchYear = yearNumber;
      }
    }
    if (status !== undefined && [0, 1].includes(status)) {
      initialMatchConditions.status = status;
    }

    const nameOrEmailConditions = [];
    if (nameOrEmailSearch) {
      const searchTerm = nameOrEmailSearch.trim();
      if (isEmail(searchTerm)) {
        nameOrEmailConditions.push({ userEmail: searchTerm });
      } else {
        const regex = { $regex: searchTerm, $options: 'i' };
        nameOrEmailConditions.push(
          { userEmail: regex },
          { 'user.fullName': regex }
        );
      }
    }

    const programSearchConditions = [];
    if (programSearch) {
      const regex = { $regex: programSearch.trim(), $options: 'i' };
      programSearchConditions.push({ 'program.title': regex });
    }

    const aggregationPipeline = [
      {
        $match: initialMatchConditions,
      },
      {
        $lookup: {
          from: 'programs',
          localField: 'programId',
          foreignField: '_id',
          as: 'program',
        },
      },
      { $unwind: '$program' },
      ...(programSearchConditions.length > 0
        ? [{ $match: { $or: programSearchConditions } }]
        : []),
      {
        $lookup: {
          from: 'users',
          localField: 'userId',
          foreignField: '_id',
          as: 'user',
        },
      },
      { $unwind: '$user' },
      ...(nameOrEmailConditions.length > 0
        ? [{ $match: { $or: nameOrEmailConditions } }]
        : []),
      {
        $facet: {
          data: [
            { $skip: skip },
            { $limit: limit },
            {
              $project: {
                _id: 1,
                programId: 1,
                userId: 1,
                userEmail: 1,
                type: 1,
                status: 1,
                batchMonth: 1,
                batchYear: 1,
                createdAt: 1,
                updatedAt: 1,
                'program.title': 1,
                'program.program': 1,
                'program.branch': 1,
                'program.image': 1,
                'user.email': 1,
                'user.fullName': 1,
                'user.role': 1,
                'user.phone': 1,
              },
            },
          ],
          total: [{ $count: 'count' }],
        },
      },
      {
        $unwind: '$total',
      },
      {
        $project: {
          data: 1,
          total: '$total.count',
        },
      },
    ];

    let result: any = { data: [], total: 0 };
    const aggregationResult =
      await ProgramEnrollment.aggregate(aggregationPipeline);
    if (aggregationResult && aggregationResult.length > 0) {
      result = aggregationResult[0];
    }

    const responseData = {
      data: result.data ?? [],
      total: result.total ?? 0,
      page: page ?? 1,
      limit: limit ?? 10,
    };

    return responseData;
  }

  static async updateEnrolledProgram(
    id: Schema.Types.ObjectId,
    data: UpdateEnrollment_I
  ) {
    const updateData: Partial<UpdateEnrollment_I> = { ...data };

    const enrollment = await ProgramEnrollment.findByIdAndUpdate(
      id,
      updateData,
      { new: true }
    );

    if (!enrollment) {
      throw new Error('Enrollment not found');
    }

    return enrollment;
  }
}
