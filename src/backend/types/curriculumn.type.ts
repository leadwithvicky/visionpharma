export interface Curriculum_I {
  slug: string; // Unique identifier for the curriculum
  title: string; // Title of the curriculum
  description: string; // Description of the curriculum
  modules: ModuleCurriculum_I[]; // Array of modules
}

export interface ModuleCurriculum_I {
  title: string; // Title of the module
  months: MonthCurriculum_I[]; // Array of months
}

export interface MonthCurriculum_I {
  title: string; // Title of the month
  weeks: WeekCurriculum_I[]; // Array of weeks
}

export interface WeekCurriculum_I {
  title: string; // Title of the week
  topics: TopicCurriculum_I[]; // Array of topics
  handson: HandsonCurriculum_I[]; // Array of hands-on exercises
}

export interface TopicCurriculum_I {
  title: string; // Title of the topic
}

export interface HandsonCurriculum_I {
  description: string; // Description of hands-on activity
}
