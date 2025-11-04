import mongoose from 'mongoose';
import { WeeklyTestSubmission, WeeklyTestAnswer } from '../models';

interface SubmissionData {
  aptitudeId: mongoose.Types.ObjectId;
  userId: mongoose.Types.ObjectId;
  answers: Array<{
    questionId: mongoose.Types.ObjectId;
    selectedAnswer: string;
  }>;
  timeSpent: number;
  totalQuestions: number;
  correctAnswers: number;
  score: number;
}

interface QueryParams {
  userId?: string;
  aptitudeId?: string;
  page?: string;
  limit?: string;
}

export class WeeklyTestSubmissionService {
  static async createSubmission(data: SubmissionData) {
    const weekTestResponse = await WeeklyTestAnswer.find({
      aptitudeId: data.aptitudeId,
      userId: data.userId,
    });

    if (weekTestResponse.length === 0) {
      throw new Error('No answers found for the given aptitude and user');
    }

    const correctAnswer = weekTestResponse.filter(
      (answer) => answer.isCorrect
    ).length;
    const totalQuestions = data.totalQuestions; // Replace with the actual total number of questions
    const score = Math.round((correctAnswer / totalQuestions) * 100);

    const submissionData = {
      ...data,
      totalQuestions: totalQuestions,
      correctAnswers: correctAnswer,
      score: score,
    };

    const submission = new WeeklyTestSubmission(submissionData);
    await submission.save();
    return submission;
  }

  static async getAllSubmissions(query: QueryParams) {
    const filter: any = {};

    if (query.userId) {
      filter.userId = new mongoose.Types.ObjectId(query.userId);
    }

    if (query.aptitudeId) {
      filter.aptitudeId = new mongoose.Types.ObjectId(query.aptitudeId);
    }

    const page = parseInt(query.page || '1');
    const limit = parseInt(query.limit || '10');
    const skip = (page - 1) * limit;

    const [submissions, total] = await Promise.all([
      WeeklyTestSubmission.find(filter)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .populate('userId', 'name email')
        .populate('aptitudeId', 'title'),
      WeeklyTestSubmission.countDocuments(filter),
    ]);

    return {
      submissions,
      pagination: {
        total,
        page,
        limit,
        pages: Math.ceil(total / limit),
      },
    };
  }
}
