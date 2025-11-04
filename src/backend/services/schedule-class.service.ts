import { Pipe } from 'stream';
import { ScheduleClass, User, ProgramEnrollment } from '../models';
import mongoose, { PipelineStage, Types } from 'mongoose';

export const ScheduleClassService = {
  async postScheduleClass(body: any) {
    try {
      if (!mongoose.Types.ObjectId.isValid(body.createdBy)) {
        throw new Error('Invalid user ID');
      }

      const user = await User.findById(body.createdBy);
      if (!user) {
        throw new Error('User not found');
      }

      const newClass = await ScheduleClass.create(body);
      return newClass;
    } catch (error: any) {
      console.error('[POST_SCHEDULE_CLASS_ERROR]', error);
      throw error;
    }
  },

  async getScheduleClasses(query: any) {
    try {
      const {
        title,
        date,
        status,
        page = 1,
        limit = 10,
        fromDate,
        toDate,
        programId,
        programTitle,
      } = query;

      // Ensure page and limit are numbers
      const pageNum = parseInt(page as string, 10);
      const limitNum = parseInt(limit as string, 10);

      const match: any = {};

      // Only apply default filter for upcoming classes if no date filters specified
      if (!fromDate && !toDate && !date) {
        // match.date = { $gte: new Date() }; // default to upcoming classes
      }

      if (title) {
        match.title = { $regex: title, $options: 'i' };
      }

      // Handle single date filter (exact date)
      if (date) {
        const targetDate = new Date(date);
        const nextDay = new Date(targetDate);
        nextDay.setDate(targetDate.getDate() + 1);
        match.date = { $gte: targetDate, $lt: nextDay };
      }

      // Handle date range filter (fromDate and toDate)
      if (fromDate || toDate) {
        match.date = match.date || {};

        if (fromDate) {
          const fromDateObj = new Date(fromDate);
          match.date.$gte = fromDateObj;
        }

        if (toDate) {
          const toDateObj = new Date(toDate);
          // Set to end of day for inclusive filtering
          toDateObj.setHours(23, 59, 59, 999);
          match.date.$lte = toDateObj;
        }
      }

      // Handle program ID filter
      if (programId) {
        try {
          match.programId = new mongoose.Types.ObjectId(programId);
        } catch (error) {
          console.error('Invalid programId format:', error);
          // If invalid ID format, return no results
          return {
            data: [],
            totalCount: 0,
            totalPages: 0,
            currentPage: Number(page),
          };
        }
      }

      if (status) {
        const statusArray = Array.isArray(status)
          ? status
          : typeof status === 'string'
            ? status.split(',').map((s) => s.trim())
            : [];

        if (statusArray.length > 0) {
          match.status = { $in: statusArray };
        }
      }

      // Create pipeline stages array
      const aggregationPipeline: PipelineStage[] = [];

      // Add the match stage
      aggregationPipeline.push({ $match: match });

      // If programTitle is provided, we need to add a lookup before the final match
      if (programTitle) {
        // First lookup programs
        aggregationPipeline.push({
          $lookup: {
            from: 'programs',
            localField: 'programId',
            foreignField: '_id',
            as: 'program',
          },
        });

        // Unwind the program array
        aggregationPipeline.push({
          $unwind: {
            path: '$program',
            preserveNullAndEmptyArrays: true,
          },
        });

        // Add a match stage for program title
        aggregationPipeline.push({
          $match: {
            'program.title': { $regex: programTitle, $options: 'i' },
          },
        });
      }

      // Add sorting
      aggregationPipeline.push({ $sort: { date: -1 } });

      // Add facet stage for pagination and lookups
      aggregationPipeline.push({
        $facet: {
          data: [
            { $skip: (pageNum - 1) * limitNum },
            { $limit: limitNum },
            {
              $lookup: {
                from: 'users',
                localField: 'createdBy',
                foreignField: '_id',
                as: 'createdBy',
              },
            },
            {
              $unwind: {
                path: '$createdBy',
                preserveNullAndEmptyArrays: true,
              },
            },
            {
              $lookup: {
                from: 'programs',
                localField: 'programId',
                foreignField: '_id',
                as: 'program',
              },
            },
            {
              $unwind: {
                path: '$program',
                preserveNullAndEmptyArrays: true,
              },
            },
            {
              $project: {
                title: 1,
                description: 1,
                date: 1,
                startTime: 1,
                endTime: 1,
                durationMinutes: 1,
                meetLink: 1,
                status: 1,
                createdAt: 1,
                updatedAt: 1,
                'createdBy._id': 1,
                'createdBy.fullName': 1,
                'createdBy.email': 1,
                'createdBy.role': 1,
                'program._id': 1,
                'program.title': 1,
              },
            },
          ],
          totalCount: [{ $count: 'count' }],
        },
      });

      const result = await ScheduleClass.aggregate(aggregationPipeline);

      const totalCount = result[0]?.totalCount[0]?.count || 0;

      return {
        data: result[0]?.data || [],
        totalCount,
        totalPages: Math.ceil(totalCount / limitNum),
        currentPage: pageNum,
      };
    } catch (error) {
      console.error('[ERROR_GETTING_CLASSES]', error);
      throw error;
    }
  },

  async getScheduleClassById(id: string) {
    try {
      if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new Error('Invalid class ID');
      }

      const scheduleClass = await ScheduleClass.findById(id)
        .populate({
          path: 'createdBy',
          select: '_id fullName email role', // Select desired user fields
        })
        .populate({
          path: 'programId',
          select: '_id title', // Select desired program fields
        })
        .lean(); // Use lean for better performance if you don't need Mongoose documents

      if (!scheduleClass) {
        throw new Error('Scheduled class not found');
      }

      return scheduleClass;
    } catch (error: any) {
      console.error('[GET_SCHEDULE_CLASS_BY_ID_ERROR]', error);
      throw error;
    }
  },

  async updateScheduleClass(id: string, body: any) {
    try {
      const updatedClass = await ScheduleClass.findByIdAndUpdate(id, body, {
        new: true,
      });
      return updatedClass;
    } catch (error) {
      throw error;
    }
  },
  async deleteScheduleClass(id: string) {
    try {
      if (!id) throw new Error('Class ID is required');
      const deletedClass = await ScheduleClass.findByIdAndDelete(id);
      if (deletedClass) return deletedClass;
    } catch (error) {
      throw error;
    }
  },

  async getEnrolledScheduleClasses(userId: string, query: any) {
    try {
      if (!mongoose.Types.ObjectId.isValid(userId)) {
        throw new Error('Invalid user ID');
      }

      const { date, page = 1, limit = 10 } = query;

      // Ensure page and limit are numbers
      const pageNum = parseInt(page as string, 10);
      const limitNum = parseInt(limit as string, 10);

      // 1. Find program IDs the user is enrolled in
      const enrollments = await ProgramEnrollment.find({
        userId: new Types.ObjectId(userId),
        status: 1,
      })
        .select('programId')
        .lean();
      const enrolledProgramIds = enrollments.map(
        (enrollment) => enrollment.programId
      );

      // If user is not enrolled in any programs, return empty results
      if (enrolledProgramIds.length === 0) {
        return {
          data: [],
          totalCount: 0,
          totalPages: 0,
          currentPage: pageNum,
        };
      }

      // 2. Build the match stage for ScheduleClass
      const match: any = {
        programId: { $in: enrolledProgramIds },
        status: 'scheduled',
      };

      // Add date filter if provided
      if (date) {
        try {
          const targetDate = new Date(date);
          // Ensure targetDate is valid before using it
          if (isNaN(targetDate.getTime())) {
            throw new Error('Invalid date format provided');
          }
          const nextDay = new Date(targetDate);
          nextDay.setDate(targetDate.getDate() + 1);
          match.date = { $gte: targetDate, $lt: nextDay };
        } catch (dateError) {
          console.error('Error parsing date query:', dateError);
          throw new Error('Invalid date format. Please use YYYY-MM-DD.');
        }
      }

      // 3. Aggregation Pipeline
      const aggregationPipeline: PipelineStage[] = [
        { $match: match },
        { $sort: { date: 1 } }, // Sort by date ascending
        {
          // Facet for pagination and total count
          $facet: {
            data: [
              { $skip: (pageNum - 1) * limitNum },
              { $limit: limitNum },
              {
                $lookup: {
                  // Populate Program Details
                  from: 'programs',
                  localField: 'programId',
                  foreignField: '_id',
                  as: 'program',
                },
              },
              {
                $unwind: {
                  // Unwind the program array (should usually be one)
                  path: '$program',
                  preserveNullAndEmptyArrays: true,
                },
              },
              {
                $lookup: {
                  // Populate Creator Details
                  from: 'users',
                  localField: 'createdBy',
                  foreignField: '_id',
                  as: 'createdBy',
                },
              },
              {
                $unwind: {
                  path: '$createdBy',
                  preserveNullAndEmptyArrays: true,
                },
              },
              {
                // Project final desired fields
                $project: {
                  title: 1,
                  description: 1,
                  date: 1,
                  startTime: 1,
                  endTime: 1,
                  durationMinutes: 1,
                  meetLink: 1,
                  status: 1,
                  createdAt: 1,
                  updatedAt: 1,
                  'program._id': 1,
                  'program.title': 1,
                  'createdBy._id': 1,
                  'createdBy.fullName': 1,
                  'createdBy.email': 1,
                  'createdBy.role': 1,
                },
              },
            ],
            totalCount: [{ $count: 'count' }],
          },
        },
      ];

      const result = await ScheduleClass.aggregate(aggregationPipeline);

      const totalCount = result[0]?.totalCount[0]?.count || 0;

      return {
        data: result[0]?.data || [],
        totalCount,
        totalPages: Math.ceil(totalCount / limitNum),
        currentPage: pageNum,
      };
    } catch (error: any) {
      console.error('[GET_ENROLLED_SCHEDULE_CLASSES_ERROR]', error);
      throw error;
    }
  },
};
