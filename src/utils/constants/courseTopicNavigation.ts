export interface CourseCategory {
  name: string;
  branch: string[];
  program: string;
}

// coursebranch.ts
export const COURSE_BRANCH_NAVIGATION: Record<string, CourseCategory> = {
  pharmacy: {
    name: 'Pharmacy',
    branch: [
      'Bachelor-of-Pharmacy',
      'Master-of-Pharmacy',
      'Doctor-of-Pharmacy',
      'Diploma-in-Pharmacy',
      'Bachelor-of-Science',
      'Master-of-Science',
    ],
    program: 'Pharmacy',
  },
  'b.pharm': {
    name: 'B.Pharm',
    branch: ['Bachelor-of-Pharmacy'],
    program: 'Pharmacy',
  },
  'm.pharm': {
    name: 'M.Pharm',
    branch: ['Master-of-Pharmacy'],
    program: 'Pharmacy',
  },
  'd.pharm': {
    name: 'D.Pharm',
    branch: ['Diploma-in-Pharmacy'],
    program: 'Pharmacy',
  },
  'pharmd': {
    name: 'PharmD',
    branch: ['Doctor-of-Pharmacy'],
    program: 'Pharmacy',
  },
  'bsc': {
    name: 'BSC',
    branch: ['Bachelor-of-Science'],
    program: 'pharmacy',
  },
  'msc': {
    name: 'MSC',
    branch: ['Bachelor-of-Science'],
    program: 'pharmacy',
  },
};
