export interface Aptitude_I {
  title: string;
  description?: string;
  date?: string;
  duration: number;
  programId: string;
  startTime?: string;
  endTime?: string;
  pubId?: number;
  slug?: string;
}

export interface AptitudeQuestion_I {
  aptitudeId: string;
  questionText: string;
  options: Option_I[];
  correctAnswer: 'A' | 'B' | 'C' | 'D';
}

// Interface for an individual option
export interface Option_I {
  id: 'A' | 'B' | 'C' | 'D';
  title: string;
}

export interface QueryParams {
  title?: string;
  programId?: string;
  limit?: string | number;
  page?: string | number;
}
