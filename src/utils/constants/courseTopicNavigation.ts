export interface CourseCategory {
  name: string;
  branch: string[];
}

// coursebranch.ts
export const COURSE_BRANCH_NAVIGATION: Record<string, CourseCategory> = {
  'b.tech': {
    name: 'B.Tech',
    branch: [
      'Computer-Science-Engineering',
      'Information-Technology',
      'Biotechnology-Engineering',
      'Civil-Engineering',
      'Electronics-and-Communication-Engineering',
      'Electrical-Engineering',
      'Mechanical-Engineering',
      'Automobile-Engineering',
    ],
  },
  pharmacy: {
    name: 'Pharmacy',
    branch: [
      'Bachelor-of-Pharmacy',
      'Master-of-Pharmacy',
      'Doctor-of-Pharmacy',
      'Diploma-in-Pharmacy',
    ],
  },
  degree: {
    name: 'Degree',
    branch: [
      'Bachelor-of-Computer-Applications',
      // 'Bachelor-of-Commerce',
      'Bachelor-of-Science',
      'Bachelor-of-Business-Administration',
    ],
  },
  mba: {
    name: 'MBA',
    branch: ['Master-of-Business-Administration'],
  },
  mca: {
    name: 'MCA',
    branch: ['Master-of-Computer-Applications'],
  },
  agriculture: {
    name: 'Agriculture',
    branch: ['Agriculture'],
  },
};
