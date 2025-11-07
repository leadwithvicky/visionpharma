export interface CourseCategory {
  name: string;
  branch: string[];
  program: string;
}

// coursebranch.ts
export const COURSE_BRANCH_NAVIGATION: Record<string, CourseCategory> = {
  // 'b.tech': {
  //   name: 'B.Tech',
  //   branch: [
  //     'Computer-Science-Engineering',
  //     'Information-Technology',
  //     'Biotechnology-Engineering',
  //     'Civil-Engineering',
  //     'Electronics-and-Communication-Engineering',
  //     'Electrical-Engineering',
  //     'Mechanical-Engineering',
  //     'Automobile-Engineering',
  //   ],
  // },
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
    program: 'Degree',
  },
  'msc': {
    name: 'MSC',
    branch: ['Bachelor-of-Science'],
    program: 'Degree',
  },
  // degree: {
  //   name: 'Degree',
  //   branch: [
  //     'Bachelor-of-Computer-Applications',
  //     // 'Bachelor-of-Commerce',
  //     'Bachelor-of-Science',
  //     'Bachelor-of-Business-Administration',
  //   ],
  // },
  // mba: {
  //   name: 'MBA',
  //   branch: ['Master-of-Business-Administration'],
  // },
  // mca: {
  //   name: 'MCA',
  //   branch: ['Master-of-Computer-Applications'],
  // },
  // agriculture: {
  //   name: 'Agriculture',
  //   branch: ['Agriculture'],
  // },
};
