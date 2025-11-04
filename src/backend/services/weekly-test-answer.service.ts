import mongoose from 'mongoose';
import {
  WeeklyTestAnswer,
  AptitudeQuestion,
  WeeklyTestSubmission,
} from '../models';

export interface SaveAnswerData {
  userId: mongoose.Types.ObjectId;
  aptitudeId: mongoose.Types.ObjectId;
  questionId: mongoose.Types.ObjectId;
  selectedOption: string;
  isCorrect: boolean;
}

export class weekTestAnswerService {
  static async saveAnswer(data: SaveAnswerData) {
    const questionId = data.questionId;

    const questionResponse = await AptitudeQuestion.findById(questionId);

    if (!questionResponse) {
      throw new Error('Question not found');
    }

    if (questionResponse.correctAnswer !== data.selectedOption) {
      data.isCorrect = false;
    } else {
      data.isCorrect = true;
    }

    const answer = await WeeklyTestAnswer.findOneAndUpdate(
      {
        userId: data.userId,
        aptitudeId: data.aptitudeId,
        questionId: data.questionId,
      },
      {
        $set: {
          selectedOption: data.selectedOption,
          isCorrect: data.isCorrect,
          lastUpdated: new Date(),
        },
      },
      {
        new: true,
        upsert: true,
      }
    );

    return answer;
  }

  static async getuserAnswers(
    aptitudeId: mongoose.Types.ObjectId,
    userId: mongoose.Types.ObjectId
  ) {
    const answers = await WeeklyTestAnswer.find({
      aptitudeId,
      userId,
    }).sort({ timestamp: 1 });

    const isSubmitted = await WeeklyTestSubmission.findOne({
      aptitudeId,
      userId,
    }).sort({ createdAt: -1 });

    console.log('isSubmitted--->', isSubmitted);

    return {
      data: answers,
      isSubmitted: isSubmitted ? true : false,
    };
  }

  static async getQuestionById(questionId: mongoose.Types.ObjectId) {
    const question = await AptitudeQuestion.findById(questionId);
    return question;
  }
}
