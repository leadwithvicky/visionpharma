export interface CurriculumHandsOn_I {
  description: string;
}

export interface CurriculumTopic_I {
  title: string;
}

export interface CurriculumWeek_I {
  title: string;
  topics: CurriculumTopic_I[];
  handson: CurriculumHandsOn_I[];
}

export interface CurriculumMonth_I {
  title: string;
  weeks: CurriculumWeek_I[];
}

export interface CurriculumModule_I {
  title: string;
  months: CurriculumMonth_I[];
}

export interface CreateOrUpadateCurriculum_I {
  slug: string;
  title: string;
  description: string;
  modules: CurriculumModule_I[];
}
