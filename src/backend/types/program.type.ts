export interface createProgram_I {
  title: string;
  image: string;
  // program: string;
  // branch: string;
  // priority: number;
  description: string;
  subtopic: string;
  batchMonth: string;
  batchYear: number;
  slug: string;
  pubId: number;
}

export interface updateProgram_I {
  title?: string;
  image?: string;
  // program?: string;
  // branch?: string;
  // priority?: number;
  description?: string;
  subtopic?: string;
  batchMonth?: string;
  batchYear?: number;
}
