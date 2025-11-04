import { FaHospitalAlt } from 'react-icons/fa'; // Pharmacy
import { GiFarmTractor } from 'react-icons/gi'; // Agriculture
import { GraduationCap, MonitorCheck, MonitorCog, User } from 'lucide-react';

export const PROGRAM_NAVIGATION = [
  {
    name: 'B.Tech',
    totalCourse: '10 Courses',
    // href: '/course/',
    icon: GraduationCap,
    // endpoint: 'Computer Science Engineering',
  },
  {
    name: 'Pharmacy',
    totalCourse: '4 Courses',
    // href: '/course/',
    icon: FaHospitalAlt,
    // endpoint: 'Bachelor of Pharmacy',
  },
  {
    name: 'Degree',
    totalCourse: '4 Courses',
    image: '/images/ui-ux.png',
    // href: '/course/',
    icon: User,
    // endpoint: 'Bachelor of Computer Applications',
  },
  {
    name: 'MBA',
    totalCourse: '8 Courses',
    image: '/images/data-science.png',
    // href: '/course/',
    icon: MonitorCheck,
    // endpoint: 'Master of Business Administration',
  },
  {
    name: 'MCA',
    totalCourse: '12 Courses',
    image: '/images/product-management.png',
    // href: '/course/',
    icon: MonitorCog,
    // endpoint: 'Master of Computer Applications',
  },
  {
    name: 'Agriculture',
    totalCourse: '4 Courses',
    image: '/images/digital-marketing.png',
    // href: '/course/',
    icon: GiFarmTractor,
    // endpoint: 'Agriculture',
  },
];

export const BRANCH_OPTIONS = [
  {
    value: 'Computer Science Engineering',
    label: 'Computer Science Engineering',
  },
  { value: 'Biotechnology Engineering', label: 'Biotechnology Engineering' },
  { value: 'Civil Engineering', label: 'Civil Engineering' },
  {
    value: 'Electronics and Communication Engineering',
    label: 'Electronics and Communication Engineering',
  },
  { value: 'Bachelor of Pharmacy', label: 'Bachelor of Pharmacy' },
  { value: 'Master of Pharmacy', label: 'Master of Pharmacy' },
  { value: 'Doctor of Pharmacy', label: 'Doctor of Pharmacy' },
  { value: 'Diploma in Pharmacy', label: 'Diploma in Pharmacy' },
  {
    value: 'Bachelor of Computer Applications',
    label: 'Bachelor of Computer Applications',
  },
  { value: 'Bachelor of Science', label: 'Bachelor of Science' },
  {
    value: 'Bachelor of Business Administration',
    label: 'Bachelor of Business Administration',
  },
  {
    value: 'Master of Business Administration',
    label: 'Master of Business Administration',
  },
  {
    value: 'Master of Computer Applications',
    label: 'Master of Computer Applications',
  },
  { value: 'Agriculture', label: 'Agriculture' },
  { value: 'Mechanical Engineering', label: 'Mechanical Engineering' },
  { value: 'Electrical Engineering', label: 'Electrical Engineering' },
  { value: 'Automobile Engineering', label: 'Automobile Engineering' },
];
