import { model, models } from 'mongoose';
import { userMongoSchema } from './user.model';
import { AptitudeMongoSchema } from './aptitude.model';
import { AptitudeQuestionMongoSchema } from './aptitudeQuestion.model';
import { programMongoSchema } from './program.model';
import { programEnrollmentMongoSchema } from './program-enrollment.model';
import { scheduleClassMongoSchema } from './schedule-class.model';
import { CurriculumMongoSchema } from './curriculum.model';
import {
  IWeeklyTestSubmission,
  weeklyTestSubmissionSchema,
} from './weekly-test-submission.model';
import { weeklyTestAnswerSchema } from './weekly-test-answer';

export const User = models?.users || model('users', userMongoSchema);
export const Aptitude =
  models?.aptitudes || model('aptitudes', AptitudeMongoSchema);
export const AptitudeQuestion =
  models?.aptitude_questions ||
  model('aptitude_questions', AptitudeQuestionMongoSchema);
export const Programs =
  models?.programs || model('programs', programMongoSchema);
export const ProgramEnrollment =
  models?.program_enrollments ||
  model('program_enrollments', programEnrollmentMongoSchema);
export const ScheduleClass =
  models?.schedule_classes ||
  model('schedule_classes', scheduleClassMongoSchema);
export const Curriculum =
  models?.curriculums || model('curriculums', CurriculumMongoSchema);

export const WeeklyTestSubmission =
  models.weekly_test_submission ||
  model<IWeeklyTestSubmission>(
    'weekly_test_submission',
    weeklyTestSubmissionSchema
  );

export const WeeklyTestAnswer =
  models.weekly_test_answer ||
  model('weekly_test_answer', weeklyTestAnswerSchema);
