// Define types for our learning path data
export interface VideoContent {
  id: string;
  title: string;
  duration: string;
  isCompleted: boolean;
}

export interface MockTestContent {
  id: string;
  title: string;
  isCompleted: boolean;
  resultAvailable: boolean;
  score?: string;
}

export interface Chapter {
  id: string;
  number: number;
  title: string;
  isCompleted: boolean;
  video: VideoContent;
  mockTest: MockTestContent;
}

export interface LearningPathProps {
  title: string;
  chapters: Chapter[];
}
