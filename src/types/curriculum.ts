export interface Week {
  title: string;
  topics: string[];
  handson?: string[] | undefined;
  pdf?: File | null;
}

export interface Month {
  title: string;
  weeks: Week[];
}

export interface Module {
  title: string;
  months: Month[];
}

export interface Curriculum {
  key: string;
  title: string;
  description: string;
  modules: Module[];
}
